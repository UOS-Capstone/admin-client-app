declare module 'react-native-config' {
  export interface NativeConfig {
    SERVER_URL: string;
    SERVER_API_URL: string;
    KAKAO_KEY: string;
    KAKAO_NATIVE_KEY: string;
    NAVER_APP_NAME: string;
    NAVER_URL_SCHEME: string;
    NAVER_CONSUMER_KEY: string;
    NAVER_CONSUMER_SECRET_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
