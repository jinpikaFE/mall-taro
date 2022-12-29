import { View } from '@tarojs/components';
import { Observer } from 'mobx-react';

import styles from './index.module.less';

const Cart: React.FC = () => {
  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          ss
        </View>
      )}
    </Observer>
  );
};

export default Cart;
