declare namespace NLogin {
  /** 登录实体 */
  type LoginEntity = Pick<NUser.UserEntity, 'username' | 'password' | 'mobile'>;
}

declare namespace NUser {
  /** 用户实体 */
  type UserEntity = {
    username?: string;
    password?: string;
    mobile?: string;
    avatar?: string;
    gender?: string;
    nickname?: string;
  };
}
