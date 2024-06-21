import Login from '../screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    

type AuthStackParamList = {
    [key: string]: any;
  };
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={ Login } />
     
    </Stack.Navigator>
  );
};
export default AuthStack;