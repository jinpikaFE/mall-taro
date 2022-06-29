import { View } from '@tarojs/components';
import { Observer } from 'mobx-react';
import { FC } from 'react';

import DailyPoint from './components/dailyPoint';
import ExcitingActivitie from './components/excitingActivitie';
import HeaderSwiper from './components/headerSwiper';
import ImportedBrand from './components/importedBrand';

import styles from './index.module.less';

const Index: FC = () => {
  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <HeaderSwiper />
          <ExcitingActivitie />
          <DailyPoint />
          <ImportedBrand />
        </View>
      )}
    </Observer>
  );
};

export default Index;
