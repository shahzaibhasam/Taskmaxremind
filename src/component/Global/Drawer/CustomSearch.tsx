import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utilis";
import { getWidth } from "../../../lib";
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'

import { FC, useEffect, useState } from "react";

interface CustomSearchProps {
	onClear: () => void;
    onFilterClick?: () => void;
    onSearch?: (text: string) => void;
    value:string
}
const CustomSearch:FC<CustomSearchProps>=({
    onClear,
	onFilterClick,
	onSearch,
    value = ''
}
)=>{
    // const [searchText, setSearchText] = useState('');
    const [searchText, setSearchText] = useState<string>('');
    const handleClearText = (): void => {
		setSearchText('');
		onClear();
	};
    const handleSearch = (text: string): void => {
		setSearchText(text);
		if (onSearch !== undefined) {
			onSearch(text); 
		}
	};
    // const handleSearch = (text: string): void => {
    //     setSearchText(text);
    //     if (onSearch) {
    //         onSearch(text);
    //     }
    // };
    useEffect(() => {
	
		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		setSearchText(value || '');
	}, [value]);


    return(
        <View style={styles.container}>
            <View style={styles.filterCon}>
                <View style={styles.inputCon}>
                <Feather name="search" size={15} color={colors.searchicon} />
                    <TextInput 
                    placeholder="Search"
                    style={styles.input}
                    value={searchText}
                    onChangeText={handleSearch}
                    />
                    {
                        searchText.length>0?(
                            <TouchableOpacity style={styles.cross} onPress={handleClearText}>
                                <Entypo name="cross" size={20} color={'red'} />
                            </TouchableOpacity>
                        ):null
                    }
                </View>
            
				<TouchableOpacity style={styles.icon} onPress={onFilterClick}>
					<Image style={styles.img} source={require('../../../../assets/filter.png')} resizeMode="contain"/>
				</TouchableOpacity>
		
            </View>
          
        </View>
    )
}

export default CustomSearch;
const styles = StyleSheet.create({
    img:{
       height:getWidth(5),
       width:getWidth(5) 
    },
    cross:{
        marginRight:getWidth(3)
    },
icon:{
    alignItems: 'center',
		justifyContent: 'center',
        marginRight:getWidth(3)
},
    input:{
        flex: 1,
		paddingHorizontal: 20,
		color: 'black',
		textAlign: 'left',
    },
    inputCon:{
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:colors.secondary,
		borderRadius: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginHorizontal: 10,
		marginVertical: 5,
		width: '85%',
		borderColor: colors.BLUE,
		borderWidth: 1,
		alignSelf: 'center',
    },

    filterCon:{
        width:getWidth(95),
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'

    },
    container: {
		flexDirection: 'row',
		backgroundColor:colors.SKYBLUE,
		borderWidth: 1,
		borderColor: colors.LIGHTBORDER,
		justifyContent: 'center',
	},
})