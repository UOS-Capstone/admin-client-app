import {verifyMarket} from '@/apis/Market';
import {BottomButton, TextInput} from '@/components/common';
import {RootStackParamList} from '@/types/StackNavigationType';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert} from 'react-native';

import S from './RegisterMarketScreen.style';

const isError = (value: string | undefined, validLength?: number) => {
  if (value === undefined) {
    return false;
  }

  if (value.length === 0) {
    return true;
  }

  return !!validLength && value.length !== validLength;
};

const RegisterMarketScreen = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [marketName, setMarketName] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [businessNumber, setBusinessNumber] = useState<string | undefined>(
    undefined,
  );

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <S.RegisterMarketContainer>
      <S.RegisterMarketInputContainer>
        <TextInput
          label={'사업장명'}
          placeholder="사업장명을 입력해주세요"
          errorMessage="사업장명을 입력해주세요"
          error={isError(marketName)}
          value={marketName}
          onChange={e => setMarketName(e.nativeEvent.text)}
          required
        />
        <TextInput
          label={'대표자명'}
          placeholder="대표자명을 입력해주세요"
          errorMessage="대표자명을 입력해주세요"
          error={isError(name)}
          value={name}
          onChange={e => setName(e.nativeEvent.text)}
          required
        />
        <TextInput
          label={'개업일자(8자)'}
          placeholder="YYYYMMDD"
          errorMessage="개업일자를 입력해주세요.(YYYYMMDD)"
          keyboardType="numeric"
          error={isError(startDate, 8)}
          value={startDate}
          onChange={e => setStartDate(e.nativeEvent.text)}
          required
        />
        <TextInput
          label={'사업자등록번호(10자)'}
          placeholder="사업자등록번호를 입력해주세요(10자)"
          errorMessage="사업자등록번호를 입력해주세요(10자)"
          inputMode="numeric"
          error={isError(businessNumber, 10)}
          value={businessNumber}
          onChange={e => setBusinessNumber(e.nativeEvent.text)}
          required
        />
      </S.RegisterMarketInputContainer>
      <BottomButton
        disabled={
          isError(name) ||
          isError(marketName) ||
          isError(startDate, 8) ||
          isError(businessNumber, 10) ||
          name === undefined ||
          marketName === undefined ||
          startDate === undefined ||
          businessNumber === undefined
        }
        onPress={async () => {
          if (!name || !marketName || !startDate || !businessNumber) {
            return;
          }

          const response = await verifyMarket(
            businessNumber,
            startDate,
            name,
            marketName,
          );

          if (response) {
            Alert.alert('매장 등록이 완료되었습니다.', '', [
              {
                text: '확인',
                onPress: () => {
                  navigation.navigate('Home', {screen: 'Feed'});
                },
              },
            ]);
          } else {
            Alert.alert('매장 등록에 실패했습니다.', '', [
              {
                text: '확인',
              },
            ]);
          }
        }}>
        매장 등록
      </BottomButton>
    </S.RegisterMarketContainer>
  );
};

export default RegisterMarketScreen;
