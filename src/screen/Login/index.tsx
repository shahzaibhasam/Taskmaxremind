import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utilis";
import AppTextInput from "../../component/AppTextInput";
import AppButton from "../../component/AppButton";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../Api/routes";
import { postRequest } from "../../Api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../Redux/Reducers/authSlice";
import store from "../../Redux/store";

const Login = () => {
  const dispatch=useDispatch()
  const [username, setUsername] = useState<string>("kminchelle");
  const [password,setPassword]=useState<string>('0lelplR')
  const navigation = useNavigation()
  // const token = store.getState().authReducer?.token;
// const token = useSelector((state: RootState) => state.authReducer.token);
  const handleUsernameChange = (text: string): void => {
    setUsername(text);
  };
  const logedInObj={username:username,password:password}

  const fetchData = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      });
  if(response?.status==200){
    dispatch(setToken(response?.data?.token))
    dispatch(setUser(response?.data))
    navigation.navigate('Home')
  }
      // console.log(response?.data?.token);
     
    } catch (error) {
      console.error(error);
    }
    // try {
    //   const response = await postRequest(logedInObj, routes.login);
    //   const data = typeof response === 'string' ? JSON.parse(response) : response;
    //   // Assuming data is of type LoginResponse
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
  };
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
          Username
        </Text>
        <AppTextInput onChangeText={handleUsernameChange} value={username} defaultValue={username} secureTextEntry={false} placeholder={'Email'}/>
        <Text
          style={styles.textt}
        >
          Password
        </Text>
        <AppTextInput value={'0lelplR'} defaultValue={'0lelplR'} secureTextEntry={true} placeholder={'Password'}/>
      </View>
      <View style={{...styles.inputCon,height:'30%',marginTop:10}}>
   <AppButton onPress={()=>{
    fetchData()
    // navigation.navigate('Home')
  }
  } 
    buttonName={'Log in'} />
      <Text style={{fontSize:12,color:colors.primary,marginTop:5}}>Don't have an account?</Text>
      <TouchableOpacity onPress={()=>{
        
        navigation.navigate('SignUp')
        }}>
      <Text style={{fontSize:12,color:colors.primary,marginTop:5,fontWeight:"bold"}}>Sign Up</Text>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};
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
export default Login;
