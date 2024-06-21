import React, { type ReactNode, type FC } from 'react';

import { StyleSheet, ImageBackground } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
	children: ReactNode;
}

const BackgroundImage: FC<Props> = ({ children }) => {
	return (
		<ImageBackground
			source={require('../../assets/back.png')} // Replace with the path to your image
			style={styles.imageBackground}
		>
			<SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		justifyContent: 'center',
	},
	imageBackground: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
});

export default BackgroundImage;
