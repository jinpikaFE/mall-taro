import Taro from '@tarojs/taro';
import SearchIn from '@/components/searchIn';
import { Image, View } from '@tarojs/components';
import { Observer } from 'mobx-react';
import { useState } from 'react';
import { AtTabs, AtTabsPane } from 'taro-ui';

import styles from './index.module.less';

const Category: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [tabCur, setTabCur] = useState<number>(0);
  const tabArr = [
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
  ];
  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <SearchIn searchVal={searchVal} setSearchVal={setSearchVal} />
          <View className={styles.categoryContent}>
            <AtTabs
              current={tabCur}
              tabList={tabArr}
              onClick={(val) => setTabCur(val)}
              scroll
              tabDirection="vertical"
              height={Taro.getEnv() === Taro.ENV_TYPE.WEAPP ? '92vh' : '86vh'}
            >
              {tabArr?.map((item, index) => (
                <AtTabsPane
                  tabDirection="vertical"
                  key={index}
                  current={tabCur}
                  index={index}
                >
                  <View className={styles.subcategory}>
                    <View className={styles.title}>热门推荐</View>
                    <View className={styles.contentBox}>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么
                        </View>
                      </View>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么
                        </View>
                      </View>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么水
                        </View>
                      </View>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么水水水水水水水水水水水水水水
                        </View>
                      </View>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么水水水水水水水水水水水水水水
                        </View>
                      </View>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么水水水水水水水水水水水水水水
                        </View>
                      </View>
                      <View className={styles.itemBox}>
                        <View className={styles.imgBox}>
                          <Image
                            mode="aspectFill"
                            className={styles.img}
                            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/mall-fiber/yellowbk.png"
                          />
                        </View>
                        <View className={styles.categoryTitle}>
                          什么水水水水水水水水水水水水水水
                        </View>
                      </View>
                    </View>
                  </View>
                </AtTabsPane>
              ))}
            </AtTabs>
          </View>
        </View>
      )}
    </Observer>
  );
};

export default Category;
