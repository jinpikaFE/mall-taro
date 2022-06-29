import { View } from '@tarojs/components';
import { Observer } from 'mobx-react';
import { FC } from 'react';
import ExcitingActivitie from './components/excitingActivitie';
import HeaderSwiper from './components/headerSwiper';

import styles from './index.module.less';

const Index: FC = () => {
  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <HeaderSwiper />
          <ExcitingActivitie />
        </View>
      )}
    </Observer>
  );
};

export default Index;
