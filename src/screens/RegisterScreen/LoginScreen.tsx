import React from 'react';
import S from './LoginScreen.style';
import {signInWithKakao, signInWithNaver} from '@/apis/Login';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@/types/StackNavigationType';

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleKakaoLogin = async () => {
    await signInWithKakao(navigation);
  };

  const handleNaverLogin = async () => {
    await signInWithNaver(navigation);
  };

  return (
    <S.LoginPageContainer>
      <S.LoginButtonContainer>
        <S.LogoImg source={require('../../assets/logo.png')} />
        <S.Description>
          <S.TitleText>마감 세일 상품을</S.TitleText>
          <S.TitleText>서프라이즈 백으로 만나보세요</S.TitleText>
        </S.Description>
        <S.LoginButtonContainer>
          <S.LoginButtonWrapper>
            <S.KakaoButton onPress={handleKakaoLogin}>
              <S.KakaoButtonText>카카오 로그인 시작하기</S.KakaoButtonText>
            </S.KakaoButton>
          </S.LoginButtonWrapper>
          <S.LoginButtonWrapper>
            <S.NaverButton onPress={handleNaverLogin}>
              <S.NaverButtonText>네이버 로그인 시작하기</S.NaverButtonText>
            </S.NaverButton>
          </S.LoginButtonWrapper>
        </S.LoginButtonContainer>
      </S.LoginButtonContainer>
    </S.LoginPageContainer>
  );
};

export default LoginScreen;
