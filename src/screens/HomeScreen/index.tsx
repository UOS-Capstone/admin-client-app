import DropDownSelectorComponent from '@/components/common/DropDown';
import {RootStackParamList} from '@/types/StackNavigationType';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>{'HomeScreen'}</Text>
      <Button
        onPress={() => navigation.navigate('Home', {screen: 'MenuManage'})}>
        메뉴 관리
      </Button>
      <Button
        onPress={() => navigation.navigate('Home', {screen: 'MarketInfo'})}>
        가게 관리
      </Button>
      <DropDownSelectorComponent />
    </View>
  );
};

export default HomeScreen;
