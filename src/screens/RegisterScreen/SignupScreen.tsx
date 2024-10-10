import {RegisterStackParamList} from '@/types/StackNavigationType';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  navigation: StackNavigationProp<RegisterStackParamList, 'Signup'>;
};
const SignupScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignupScreen;
