import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../utilis';
interface AppTextInputProps {
    secureTextEntry: any;
    placeholder: any;
    value:any;
    defaultValue:any;
    onChangeText?:() => string;
  }
const AppTextInput: React.FC<AppTextInputProps> = ({ secureTextEntry, placeholder,value,defaultValue,onChangeText }) => {
    return (
      <View style={styles.textinput}>
        <TextInput onChangeText={onChangeText} secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} defaultValue={defaultValue} style={styles.input} />
      </View>
    );
  };
const styles = StyleSheet.create({

  
    textinput: {
      width: "80%",
      height: 60,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
    },
    input:{height:50,width:'90%'}
  });
export default AppTextInput