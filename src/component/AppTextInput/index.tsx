import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { ForwardedRef, LegacyRef, useState } from 'react'
import { colors } from '../../utilis';
import { getFontSize, getHeight, getWidth } from '../../lib';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AppTextInputProps {
    secureTextEntry: any;
    placeholder: any;
    defaultValue:any;
    onChangeText?: (text: string) => void;
    iconName:string,
    onPress:() => void;
	value:string;
	ref?: ForwardedRef<TextInput> | LegacyRef<TextInput>
  }
const AppTextInput: React.FC<AppTextInputProps> = ({ onPress,secureTextEntry=false,onChangeText,value, placeholder,iconName }: any,ref: LegacyRef<TextInput>) => {
	
	
    return (
    	<View style={styles.container}>
        <View style={styles.input}>
        <TextInput ref={ref} style={styles.textInput} placeholder={placeholder} value={value} secureTextEntry={secureTextEntry}  onChangeText={onChangeText}/>
        <TouchableOpacity onPress={onPress}>
        {iconName && <Icon name={iconName} size={20} color={colors.iconColor} />}
        </TouchableOpacity>
        </View>
				</View>
    );
  };
  const styles = StyleSheet.create({
    textInput: {
			flex: 1,
			paddingHorizontal: 10,
			color: colors.primartext,
		},
		container: {
			marginBottom: 5,
		},
		input: {
			flexDirection: 'row',
			width: getWidth(85),
			height: getHeight(6.5),
			borderRadius: 10,
			borderWidth: 1,
			borderColor: colors.inputfield,
			color: colors.primartext,
			backgroundColor: colors.inputField,
			fontSize: getFontSize(14),
			fontWeight: 400,
			lineHeight: 20,
			letterSpacing: 1,
			paddingHorizontal: 10,
			paddingVertical: 10,
			marginTop: 9,
			marginBottom: 9,
		},

	
		center: { justifyContent: 'center' },
		errorContainer: {
			height: getHeight(2),
			marginHorizontal: getWidth(5),
			marginBottom: getHeight(1),
		},
		errorText: { color: `#FF6363`, fontSize: getFontSize(10) },
	});
export default AppTextInput