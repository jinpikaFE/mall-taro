import { AppTypeEnum } from '@/typing/constants';
import request from '@/utils/https';

/** 登录 */
export const loginApi = (data: NLogin.LoginEntity<AppTypeEnum>) => {
  return request<TResult>(`/v1/login`, {
    method: 'post',
    data,
  });
};
