import { View, Image } from '@tarojs/components';
import { FC } from 'react';
import { AtCard } from 'taro-ui';

import styles from './index.module.less';

const ImportedBrand: FC = () => {
  return (
    <View className={styles.container}>
      <AtCard
        title="进口大牌"
        className={styles.cardContent}
        isFull
      >
        <View className={`${styles.content} macy-container`}>
          <View className={styles.itemContent}>
            <Image
              mode="aspectFill"
              className={styles.img}
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
            />
            <View className={styles.desc}>
              商品描述，最多两行，超出部分用...
            </View>
            <View className={styles.data}>
              <View className={styles.pice}>42 积分</View>
              <View className={styles.num}>月销 8085笔</View>
            </View>
          </View>
          <View className={styles.itemContent}>
            <Image
              mode="aspectFill"
              className={styles.img}
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
            />
            <View className={styles.desc}>
              商品描述，最多两行，超出部分用...
            </View>
            <View className={styles.data}>
              <View className={styles.pice}>42 积分</View>
              <View className={styles.num}>月销 8085笔</View>
            </View>
          </View>
          <View className={styles.itemContent}>
            <Image
              mode="aspectFill"
              className={styles.img}
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
            />
            <View className={styles.desc}>
              商品描述，最多两行，超出部分用...
            </View>
            <View className={styles.data}>
              <View className={styles.pice}>42 积分</View>
              <View className={styles.num}>月销 8085笔</View>
            </View>
          </View>
          <View className={styles.itemContent}>
            <Image
              mode="aspectFill"
              className={styles.img}
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%BE%E7%89%871.jpg"
            />
            <View className={styles.desc}>
              商品描述，最多两行，超出部分用...
            </View>
            <View className={styles.data}>
              <View className={styles.pice}>42 积分</View>
              <View className={styles.num}>月销 8085笔</View>
            </View>
          </View>
          <View className={styles.itemContent}>
            <Image
              mode="aspectFill"
              className={styles.img}
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
            />
            <View className={styles.desc}>
              商品描述，最多两行，超出部分用...
            </View>
            <View className={styles.data}>
              <View className={styles.pice}>42 积分</View>
              <View className={styles.num}>月销 8085笔</View>
            </View>
          </View>
          <View className={styles.itemContent}>
            <Image
              mode="aspectFill"
              className={styles.img}
              src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%BE%E7%89%873.jpg"
            />
            <View className={styles.desc}>
              商品描述，最多两行，超出部分用...
            </View>
            <View className={styles.data}>
              <View className={styles.pice}>42 积分</View>
              <View className={styles.num}>月销 8085笔</View>
            </View>
          </View>
        </View>
      </AtCard>
    </View>
  );
};

export default ImportedBrand;
