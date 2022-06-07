import { loginApi } from '@/pages/Login/service';
import { storage } from '@/untils/Storage';
import { UserInfo } from '@tarojs/taro';
import { makeAutoObservable } from 'mobx';

class User {
  userInfo: Partial<UserInfo> = storage.get('user') || null;
  constructor() {
    makeAutoObservable(this);
  }

  signin = async ({ username, password }: NLogin.LoginEntity) => {
    const res = await loginApi({
      username,
      password,
    });
    if (res) {
      storage.set('token', res?.data);
    }
  };
}
export const localUser = new User();
