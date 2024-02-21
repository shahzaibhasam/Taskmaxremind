import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from '.';

const MainStack = () => {
  return (
    <NavigationContainer>
 
     <HomeStack/>

 </NavigationContainer>
  )
}

export default MainStack