import MarketInfoScreen from '@/screens/MarketInfoScreen';
import MenuManageScreen from '@/screens/MenuManageScreen';
import {HomeStackParamList} from '@/types/StackNavigationType';
import {TabBar} from '@components/common';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';

const Tab = createBottomTabNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}} tabBar={TabBar}>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="MarketInfo" component={MarketInfoScreen} />
      <Tab.Screen name="MenuManage" component={MenuManageScreen} />
      {/* <Tab.Screen name="Favorite" component={FavoriteScreen} /> */}
      {/* Add more screens here */}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
