import Taro from '@tarojs/taro'
import configStore from '@/models'
import Auth from '@/interceptor/authorize'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (response: any): Response => {
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    Taro.showToast({
      title: errorText,
      icon: 'none',
    })
  }
};
/**
 * 拼接要请求的API路径
 * @param path
 */
const getUrl = (path) => {
  const state = configStore.getState();
  // 判断如原URL以http开头，为识别为自定义地址，就不使用全局base url 进行拼接
  return path.indexOf('http') > -1 ? path : `${state.common.baseApiUrl}${path}`
}

/**
 *
 * @param path
 * @param options
 */
async function request(path: any, options: any = {}) {
  let authorization = null;
  // 是否要受权
  if (options && options.authorize !== false) {
    await Auth.run();
    authorization = Auth.get().accessToken;
  }
  const opt = {
    url: getUrl(path),
    data: options.params || options.data,
    header: {
      'content-type': 'application/json',
      ...options.header,
      authorization,
    },
    method: options.method,
    dataType: options.dataType,
    responseType: options.responseType,
  };
  // 抽离成公共方法
  const awaitWrap = (promise) => {
    return promise
      .then(data => [ null, data ])
      .catch(err => [ err, null ])
  }
  // 执行请求
  const [ err, data ] = await awaitWrap(Taro.request(opt))
  // 返回是否错误
  if (err) {
    Taro.logger.error('request <==', JSON.stringify(err));
    errorHandler(err)
    throw new Error(err)
  }
  // 返回 promise
  return new Promise((resolve, reject) => {
    if (options.callback && typeof options.callback === 'function') {
      options.callback(data);
    } else if (options.callback === false) {
      // 在这里执行全局回调
      resolve(data);
    } else {
      resolve(data.data);
    }
  })
}

export default request;
