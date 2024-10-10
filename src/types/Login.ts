export interface NaverLoginInitParams {
  consumerKey: string;
  consumerSecret: string;
  appName: string;
  /** (iOS) 네이버앱을 사용하는 인증을 비활성화 한다. (default: false) */
  disableNaverAppAuthIOS?: boolean;
  /** (iOS) Info.plist의 서비스에서 설정한 URL Type의 Schemes */
  serviceUrlSchemeIOS?: string;
}
export interface NaverLoginResponse {
  isSuccess: boolean;
  successResponse?: {
    accessToken: string;
    refreshToken: string;
    expiresAtUnixSecondString: string;
    tokenType: string;
  };
  failureResponse?: {
    message: string;
    isCancel: boolean;

    /** Android Only */
    lastErrorCodeFromNaverSDK?: string;
    /** Android Only */
    lastErrorDescriptionFromNaverSDK?: string;
  };
}
