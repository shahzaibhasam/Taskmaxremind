import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utilis';
import AppTextInput from '../../component/AppTextInput';
import AppButton from '../../component/AppButton';

const SignUp = () => {
    const navigation = useNavigation()
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.goodtosee}>
          <Text style={styles.seetext}>Good to see you!</Text>
          <Text style={{ fontSize: 12, color: colors.primary, marginTop: 5 }}>
            let's continue the journey
          </Text>
        </View>
        <View style={styles.inputCon}>
        <Text
            style={styles.textt}
          >
            User Name
          </Text>
          <AppTextInput secureTextEntry={false} placeholder={'User Name'}/>
          <Text
            style={styles.textt}
          >
            Email
          </Text>
          <AppTextInput secureTextEntry={false} placeholder={'Email'}/>
          <Text
            style={styles.textt}
          >
            Password
          </Text>
          <AppTextInput secureTextEntry={true} placeholder={'Password'}/>
        </View>
        <View style={{...styles.inputCon,height:'30%',marginTop:10}}>
     <AppButton buttonName={'Log in'} />
        <Text style={{fontSize:12,color:colors.primary,marginTop:5}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{fontSize:12,color:colors.primary,marginTop:5,fontWeight:"bold"}}>Log in</Text>
        </TouchableOpacity>
  
        </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondary,
      paddingTop: Platform.OS === "ios" ? 0 : 15,
    },
    goodtosee: {
      marginTop: 30,
      width: "100%",
      height: "15%",
      justifyContent: "center",
      alignItems: "center",
    },
    seetext: { fontSize: 25, color: colors.primary, fontWeight: "bold" },
    inputCon: { justifyContent: "center", alignItems: "center", marginTop: 5 },
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
    textt:{
      fontSize: 12,
      color: colors.primary,
      alignSelf: "flex-start",
      marginLeft: 40,
    }
  });

export default SignUp