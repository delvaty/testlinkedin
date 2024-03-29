export type ApiResponseType<T> = {
  status: number;
  error: boolean;
  data: T;
  message?: string;
};