import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

// TODO: Interceptor 이용 토큰 헤더 추가 필요
let JWTToken: string | null = null;

const client = axios.create({
  baseURL: Config.SERVER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (JWTToken) {
      config.headers.Authorization = `Bearer ${JWTToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// 응답 인터셉터: 응답에서 토큰을 받아 저장
client.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.data.token) {
      JWTToken = response.data.token; // 토큰 갱신
      console.log('토큰 갱신:', JWTToken);
    }
    return response;
  },
  error => Promise.reject(error),
);

export const get = async <T>(url: string): Promise<T | null> => {
  try {
    const res: AxiosResponse = await client.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const post = async <T>(
  url: string,
  body?: unknown,
): Promise<T | null> => {
  try {
    const res: AxiosResponse = await client.post(url, body);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const patch = async <T>(
  url: string,
  body: unknown,
): Promise<T | null> => {
  try {
    const res: AxiosResponse = await client.patch(url, body);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const put = async <T>(url: string, body: unknown): Promise<T | null> => {
  try {
    const res: AxiosResponse = await client.put(url, body);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const del = async <T>(
  url: string,
  body?: unknown,
): Promise<T | null> => {
  try {
    const res: AxiosResponse = await client.delete(url, {data: body});
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
