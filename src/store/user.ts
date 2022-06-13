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
    mobile,
    captcha,
    type = AppTypeEnum.H5,
  }: NLogin.LoginEntity<AppTypeEnum>) => {
    Taro.showLoading({
      title: '登录中',
    });

    if (type === AppTypeEnum.H5) {
      const res = await loginApi({
        mobile,
        captcha,
        loginType: LoginTypeEnum.MOBILE,
      });
      if (res) {
        storage.set('token', res?.data?.token);
        const resUser = await getMyUserInfo({ mobile });
        if (resUser) {
          storage.set('user', resUser?.data);
          this.userInfo = resUser?.data;
          Taro.switchTab({ url: '/pages/My/index' });
          // window.location.reload();
          Taro.hideLoading();
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
            if (loginres) {
              storage.set('token', loginres?.data?.token);
              const resUser = await getMyUserInfo({
                openid: loginres?.data?.openid,
              });
              if (resUser) {
                storage.set('user', resUser?.data);
                this.userInfo = resUser?.data;
                Taro.switchTab({ url: '/pages/My/index' });
                // window.location.reload();
                Taro.hideLoading();
              }
            }
          } else {
            Taro.hideLoading();
            console.log('登录失败！' + res.errMsg);
          }
        },
      });
    }
  };
}
export const localUser = new User();
