import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../../utilis';


interface AppTextInputProps {
    buttonName: any;
    onPress?: () => void;
  }
const AppButton: React.FC<AppTextInputProps> = ({buttonName,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width:'80%',backgroundColor:colors.primary,justifyContent:"center",alignItems:"center",height:60,borderRadius:5}}>
    <Text style={{fontSize:14,fontWeight:"500",color:colors.secondary}}>{buttonName}</Text>
  </TouchableOpacity>
  )
}
const styles=StyleSheet.create({

})
export default AppButton