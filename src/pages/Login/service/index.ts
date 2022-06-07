import request from '@/untils/https';

/** 登录 */
export const loginApi = (data: NLogin.LoginEntity) => {
  return request<TResult>(`/v1/login`, {
    method: 'post',
    data,
  });
};
