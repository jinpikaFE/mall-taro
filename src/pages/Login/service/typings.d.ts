declare namespace NLogin {
  /** 登录实体 */
  type LoginEntity<AppTypeEnum> = Pick<
    NUser.UserEntity,
    'username' | 'password' | 'mobile'
  > & {
    type?: AppTypeEnum;
    loginType?: '1' | '2' | '3';
    appid?: string;
    appsecret?: string;
    code?: string;
    captcha?: string;
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
