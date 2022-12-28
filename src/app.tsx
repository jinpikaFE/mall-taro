import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect } from 'react';

import 'taro-ui/dist/style/index.scss';

import './app.less';

const App = (props) => {
  // useEffect(() => {
  //   const query = Taro.login({
  //     success(res) {
  //       if (res.code) {
  //         console.log(res);
  //       } else {
  //         console.log('login failure！' + res.errMsg);
  //       }
  //     },
  //   });
  // }, []);

  return <View className='app'>{props.children}</View>;
};

export default App;
