import { ApiResponseType } from "../../types/response";

export const handleBuildErrorResponse = async (
  res: Response
): Promise<ApiResponseType<any>> => {
  const response: ApiResponseType<[]> = await res.json();
  return {
    data: [],
    error: true,
    message: response.message,
    status: response.status,
  };
};

export const buildAsyncResponse = async <T>(
  data: T
): Promise<ApiResponseType<T>> => {
  return {
    status: 200,
    error: false,
    data: data,
  };
};
