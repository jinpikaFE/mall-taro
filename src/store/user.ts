import { getMyUserInfo, setUser } from '@/pages/global/service';
import { loginApi } from '@/pages/Login/service';
import { AppTypeEnum, LoginTypeEnum, MiniConfig } from '@/typing/constants';
import { storage } from '@/utils/Storage';
import Taro, { UserInfo } from '@tarojs/taro';
import { makeAutoObservable } from 'mobx';

class User {
  userInfo: Partial<UserInfo> & NUser.UserEntity = storage.get('user') || null;
  constructor() {
    makeAutoObservable(this);
  }

  signin = async ({
    username,
    password,
    type = AppTypeEnum.H5,
  }: NLogin.LoginEntity<AppTypeEnum>) => {
    console.log(type);

    if (type === AppTypeEnum.H5) {
      const res = await loginApi({
        username,
        password,
        loginType: LoginTypeEnum.ACCOUNT,
      });
      if (res) {
        storage.set('token', res?.data);
        const resUser = await getMyUserInfo({ username });
        if (resUser) {
          storage.set('user', resUser?.data);
          this.userInfo = resUser?.data;
          Taro.switchTab({ url: '/pages/My/index' });
          // window.location.reload();
        }
      }
    }

    if (type === AppTypeEnum.WEAPP) {
      Taro.login({
        success: async (res) => {
          console.log(res);

          if (res.code) {
            const loginres = await loginApi({
              appid: MiniConfig.APPID,
              appsecret: MiniConfig.APP_SECRET,
              code: res?.code,
              loginType: LoginTypeEnum.WX,
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        },
      });
    }
  };
}
export const localUser = new User();
