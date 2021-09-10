import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {HomeScreenName} from '../../configs/BaseValue';
import {styles} from './loginStyles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{'Login Screen'}</Text>
      <Pressable onPress={() => navigation.navigate(HomeScreenName)}>
        <Text>{'Login'}</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
