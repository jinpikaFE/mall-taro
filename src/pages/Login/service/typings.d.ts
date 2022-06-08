declare namespace NLogin {
  /** 登录实体 */
  type LoginEntity<AppTypeEnum> = Pick<
    NUser.UserEntity,
    'username' | 'password'
  > & {
    type?: AppTypeEnum;
    loginType: '1' | '2';
    appid?: string;
    appsecret?: string;
    code?: string;
  };
}

declare namespace NUser {
  /** 用户实体 */
  type UserEntity = {
    username?: string;
    password?: string;
    mobile?: string;
    avatarUrl?: string;
    gender?: number;
    nickName?: string;
    province?: string;
    country?: string;
    city?: string;
    unionid?: string;
    openid?: string;
  };
}
