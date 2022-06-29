import { View, Image, ScrollView } from '@tarojs/components';
import { FC } from 'react';
import { AtCard } from 'taro-ui';

import styles from './index.module.less';

const DailyPoint: FC = () => {
  return (
    <View className={styles.container}>
      <AtCard
        title="每日爆品"
        className={styles.cardContent}
        extra="查看更多 >"
        isFull
      >
        <View className={styles.content}>
          <ScrollView scrollX>
            <View className="at-row">
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>
                  免运费免运费免运费免运费免运费免运费免运费免运费免运费
                </View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>享受成本价</View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>生日礼物</View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>每月好礼</View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>3C尝鲜价</View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>3C尝鲜价</View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
              <View className={styles.imgItem}>
                <Image
                  mode="aspectFill"
                  className={styles.imgItemAvatar}
                  src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/bluebk.jpg"
                />
                <View className={styles.itemText}>3C尝鲜价</View>
                <View className={`${styles.itemText} ${styles.pice}`}>
                  200积分
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </AtCard>
    </View>
  );
};

export default DailyPoint;
