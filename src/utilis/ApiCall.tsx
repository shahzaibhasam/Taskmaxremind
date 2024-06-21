import axios, { AxiosResponse } from 'axios';

const BASE_URL=`https://api.maxremind.technology/api`

interface ApiCallProps {
  params?: Record<string, any>;
  route: string;
  verb: 'get' | 'post' | 'put' | 'patch' | 'delete';
  token?: string;
  baseurl: boolean;
}

interface ApiResponse {
  status: number;
  response: any;
}

export const ApiCall = async ({
  params,
  route,
  verb,
  token,
  baseurl,
}: ApiCallProps): Promise<ApiResponse> => {
  try {
    let url = baseurl ? `${BASE_URL}/${route}` : route;

    console.log('url', url);
    console.log('params', params);

    let response: AxiosResponse | null = null;
    const headers = token ? { 'x-sh-auth': token } : undefined;

    switch (verb) {
      case 'get':
        response = await axios.get(url, { headers });
        break;
      case 'post':
        response = await axios.post(url, params, { headers });
        break;
      case 'put':
        response = await axios.put(url, params, { headers });
        break;
      case 'patch':
        response = await axios.patch(url, params, { headers });
        break;
      case 'delete':
        response = await axios.delete(url, {
          headers,
          data: params,
        });
        break;
      default:
        return { status: 400, response: 'method not found' };
    }

    if (response) {
      return { status: 200, response: response.data };
    } else {
      return { status: 500, response: 'No response from server' };
    }
  } catch (e) {
    return {
      status: 400,
      response: e?.response?.data ? e?.response?.data : { message: e.toString() },
    };
  }
};
