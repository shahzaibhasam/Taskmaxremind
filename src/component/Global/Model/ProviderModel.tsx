import { FC, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { RootState, getFontSize, getHeight, getWidth } from "../../../lib";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { colors } from "../../../utilis";
import AppButton from "../../AppButton";
import { setLoader } from "../../../Redux/Reducers/gernalSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setFilterData } from "../../../Redux/Reducers/authSlice";


interface Props {
	isVisible: boolean;
	handleCloseProvider: () => void;
}

const ProviderModel: FC<Props> = ({ isVisible, handleCloseProvider }) => {
    const dispatch=useDispatch();
const [isSelected,setIsSelected]=useState(false)
const [providerr,setProvider]=useState([])
const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
const token = useSelector((state: RootState) => state.authReducer.token);
    const loader = useSelector((state: RootState) => state.gernalReducer.loader);
    const filter = useSelector((state: RootState) => state.authReducer.filter);
   
const getProvider=async()=>{
    dispatch(setLoader(true))
      try{
        const url=`https://api.maxremind.technology/api/v1/mxchmaster/practicestaff/`
        const res =await axios.get(url,
          {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          });
          dispatch(setLoader(false))
          setProvider(res?.data)
          // console.log('loc___',res?.data)
          // const patients = res?.data?.map((visit: { patient: any; }) => visit.patient);
        
      }catch(err){
        console.log('errr',err)
      }
    }
    const handleProviderPress = (id: number) => {
        // Toggle selection of location based on id
        setSelectedLocationId(id === selectedLocationId ? null : id);
      };
      useEffect(()=>{
        getProvider()
      },[])


    return(
        <Modal
        isVisible={isVisible}
        style={styles.modal}
        onBackdropPress={handleCloseProvider}
        backdropOpacity={0}
    >
        <View style={styles.mainCon}>
            <View style={styles.header}>
            <TouchableOpacity onPress={handleCloseProvider}>
                <Entypo name="cross" size={30} color={'red'} />
            </TouchableOpacity>
                <Text style={styles.headingtext}>Select Provider</Text>
                <View/>
            </View>
          {loader?(<ActivityIndicator style={styles.loader} size="large" color={colors.buttontext} />):<FlatList
          data={providerr}
          renderItem={({item,index})=>{
            return(
                <View style={styles.innrow}>
                <TouchableOpacity onPress={()=>{
                    const namee= item.Lname+ ', '+item.Fname
                    dispatch(setFilterData({provider:namee}))
                    handleProviderPress(item.id)}} style={styles.item}>
                <Fontisto
				name={item.id===selectedLocationId ? 'radio-btn-active' : 'radio-btn-passive'}
				size={20}
				color={item.id ===selectedLocationId? colors.Blueradio : colors.BLACK
				}
			/>
            <Text style={styles.text}>{item.Fname+','+item.Lname}</Text>
                </TouchableOpacity>
            
            </View>
            )
          }}
          />}
            <View style={styles.bttn}>
              
                <AppButton buttonName={'Ok'} onPress={handleCloseProvider} backgroundColor={colors.buttontext} iconName="" style={{width:getWidth(50),marginBottom:getHeight(2)}}/>
               
            </View>
        </View>
        </Modal>
    )

}
const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    bttn:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:getFontSize(14),
        color:colors.darktext,
        marginLeft:getWidth(4)
    },
    mainCon:{
      
        width:getWidth(95),
        backgroundColor:colors.secondary,
        elevation:1,
        alignSelf:'center',
        borderWidth:.5,
        borderColor:colors.LIGHTBORDER,
        borderRadius:10
        
    },
    item:{
        flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'flex-start',
        marginBottom:10,
        marginLeft:getWidth(2)
	
    },
    innrow:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:colors.LIGHTBORDER,
        padding:10
    },
    headingtext:{
        fontSize:getFontSize(18),
        fontWeight:'900',
        color:colors.darktext
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:getHeight(8),
        width:getWidth(95),
        // backgroundColor:colors.secondary,
    },
    modal:{flex:1,justifyContent:'center',alignItems:'center'},
})
export default ProviderModel;