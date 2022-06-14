import { localUser } from '@/store/user';
import { Input, View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { useState } from 'react';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';

import styles from './index.module.less';

const UserInfo: Taro.FC = () => {
  const onClickSkip = (url: string) => {
    Taro.navigateTo({ url: '/pages/WebView/Blog' });
  };

  const [url, setUrl] = useState('');

  const onClickUpload = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera', 'user'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // 针对小程序/h5进行兼容处理
        // 小程序
        if (process.env.TARO_ENV === 'weapp') {
          let base64 =
            'data:image/png;base64,' +
            Taro.getFileSystemManager().readFileSync(
              res.tempFilePaths?.[0],
              'base64',
            );
          setUrl(base64);
        }

        if (process.env.TARO_ENV === 'h5') {
          setUrl(res.tempFilePaths?.[0]);
          console.log(res);
        }
      },
    });
  };

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <View className={styles.avatar}>
            <Image
              style="width: 100%;height: 100%;"
              src={url}
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
