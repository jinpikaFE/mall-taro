import { View, Text } from '@tarojs/components';
import { Observer } from 'mobx-react';
import { useEffect } from 'react';
import { AtButton } from 'taro-ui';
import { localGlobal } from '../../store/global';

import styles from './index.module.less';

const Index = () => {
  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <View className={styles.index}>
            <Text>Hello world!</Text>
            <AtButton type='primary' size='small'>I need Taro UI</AtButton>
            <Text>Taro UI 支持 Vue 了吗？</Text>
            <AtButton type='primary' circle>
              支持
            </AtButton>
            <Text>共建？</Text>
            <AtButton type='secondary' circle>
              来
            </AtButton>
          </View>
          <AtButton type='primary' onClick={() => localGlobal.setCount()}>
            SSSS
          </AtButton>
          {localGlobal.count}
        </View>
      )}
    </Observer>
  );
};

export default Index;
