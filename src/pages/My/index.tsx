import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { AtAvatar, AtButton } from 'taro-ui';

import styles from './index.module.less';

const Index: Taro.FC = () => {
  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <View
            className={`${styles.userInfoContent}`}
          >
            <View
              className={`at-row at-row__justify--start ${styles.userInfoDesc}`}
            >
              <AtAvatar size="small" circle />
              <View className={styles.userInfoMes}>
                <View className={`${styles.userInfoText} ${styles.username}`}>
                  用户名
                </View>
                <View className={`${styles.userInfoText} ${styles.isVip}`}>
                  非会员
                </View>
              </View>
            </View>
            <View className={`at-row at-row__justify--between at-row__align--center ${styles.memberInfo}`}>
              <View className={`at-col ${styles.left}`}>会员</View>
              <View className={`${styles.right}`}>
                <Text>开通会员省 12312/年</Text>
                <AtButton className={styles.open} circle>立即开通</AtButton>
              </View>
            </View>
          </View>
        </View>
      )}
    </Observer>
  );
};

export default Index;
