import { AppTypeEnum } from '@/typing/constants';
import request from '@/utils/https';

/** 用户信息 */
export const getMyUserInfo = (params: NLogin.LoginEntity<AppTypeEnum>) => {
  return request<TResult>(`/v1/user`, {
    method: 'get',
    params,
    authorize: true,
  });
};

/** 添加用户 */
export const setUser = (data: NUser.UserEntity) => {
  return request<TResult>(`/v1/user`, {
    method: 'post',
    data,
    authorize: true,
  });
};
