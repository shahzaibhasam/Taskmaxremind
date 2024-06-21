import { View, Text, StyleSheet, Platform, Image, Dimensions, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { colors } from "../../utilis";
import AppTextInput from "../../component/AppTextInput";
import AppButton from "../../component/AppButton";
import {
  KeyboardAwareScrollView,
  } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../Redux/Reducers/authSlice";
import BackgroundImage from "../../component/BackgroundImage";
import { RootState, getFontSize, getHeight, getWidth } from "../../lib";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const userRef = useRef<TextInput>(null);
  const userPass = useRef<TextInput>(null);
  const [username, setUsername] = useState<string>("");
  const [password,setPassword]=useState<string>('')
  const [eyeActice,setEyeActive]=useState(false)
  const [isChecked, setChecked] = useState(false);
 
 
const token = useSelector((state: RootState) => state.authReducer.token);
  const handleUsernameChange = (text: string): void => {
    setUsername(text);

  };
  const handlePasswordChange = (text: string): void => {
    setPassword(text);
  };


  const logedInObj={email:username,password:password}
  console.log('password',logedInObj)

  const fetchData = async () => {
    const TOKEN_URL ='https://api.maxremind.technology/api/v1/mxchuser/login/'
    
    try {
      const response = await axios.post(TOKEN_URL, logedInObj,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
 
  if(response?.status==200){
    dispatch(setToken(response?.data?.access_token))
    dispatch(setUser(response?.data))
    navigation.navigate('Home')
  }
      console.log(response?.data?.token);
     
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
      console.error(error);
    }

  };
  function toggleEyeActive(): void {
    setEyeActive(!eyeActice);
  }


  return (
    <>
    <BackgroundImage>
    <KeyboardAwareScrollView 
			contentContainerStyle={styles.container}
			enableAutomaticScroll
			// resetScrollToCoords={{ x: 0, y: 0 }}
			// scrollEnabled={false}
			extraHeight={getHeight(30)}
			> 
      <View style={styles.containerinside}>
      <Image style={styles.image} source={require('../../../assets/Logo1.png')} />
      <View style={styles.titleContainer}>
					<Text style={styles.mainTitle}> Welcome to MaxRemind Charts </Text>
					<Text style={styles.subTitle}>Enter your Details to login</Text>
				</View>
        <AppTextInput ref={userRef} placeholder={'Email'} value={username} onChangeText={handleUsernameChange} iconName="envelope-o" onPress={()=>console.log('hi')}/>
        <AppTextInput ref={userPass} placeholder={'Password'} value={password} onChangeText={handlePasswordChange} secureTextEntry={eyeActice?false:true} iconName={eyeActice?"eye":'eye-slash'} onPress={toggleEyeActive} />
          <View style={styles.aligRow}>
          <Checkbox style={styles.checkbox} color={isChecked ? '#4630EB' : undefined} value={isChecked} onValueChange={()=>setChecked(!isChecked)} />
          <Text style={styles.forgotPass}>Forgot Password?</Text>
          </View>
          <AppButton buttonName={'LOGIN'} backgroundColor={colors.buttontext} onPress={fetchData}/>
          <AppButton buttonName={'FINGERPRINT'} backgroundColor={colors.btnsecondary} onPress={()=>console.log('he;l')} iconName="finger-print"/>
          <Text style={styles.signup}>Don&apos;t have an account?</Text>
        <View style={{position:'absolute',bottom:getHeight(2)}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={styles.itemContainer}>
			
			<View style={{flexDirection:'row',alignItems:'center'}}>
      <MaterialCommunityIcons color={colors.primartext} name={'chat-question'} size={20}/>
      <Text style={styles.footerText}>About Us</Text>
      </View>
			
			
			</View>
      <View style={styles.itemContainer}>
			
			<View style={{flexDirection:'row',alignItems:'center'}}>
      <MaterialCommunityIcons color={colors.primartext} name={'phone'} size={20}/>
      <Text style={styles.footerText}>Contact Us</Text>
      </View>
			
			
			</View>
      <View style={styles.itemContainer}>
			
			<View style={{flexDirection:'row',alignItems:'center'}}>
      <MaterialCommunityIcons color={colors.primartext} name={'chat-question'} size={20}/>
      <Text style={styles.footerText}>Feedback</Text>
      </View>
			
			
			</View>
        </View>
        </View>
		 
		</View>
    </KeyboardAwareScrollView>
    </BackgroundImage>
    </>
  );
};
const styles = StyleSheet.create({
  footerText: {
		color: colors.primartext,
		fontSize: 16,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		marginHorizontal: 5,
	},
  footerContainer: {
		flexDirection: 'row',
		position: 'absolute',
		height: getHeight(8),
		bottom: 0,
		width: Dimensions.get('window').width,
		justifyContent: 'space-around', // Align items horizontally at the center
		alignItems: 'center', // Align items vertically at the center
	},
	itemContainer: {
		flexDirection: 'row', // Arrange icon and text horizontally
		alignItems: 'center', // Align items vertically at the center
		paddingHorizontal: 5,
		marginHorizontal: 5,
	},

  footer:{
    flexDirection: 'row',
		// position: 'absolute',
		height: getHeight(8),
		// bottom: 0,
		width: Dimensions.get('window').width,
		justifyContent: 'space-around', // Align items horizontally at the center
		alignItems: 'center',
  },
  signup: {
		fontSize: 14,
		fontWeight: '500',
		color: colors.primartext,
		textAlign: 'center',
		paddingTop: 5,
    marginTop:getHeight(2)
		// paddingHorizontal: 10,
	},
  forgotPass: {
		fontSize: 14,
		fontWeight: '500',
		color: colors.primartext,
		textAlign: 'right',
		paddingTop: 5,
		paddingHorizontal: 10,
	},
  checkbox: {
    marginLeft: 10,
  },
  aligRow:{
flexDirection:'row',
alignItems:'center',
// paddingHorizontal:getWidth(4),
justifyContent:'space-between',
width:getWidth(88),
marginTop:10,
marginBottom:getHeight(4)
// height:30
  },
  aligninput:{
    alignItems:'center'
  },
	titleContainer: {
		alignItems:'flex-start',
		justifyContent:'flex-start',
    marginTop:getHeight(1)
		 
		
	},
  mainTitle: {
		fontSize: getFontSize(20),
		fontWeight: '500',
		color: colors.primartext,
		textAlign: 'left',
		// width: getWidth(80),
		// height: getHeight(5),
		marginBottom: 5,
	},
  subTitle: {
		color: colors.primartext,

		fontSize: getFontSize(12),
		fontWeight: '500',
		width: getWidth(45),
		height: getHeight(3),
		textAlign: 'center',
		alignContent: 'center',
		justifyContent: 'flex-start',
    marginBottom:getHeight(2)
	},
  image:{
		// position: 'absolute', 
		// left: 30, 
		// top: 50, 
		width: getWidth(25),
		height: getWidth(25), 
		resizeMode: 'contain',
		alignSelf:'flex-start',
    marginLeft:getWidth(2),
    marginTop:getHeight(1)
		// backgroundColor:'red'
	   
	},
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : 15,
  },
  containerinside: {
		// padding: 15,
		alignItems: 'center',
		// justifyContent: 'center',
		flex: 1,
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
