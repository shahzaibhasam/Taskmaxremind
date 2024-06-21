import { StyleSheet, View } from "react-native"
import { colors } from "../../utilis";
import AppButton from "../../component/AppButton";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "../../lib";


const Home = () => {
const navigation= useNavigation();
    return(
        <View style={styles.container}>
           <View style={styles.footer}>
           <AppButton buttonName={'Next'} onPress={() => navigation.navigate('DraftCharges')} backgroundColor={colors.buttontext}/>
           </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secondary,
        justifyContent:'center',
        alignItems:'center'
    
    },
    footer:{
       position:'absolute',
       bottom:getHeight(5),
    //    width:getWidth(90),
       
    }
})
export default Home;