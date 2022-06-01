import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { AtList, AtListItem } from 'taro-ui';
import { localUser } from '@/store/user';

import styles from './index.module.less';

const Index: Taro.FC = () => {
  const [webUrl, setWebUrl] = useState('');
  // useEffect(() => {
  //   Taro.getUserProfile({
  //     desc: 'used fixd userinfo',
  //     success: (res) => {
  //       localUser.setUserInfo(res.userInfo);
  //     },
  //   });
  // }, []);

  /** add study task */
  const onClickAddTask = () => {
    Taro.scanCode({
      success: (res) => {
        console.log(res);
      },
    });
  };

  /** skip url */
  const onClickSkip = (url: string) => {
    Taro.navigateTo({ url: '/pages/WebView/index' });
  };

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <AtList hasBorder={false}>
            <AtListItem
              className={styles.userInfo}
              hasBorder={false}
              title={localUser?.userInfo?.nickName}
              thumb={localUser?.userInfo?.avatarUrl}
              arrow="right"
              onClick={() =>
                Taro.navigateTo({ url: '/pages/Login/index' })
              }
            />
          </AtList>
          <AtList className={styles.actList}>
            <AtListItem
              onClick={() => onClickSkip('http://blog.jinxinapp.cn/#/')}
              title="AuthorGithub"
              arrow="right"
            />
            <AtListItem
              onClick={() => onClickSkip('https://github.com/jinpikaFE')}
              title="JinPika Personal Blog"
              arrow="right"
            />
            <AtListItem
              onClick={onClickAddTask}
              title="ScanCode"
              arrow="right"
            />
            <AtListItem title="About" arrow="right" />
          </AtList>
        </View>
      )}
    </Observer>
  );
};

export default Index;
