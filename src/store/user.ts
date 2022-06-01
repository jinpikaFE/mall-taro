import { UserInfo } from '@tarojs/taro';
import { makeAutoObservable } from 'mobx';

class User {
  userInfo: Partial<UserInfo> = {}
  constructor() {
    makeAutoObservable(this);
  }

  /** set userinfo */
  setUserInfo = (params) => {
    this.userInfo = params
  };
}
export const localUser = new User();
