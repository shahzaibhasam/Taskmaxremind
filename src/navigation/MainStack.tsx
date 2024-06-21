import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '.';
import HomeStack from './HomeStack';
import { useSelector } from 'react-redux';
import { RootState } from '../lib';
import MyDrawer from './DrawerStack';

const MainStack = () => {
  const token = useSelector((state: RootState) => state.authReducer.token);
  return (
    <NavigationContainer>
 
 {token ? <MyDrawer /> : <AuthStack />}

 </NavigationContainer>
  )
}

export default MainStack