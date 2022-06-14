import { localUser } from '@/store/user';
import { storage } from '@/utils/Storage';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { AtAvatar, AtButton, AtCard } from 'taro-ui';

import styles from './index.module.less';

const Index: Taro.FC = () => {
  useEffect(() => {
    if (!storage.get('token')) {
      Taro.navigateTo({ url: '/pages/Login/index' });
    }
  }, []);

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <View className={`${styles.userInfoContent}`}>
            <View
              onClick={() => {
                if (localUser?.userInfo) {
                  Taro.navigateTo({ url: '/pages/My/UserInfo/index' });
                }
              }}
              className={`at-row at-row__justify--start ${styles.userInfoDesc}`}
            >
              <AtAvatar size="small" circle />
              <View className={styles.userInfoMes}>
                {!localUser?.userInfo ? (
                  <View
                    className={`${styles.username}`}
                    onClick={() =>
                      Taro.navigateTo({ url: '/pages/Login/index' })
                    }
                  >
                    立即登录
                  </View>
                ) : (
                  <>
                    <View
                      className={`${styles.userInfoText} ${styles.username}`}
                    >
                      {localUser?.userInfo?.nickName}
                    </View>
                    <View className={`${styles.userInfoText} ${styles.isVip}`}>
                      非会员
                    </View>
                  </>
                )}
              </View>
            </View>
            <View
              className={`at-row at-row__justify--between at-row__align--center ${styles.memberInfo}`}
            >
              <View className={`at-col ${styles.left}`}>会员</View>
              <View className={`${styles.right}`}>
                <Text>开通会员省 12312/年</Text>
                <AtButton className={styles.open} circle>
                  立即开通
                </AtButton>
              </View>
            </View>
          </View>
          <View className={`${styles.cardContent}`}>
            <AtCard
              title="订单信息"
              isFull
              renderIcon={
                <Text className={`iconfont icon-ording ${styles.titleIcon}`} />
              }
            >
              <View className="at-row">
                <View className="at-col">
                  <Text
                    className={`iconfont icon-wallet ${styles.itemIcon}`}
                  ></Text>
                  <View className={styles.itemText}>待付款</View>
                </View>
                <View className="at-col">
                  <Text
                    className={`iconfont icon-slive-goods ${styles.itemIcon}`}
                  ></Text>
                  <View className={styles.itemText}>待发货</View>
                </View>
                <View className="at-col">
                  <Text
                    className={`iconfont icon-receive-goods ${styles.itemIcon}`}
                  ></Text>
                  <View className={styles.itemText}>待收货</View>
                </View>
                <View className="at-col">
                  <Text
                    className={`iconfont icon-refund ${styles.itemIcon}`}
                  ></Text>
                  <View className={styles.itemText}>退货退款</View>
                </View>
                <View className="at-col">
                  <Text
                    className={`iconfont icon-all-ording ${styles.itemIcon}`}
                  ></Text>
                  <View className={styles.itemText}>全部订单</View>
                </View>
              </View>
            </AtCard>
          </View>
          <View className={`${styles.cardContent}`}>
            <AtCard
              title="开通会员享权益"
              isFull
              renderIcon={
                <Text className={`iconfont icon-member ${styles.titleIcon}`} />
              }
              note="开通会员，每年省 3233元"
            >
              <ScrollView scrollX>
                <View className="at-row">
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>免运费</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>享受成本价</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>生日礼物</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>每月好礼</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>3C尝鲜价</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>3C尝鲜价</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>3C尝鲜价</View>
                  </View>
                </View>
              </ScrollView>
            </AtCard>
          </View>
          <View className={`${styles.cardContent}`}>
            <AtCard
              title="我的服务"
              isFull
              renderIcon={
                <Text
                  className={`iconfont icon-my-server ${styles.titleIcon}`}
                />
              }
            >
              <ScrollView scrollX>
                <View className="at-row">
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>一对一客服</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>优惠券</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>收货地址</View>
                  </View>
                  <View className={styles.imgItem}>
                    <AtAvatar
                      size="small"
                      className={styles.imgItemAvatar}
                      circle
                    />
                    <View className={styles.itemText}>会员</View>
                  </View>
                </View>
              </ScrollView>
            </AtCard>
          </View>
        </View>
      )}
    </Observer>
  );
};

export default Index;
