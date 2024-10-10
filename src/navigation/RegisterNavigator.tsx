import React from 'react';
import LoginScreen from '@/screens/RegisterScreen/LoginScreen';
import {RootStackParamList} from '@/types/StackNavigationType';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

const RegistrationNavigaitor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
    </Stack.Navigator>
  );
};

export default RegistrationNavigaitor;
