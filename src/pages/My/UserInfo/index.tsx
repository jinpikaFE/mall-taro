import { uploadUser } from '@/pages/global/service';
import { localUser } from '@/store/user';
import { storage } from '@/utils/Storage';
import { View, Image, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { useState } from 'react';
import { AtButton, AtList, AtListItem } from 'taro-ui';

import styles from './index.module.less';

const UserInfo: Taro.FC = () => {
  const [userGender, setUserGender] = useState(localUser?.userInfo?.gender);
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

  const onClickSignout = () => {
    storage.clear();
    localUser.clearUserInfo();
    Taro.navigateTo({ url: '/pages/Login/index' });
  };

  const renderGender = (): string => {
    switch (+(userGender || '0')) {
      case 1:
        return '男';
      case 2:
        return '女';
      default:
        return '未知';
    }
  };

  const onChangeGender = async (e) => {
    const upUserRes = await uploadUser({
      id: localUser.userInfo.id,
      gender: e.detail.value?.toString(),
    });
    if (upUserRes) {
      localUser.setUserInfo({ gender: e.detail.value?.toString() });
      setUserGender(e.detail.value);
      Taro.showToast({
        title: '更新成功',
        icon: 'success',
        duration: 2000,
      });
    }
  };

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
            <AtListItem
              title="昵称"
              arrow="right"
              extraText={localUser.userInfo.nickName || ''}
              onClick={() =>
                Taro.navigateTo({
                  url: '/pages/My/UserInfo/UpdateUserInfo/index?formItem=nickName',
                })
              }
            />
            <Picker
              mode="selector"
              range={['未知', '男', '女']}
              value={userGender}
              onChange={onChangeGender}
            >
              <AtListItem
                title="性别"
                arrow="right"
                extraText={renderGender()}
              />
            </Picker>
            <AtListItem
              title="手机号"
              arrow="right"
              extraText={localUser.userInfo.mobile || ''}
              onClick={() =>
                Taro.navigateTo({
                  url: '/pages/My/UserInfo/UpdateUserInfo/index?formItem=mobile',
                })
              }
            />
            <AtListItem
              title="微信"
              arrow="right"
              extraText={localUser.userInfo.openid ? '已绑定' : '未绑定'}
            />
            <AtListItem
              title="所在地"
              arrow="right"
              extraText={localUser?.userInfo?.province || ''}
              onClick={() =>
                Taro.navigateTo({
                  url: '/pages/My/UserInfo/UpdateUserInfo/index?formItem=local',
                })
              }
            />
          </AtList>
          <AtButton className={styles.signoutBtn} onClick={onClickSignout}>
            退出登录
          </AtButton>
        </View>
      )}
    </Observer>
  );
};

export default UserInfo;
