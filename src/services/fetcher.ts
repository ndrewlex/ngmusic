type SuccessResponse<TData> = {
  data: TData;
};

type ErrorResponse = {
  data: null;
};

export type APIResponse<TData> = SuccessResponse<TData> | ErrorResponse;

async function fetcher<T1>(endpoint: string): Promise<APIResponse<T1>> {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {
      data,
    };
  } catch (e) {
    return {
      data: null,
    };
  }
}

export default fetcher;
