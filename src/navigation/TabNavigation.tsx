import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DraftCharges from '../screen/Draft/DraftCharge';
import AllCharges from '../screen/Draft/AllCharges'
import { colors } from '../utilis';
const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: colors.primartext },
      }}
    >
      <Tab.Screen name="DraftCharges" component={DraftCharges} />
      <Tab.Screen name="AllCharges" component={AllCharges} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator