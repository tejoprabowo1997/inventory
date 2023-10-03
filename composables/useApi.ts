export const useApi = async (
  url: string,
  method:
    | 'GET'
    | 'HEAD'
    | 'PATCH'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | 'TRACE'
    | 'get'
    | 'head'
    | 'patch'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
    | undefined,
  body: any | null = null,
  query: any | null = null,
) => {
  const overlayStore = useOverlayStore();
  overlayStore.showOverlay({ message: 'Loading...' });
  interface IResponse {
    success: boolean;
    message?: string;
    data?: any;
  }

  try {
    const response: IResponse = await $fetch(url, {
      method,
      body,
      query,
    });
    overlayStore.hideOverlay();
    return response;
  } catch (error) {
    console.log(error);
    overlayStore.hideOverlay();
    return {
      success: false,
      message: 'Error',
      data: null,
    };
  }
};
