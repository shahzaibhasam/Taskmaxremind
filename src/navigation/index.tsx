import Login from '../screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import SignUp from '../screen/SignUp';
import Home from '../screen/Home';
import AddProduct from '../screen/AddProduct';
type AuthStackParamList = {
    [key: string]: any;
  };
const Stack = createNativeStackNavigator<AuthStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="SignUp" component={ SignUp } />
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="AddProduct" component={ AddProduct } />

     
    </Stack.Navigator>
  );
};
export default HomeStack;