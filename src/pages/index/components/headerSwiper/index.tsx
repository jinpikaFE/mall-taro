import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import { FC, useState } from 'react';
import { AtSearchBar } from 'taro-ui';

import styles from './index.module.less';

const HeaderSwiper: FC = () => {
  const [searchVal, setSearchVal] = useState('');
  const onSearchChange = (value: string) => {
    setSearchVal(value);
  };
  
  return (
    <View className={styles.header}>
      <AtSearchBar
        className={styles.search}
        value={searchVal}
        onChange={onSearchChange}
      />
      <Swiper
        className={styles.swiperContainer}
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image
            mode="widthFix"
            className={styles.swiperImage}
            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%BE%E7%89%871.jpg"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            mode="widthFix"
            className={styles.swiperImage}
            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%BE%E7%89%872.jpg"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            mode="widthFix"
            className={styles.swiperImage}
            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%BE%E7%89%873.jpg"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            mode="widthFix"
            className={styles.swiperImage}
            src="https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com/images/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%BE%E7%89%874.jpg"
          />
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default HeaderSwiper
