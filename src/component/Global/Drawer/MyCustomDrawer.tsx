import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, getFontSize, getHeight, getWidth } from "../../../lib";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utilis";



const MyCustomDrawer: FC<DrawerContentComponentProps> = (props) => {
    const { navigation, state } = props;
	
	const Labels: any = {
		Home: 'Home',
		DraftCharges: 'Draft Visitss',
    }
    const ItemDescription: any = {
		Home: 'Your home screen',
		DraftCharges: 'Your patient visits',
    }
    const Icons: any = {
		Home:require('../../../assets/images/home.png'),
        DraftCharges:require('../../../assets/images/draft.png'),
    }
	const Icon = ({ name, height, width }) => {
		const iconSource = Icons[name];
		if (!iconSource) return null; // Handle missing icons gracefully
	
		return (
			<Image
				source={iconSource}
				style={[
					styles.icon,
					{
						height,
						width,
					},
				]}
			/>
		);
	};
    const user = useSelector((state: RootState) => state.authReducer.user);
    return (
		<DrawerContentScrollView
			contentContainerStyle={styles.contentContainerStyle}
			{...props}
		>
			<Image source={require('../../../assets/images/Drawerbackground.png')} style={styles.drawerBackground} />
			<View style={styles.header}>
 
				<Image source={require('../../../../assets/userr.png')} style={styles.image} />
 
				<View style={styles.nameContainer}>
					<Text style={styles.userName}>{user?.full_name}</Text>
					{/* <Text style={styles.practiceName}>{userPractice?.Name}</Text> */}
				</View>
			</View>	

			<DrawerContentScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.contentContainerScrollStyle}
				{...props}
			>
				{state.routes.map((route, index) => {
 

 const isActiveScreen = state.routes[state.index].name === route.name;

					// const { options }=descriptors[route.key];
					const onpress = (): void => {
						const event = navigation.emit({
							type: 'drawerItemPress',
							target: route.key,
							canPreventDefault: true,
						});

					
						if ( !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					return (
						<View >
							
									<TouchableOpacity
						
							activeOpacity={0.8}
							key={index}
							style={[
								styles.draweItem,
							
								isActiveScreen && { ...styles.draweItem, backgroundColor:colors.inputFielddrw
									},
							]}
							onPress={()=>{
								
								onpress();
								
							}}
						>
							  
						
									<View style={styles.iconContainer}>
									<Icon
										name={Icons[route.name]}
										height={getWidth(6)}
										width={getWidth(6)}
										iconColor={colors.primartext}
									/>
                            </View>
                            <View style={styles.itemTextContainer}>
                                <Text style={styles.itemLabel}>
								{Labels[route.name]}
                                    {/* {item.Home} */}
                                </Text>
                                <Text style={styles.itemDescription}>
								{ItemDescription[route.name]}
                                    {/* {item.Homedesc} */}
                                </Text>
                            </View>
							
							
						
							
						</TouchableOpacity>
						
						</View>
					);
				})}
			</DrawerContentScrollView>
		</DrawerContentScrollView>
	);
}
export default MyCustomDrawer
const styles = StyleSheet.create({
	icon:{
		height:getWidth(6),
		width:getWidth(6)
	},

	contentContainerStyle: {
		backgroundColor: colors.HEADERBLUE,

		flex: 1,
		borderTopEndRadius: 30,
		borderBottomEndRadius: 30,
		overflow: 'hidden',
	},
	header: {
		height: getHeight(10),
		width: '100%',

		marginBottom: getHeight(0),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingHorizontal: getWidth(5),
		gap: 10,
		borderBottomWidth: 1,
		borderColor:colors.LIGHTBORDER,
	},

	image: {
		width: getWidth(14),
		height: getWidth(14),
		resizeMode: 'contain',
		borderRadius: getWidth(14) / 2,
		backgroundColor: colors.secondary,
	},

	nameContainer: { flex: 1 },
	userName: {
		color: colors.headerText,
		fontSize: getFontSize(16),
		fontWeight: '600',
	},
	practiceName: {
		color: colors.headerText,
		fontSize: getFontSize(12),
		fontWeight: '600',
	},
	
	draweItem: {
		width: '100%',
		alignItems: 'center',
		paddingRight: 10,
		alignSelf: 'flex-end',
   		height: getHeight(7),
		paddingVertical: 10,
		marginBottom: 20,
		flexDirection: 'row',
		gap: getWidth(2),
		paddingTop:6,
	},
	contentContainerScrollStyle: {
		paddingTop: getHeight(2),
		bborderTopEndRadius: 30,
		borderBottomEndRadius: 30,
		overflow: 'hidden',
	},
	itemTextContainer: { flex: 1, gap: 5 },
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft:15
	},
	itemLabel: {
		color: colors.headerText,
		fontSize: getFontSize(14),
		fontWeight: 'bold',
	},
	itemDescription: {
		color: colors.headerText,
		fontSize: getFontSize(12),
	},
	drawerBackground: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		bottom: 0,
	},
	settingItem: {
		borderTopWidth: 0.5,
		width: '100%',
	
		paddingTop: 15,
		borderColor:colors.headerText,
	},
	
});