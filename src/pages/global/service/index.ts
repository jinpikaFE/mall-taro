import request from '@/utils/https';

/** 用户信息 */
export const getMyUserInfo = (params: NUser.UserEntity) => {
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
