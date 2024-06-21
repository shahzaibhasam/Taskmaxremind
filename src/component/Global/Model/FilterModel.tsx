import { FC, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { colors } from "../../../utilis";
import { RootState, getFontSize, getHeight, getWidth } from "../../../lib";
import Entypo from '@expo/vector-icons/Entypo'
import { AntDesign } from "@expo/vector-icons";
import AppButton from "../../AppButton";

import DateTimePicker from '@react-native-community/datetimepicker';
import ProviderModel from "./ProviderModel";
import LocationModel from "./LocationModel";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../../../Redux/Reducers/authSlice";

interface Props {
	isVisibleFilter: boolean;
	handleClose: () => void;
}

const FilterModal: FC<Props> = ({ isVisibleFilter, handleClose }) => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show2, setShow2] = useState(false);
    const [todate, setToDate] = useState(new Date());
    
    const [providerModel,setProviderModel]=useState(false)
    const [LocationModell,setLocationModel]=useState(false)

    const [modelArray, setModelArray] = useState([
        { name: 'Providers' },
        { name: 'Location' },
        { name: 'Start Date' },
        { name: 'End Date' }
      ]);
      const filter = useSelector((state: RootState) => state.authReducer.filter);

const onChange = (event: any, selectedDate :Date) => {
    const currentDate = selectedDate || date;
    const startDate=currentDate
    setShow(false)
    setDate(currentDate);
    dispatch(setFilterData({startDate}))
    updateModelArray(2, currentDate);
    
  };
  const onChangeto = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow2(false)
   setToDate(currentDate);
   const endDate=currentDate;
   dispatch(setFilterData({ endDate }))
   updateModelArray(3, currentDate);

  };
  const updateModelArray = (index: string | number, date: { toLocaleDateString: () => any; }) => {
    const newModelArray = [...modelArray];
    newModelArray[index] = { ...newModelArray[index], name: date.toLocaleDateString() };
    setModelArray(newModelArray);
  };


    return(
        <Modal
        isVisible={isVisibleFilter}
        style={styles.modal}
        onBackdropPress={handleClose}
        backdropOpacity={0}
    >
<SafeAreaView style={styles.container}>
    <View style={styles.heading}>
    <TouchableOpacity onPress={handleClose}>
                <Entypo name="cross" size={30} color={'red'} />
    </TouchableOpacity>
    <Text style={styles.filtertext}>Apply Filter</Text>
    <View/>
    </View>
    <View style={styles.mdell}>
        {modelArray.map((item,index)=>{
            return(
        <TouchableOpacity
        onPress={()=>{
            if(index===0){
                setProviderModel(true)
            }else if(index===1){
                setLocationModel(true)
            }   
            else if(index===2){
                setShow(true);
            }else if(index==3){
                setShow2(true)
            }
        }}
        key={index} style={styles.provide}>
            <Text style={styles.providertext}>{item.name}</Text>
            <AntDesign name="caretdown" size={18} color={'black'} />
        </TouchableOpacity>
            )
        })}
    </View>
       
<View style={styles.button}>
<View style={styles.align}>
<AppButton buttonName={'Ok'} onPress={() => handleClose()} backgroundColor={colors.buttontext} iconName="" style={undefined}/>
</View>
<View style={styles.align}>
<AppButton buttonName={'Clear All'} onPress={() => {
                            dispatch(setFilterData({ "endDate": null, "location": "", "provider": "", "startDate": null }));
                            handleClose();
                        } } backgroundColor={colors.redd} iconName="" style={undefined}/>
</View>
</View>
{show && (
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        display="spinner"
        onChange={onChange}
        />
      )}
      {show2 && (
        <DateTimePicker
        testID="dateTimePicker"
        value={todate}
        is24Hour={true}
        display="spinner"
        onChange={onChangeto}
      
        />
      )}
      <ProviderModel
      isVisible={providerModel}
      handleCloseProvider={()=>{setProviderModel(false);}}
      />
      <LocationModel
      isVisible={LocationModell}
      handleClose={()=>{setLocationModel(false);}}
      />
</SafeAreaView>

        </Modal>
    )
}
const styles=StyleSheet.create({
    align:{
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        position:'absolute',
        bottom:getHeight(6),
        width:getWidth(100),
     
        
        // alignSelf:'center'
        // marginLeft:getWidth(8)
    },
    providertext:{
        fontSize:getFontSize(14),
        color:colors.darktext,
        fontWeight:'900'
    },
    provide:{
        flexDirection:"row",
        alignItems:'center',
        height:getHeight(7),
        paddingHorizontal:getWidth(4),
        justifyContent:'space-between',
        borderWidth:.3,
        borderBottomColor:colors.SKYBLUE,
    },
    mdell:{
        width:getWidth(94),
        alignSelf:'center',
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.LIGHTBORDER,
        marginTop:getHeight(4)
    },
    filtertext:{
        fontSize:getFontSize(18),
        color:colors.BLUE,
        marginRight:getWidth(8)
    },
    heading:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:getWidth(3),
        height:getHeight(8),
        borderBottomWidth:1,
        borderBottomColor:colors.LIGHTBORDER
    },
modal:{padding:0,margin:0},
container: {
    backgroundColor: colors.secondary,
    width: getWidth(100),
    height: getHeight(100),
    alignSelf: 'center',
},
cross:{
    alignSelf:'flex-end'
}
})
export default FilterModal;
