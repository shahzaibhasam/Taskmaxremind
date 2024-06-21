import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../../utilis';

import Ionicons from 'react-native-vector-icons/Ionicons'
import { getHeight } from '../../lib';


interface AppTextInputProps {
    buttonName: any;
    onPress?: () => void;
    iconName:string,
    backgroundColor?: string;
    style:any
  }
const AppButton: React.FC<AppTextInputProps> = ({buttonName,onPress,iconName='',backgroundColor,style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[,styles.button, { backgroundColor: backgroundColor},style]}>
      <Ionicons name={iconName} size={20} color={colors.primartext}/>
    <Text style={{fontSize:14,fontWeight:"500",color:colors.secondary}}>{buttonName}</Text>
  </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
button:{width:'85%',backgroundColor:colors.primary,justifyContent:"center",alignItems:"center",height:getHeight(7),borderRadius:5,flexDirection:'row',marginTop:getHeight(2)}
})
export default AppButton