import {login as kakaoLogin} from '@react-native-seoul/kakao-login';
import {post} from './methods';
import {NativeModules, Platform} from 'react-native';
import {NaverLoginInitParams} from '@/types/Login';
import {NaverLoginResponse} from '@/types/Login';
import Config from 'react-native-config';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@/types/StackNavigationType';

// 네이버 로그인 관련 설정
const {RNNaverLogin} = NativeModules;
const initializeNaver = ({
  appName,
  consumerKey,
  consumerSecret,
  disableNaverAppAuthIOS = false,
  serviceUrlSchemeIOS = '',
}: NaverLoginInitParams) => {
  if (Platform.OS === 'ios') {
    if (!serviceUrlSchemeIOS) {
      console.log('serviceUrlSchemeIOS is missing in iOS initialize.');
      return;
    }
    RNNaverLogin.initialize(
      serviceUrlSchemeIOS,
      consumerKey,
      consumerSecret,
      appName,
      disableNaverAppAuthIOS,
    );
  } else if (Platform.OS === 'android') {
    RNNaverLogin.initialize(consumerKey, consumerSecret, appName);
  }
};

const naverLogin = (): Promise<NaverLoginResponse> => {
  return RNNaverLogin.login();
};

const naverLoginParams = {
  appName: Config.NAVER_APP_NAME,
  consumerKey: Config.NAVER_CONSUMER_KEY,
  consumerSecret: Config.NAVER_CONSUMER_SECRET_KEY,
  serviceUrlSchemeIOS: Config.NAVER_URL_SCHEME,
  disableNaverAppAuthIOS: false,
};

// 네이버 로그인 함수
export const signInWithNaver = async (
  navigation: StackNavigationProp<RootStackParamList>,
) => {
  initializeNaver(naverLoginParams);
  try {
    // Oauth 토큰 생성
    const loginResult = await naverLogin();
    if (loginResult.isSuccess && loginResult.successResponse) {
      const {accessToken} = loginResult.successResponse;
      console.log('Naver Access Token:', accessToken);
      // JWT 토큰
      const response = await post('/auth/login', {
        provider: 'NAVER',
        roles: 'ROLE_STORE_OWNER',
        accessToken,
      });

      if (response) {
        navigation.navigate('Home', {screen: 'MarketInfo'});
        console.log('네이버 로그인 성공:', response);
      } else {
        console.log('네이버 로그인 실패');
      }
    } else {
      console.log('네이버 로그인 실패:', loginResult.failureResponse);
    }
  } catch (error) {
    console.error('네이버 로그인 에러:', error);
  }
};

// 카카오 로그인 함수
export const signInWithKakao = async (
  navigation: StackNavigationProp<RootStackParamList>,
) => {
  try {
    // Oauth 토큰 생성
    const token = await kakaoLogin();
    console.log('Kakao Token:', token);
    // JWT 토큰
    const response = await post('/auth/login', {
      provider: 'KAKAO',
      roles: 'ROLE_STORE_OWNER',
      accessToken: token.accessToken,
    });

    if (response) {
      navigation.navigate('Home', {screen: 'MarketInfo'});
      console.log('카카오 로그인 성공:', response);
    } else {
      console.log('카카오 로그인 실패');
    }
  } catch (error) {
    console.error('카카오 로그인 에러:', error);
  }
};
