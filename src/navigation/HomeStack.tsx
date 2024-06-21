import DraftCharges from '../screen/Draft/DraftCharge';
import Home from '../screen/Home/Home';
import Login from '../screen/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import { colors } from '../utilis';
import { getFontSize } from '../lib';

type AuthStackParamList = {
    [key: string]: any;
  };
const Stack = createNativeStackNavigator<AuthStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: colors.HEADERBLUE,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.primartext,
          fontWeight: 'bold',
          fontSize: getFontSize(15),
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="DraftCharges" component={ DraftCharges } />
     
    </Stack.Navigator>
  );
};
export default HomeStack;