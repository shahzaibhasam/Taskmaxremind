import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home/Home';
import DraftCharges from '../screen/Draft/DraftCharge';
import { colors } from '../utilis';
import { getFontSize, getWidth } from '../lib';

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import MyCustomDrawer from '../component/Global/Drawer/MyCustomDrawer';


const Drawer = createDrawerNavigator();
interface HeaderLeftProps {
	tintColor?: string | undefined;
	pressColor?: string | undefined;
	pressOpacity?: number | undefined;
	labelVisible?: boolean | undefined;
}
const CustomDrawerButton: FC<HeaderLeftProps> = ({ labelVisible }) => {
	const navigation = useNavigation();

	return (
		
		<TouchableOpacity onPress={() => navigation?.openDrawer()}>
			<View style={styles.hamburgerMenu} />
			<View style={styles.hamburgerMenu} />
			<View style={styles.hamburgerMenu} />
		</TouchableOpacity>
	);
};

function MyDrawer() {
  return (
    <Drawer.Navigator
    initialRouteName={'Home'}
    drawerContent={(props) => <MyCustomDrawer {...props} />}
    screenOptions={{
        drawerType: 'front',

        drawerStyle: { backgroundColor: 'transparent' },
        headerStyle: {
            backgroundColor: colors.HEADERBLUE,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
        },
        headerLeft: (props) => <CustomDrawerButton {...props} />,
        headerTitleAlign: 'left',
        headerTitleStyle: {
            color: colors.secondary,
            fontWeight: '500',
            fontSize: getFontSize(15),
        },
    }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="DraftCharges" component={DraftCharges} />
    </Drawer.Navigator>
  );
}
const styles= StyleSheet.create({
    hamburgerMenu: {
		marginLeft: 20,
		width: getWidth(5),
		height: 2,
		backgroundColor: colors.primartext,
		marginBottom: 5,
	},
})
export default MyDrawer