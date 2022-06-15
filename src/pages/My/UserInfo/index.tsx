import { uploadUser } from '@/pages/global/service';
import { localUser } from '@/store/user';
import { storage } from '@/utils/Storage';
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { AtList, AtListItem } from 'taro-ui';

import styles from './index.module.less';

const UserInfo: Taro.FC = () => {
  const onClickSkip = (url: string) => {
    Taro.navigateTo({ url: '/pages/WebView/Blog' });
  };

  const onClickUpload = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera', 'user'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        Taro.uploadFile({
          url: `${process.env.BASE_URL}/v1/upload`, //仅为示例，非真实的接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          header: {
            Authorization: `Bearer ${storage.get('token')}`,
          },
          fileName: `${new Date().getTime()}.png`,
          success: async (resUp) => {
            console.log(resUp);
            const url = JSON.parse(resUp?.data)?.data?.url;
            const upUserRes = await uploadUser({
              id: localUser.userInfo.id,
              avatarUrl: url,
            });
            if (upUserRes) {
              localUser.setUserInfo({ avatarUrl: url });
              Taro.showToast({
                title: '更新成功',
                icon: 'success',
                duration: 2000,
              });
            }
          },
        });
      },
    });
  };

  useEffect(()=>{
    console.log(localUser?.userInfo?.avatarUrl);
    
  },[])

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <View className={styles.avatar} onClick={onClickUpload}>
            <Image
              style="width: 100%;height: 100%;"
              src={localUser?.userInfo?.avatarUrl || ''}
              mode="aspectFill"
            />
          </View>
          <View onClick={onClickUpload} className={styles.altAvatar}>
            更换头像
          </View>
          <AtList>
            <AtListItem title="Avator" arrow="right" />
            <AtListItem title="NickName" arrow="right" />
            <AtListItem title="Gender" arrow="right" />
            <AtListItem title="Signature" arrow="right" />
          </AtList>
        </View>
      )}
    </Observer>
  );
};

export default UserInfo;
