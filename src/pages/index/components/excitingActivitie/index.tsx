import { View, Image } from '@tarojs/components';
import { FC } from 'react';
import { AtButton, AtCard } from 'taro-ui';

import styles from './index.module.less';

const ExcitingActivitie: FC = () => {
  return (
    <View className={styles.container}>
      <AtCard title="精彩活动" className={styles.cardContent} isFull>
        <View className={styles.content}>
          <View className={styles.left}>
            <Image
              className={styles.cardBackground}
              mode="aspectFill"
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/pinkbk.jpg"
            />
            <View className={styles.title}>第二份半价</View>
            <View className={styles.desc}>真爱“粉钻”</View>
            <AtButton circle className={styles.go}>
              GO &gt;
            </AtButton>
            {/* <Image
              className={styles.rightImg}
              mode="aspectFill"
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/cake1.jpg"
            /> */}
          </View>
          <View className={styles.right}>
            <View className={styles.topContent}>
              <Image
                className={styles.cardBackground}
                mode="aspectFill"
                src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
              />
              <View className={styles.title}>精品下午茶</View>
              <View className={styles.desc}>6折起</View>
              <AtButton circle className={styles.go}>
                GO &gt;
              </AtButton>
              {/* <Image
                className={styles.rightImg}
                mode="aspectFill"
                src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/cake1.jpg"
              /> */}
            </View>
            <View className={styles.bottomContent}>
              <Image
                className={styles.cardBackground}
                mode="aspectFill"
                src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
              />
              <View className={styles.title}>新品5折尝鲜</View>
              <View className={styles.desc}>马卡龙の吻</View>
              <AtButton circle className={styles.go}>
                GO &gt;
              </AtButton>
              {/* <Image
                className={styles.rightImg}
                mode="aspectFill"
                src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/cake1.jpg"
              /> */}
            </View>
          </View>
        </View>
      </AtCard>
    </View>
  );
};

export default ExcitingActivitie;
