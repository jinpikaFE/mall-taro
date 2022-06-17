import request from '@/utils/https';

/** 用户信息 */
export const getMyUserInfo = (params: NUser.UserEntity) => {
  return request<TResult>(`/v1/user`, {
    method: 'get',
    params,
    authorize: true,
  });
};

/** 添加用户 */
export const setUser = (data: NUser.UserEntity) => {
  return request<TResult>(`/v1/user`, {
    method: 'post',
    data,
    authorize: true,
  });
};

/** 更新用户 */
export const uploadUser = (data: NUser.UserEntity) => {
  const { id, ...otherData } = data;
  return request<TResult>(`/v1/user/${data?.id}`, {
    method: 'put',
    data: otherData,
    authorize: true,
  });
};

/** 上传文件 */
export const uploadFile = (data: any) => {
  return request<TResult>(`/v1/upload`, {
    method: 'post',
    data,
    authorize: true,
  });
};

/** 获取省市区 */
export const getRegion = () => {
  return request<TResult>(`/v1/region`, {
    method: 'get',
  });
};
