declare type TResult<T = any> = {
  code: number;
  message: string;
  data: T;
};
