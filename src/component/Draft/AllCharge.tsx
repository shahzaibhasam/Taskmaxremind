import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react";
import { FlatList, Text, View,StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState, getFontSize, getHeight, getWidth } from "../../lib";
import { colors } from "../../utilis";
import FilterModal from "../Global/Model/FilterModel";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import CustomSearch from "../Global/Drawer/CustomSearch";


const AllCharge=(props)=>{
    const { item } = props;
    const dispatch=useDispatch();
    const [searchText, setSearchText] = useState<string>('');
    // const token = useSelector((state: RootState) => state.authReducer.token);
    const [isChecked, setChecked] = useState(false);
 
    const [draftCharges,setDraftCharges]=useState([])
    const user = useSelector((state: RootState) => state.authReducer.user);
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const handleClear = () => {
        setSearchText('');
    };
    // console.log('____________addd__',item)
    const handleSearch = (text: string) => {
     
        setSearchText(text);
        const filtered = item?.filter((items: { patient: { Fname: string; Lname: string; }; }) =>
            items.patient.Fname.toLowerCase().includes(text.toLowerCase()) ||
            items.patient.Lname.toLowerCase().includes(text.toLowerCase())
          );
        
     setDraftCharges(filtered)
    };

    const handleFilterClick = () => {
        setShowFilterModal(!showFilterModal)
    };




    return(
        <View style={styles.container}>
        <CustomSearch 
            onClear={handleClear}
            onSearch={handleSearch}
            onFilterClick={handleFilterClick}
            value={searchText}
            />
        <Text style={styles.selectall}>Select All</Text>
        <View style={styles.maincon}>
       <FlatList
       data={searchText.length>0?draftCharges:item}
       ListFooterComponent={()=>{
        return(
            <View style={styles.footer}></View>
        )
       }}
       showsVerticalScrollIndicator={false}
       renderItem={({item})=>{
        let statusText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode>;
        let statusColor: string;
        const Charges= item?.visit_cpts?.map((cpt:{CPTCode: any})=>cpt.CPTCode).join(', ')
        switch (item.VisitStatus) {
            case 'D':
                statusText = 'Draft';
                statusColor = colors.buttontext;
                break;
            case 'B':
            case 'A':
                statusText = 'Approved';
                statusColor = colors.Green;
                break;
            case 'O':
                statusText = 'Other';
                statusColor = colors.redd;
                break;
            case 'P':
                statusText = 'Pending';
                statusColor = colors.buttontext;
                break;
            default:
                statusText = '';
                statusColor = 'black'; // Default color if status is unknown
                break;
        }

        return(
            <View style={styles.inrow}>
            <Checkbox style={styles.checkbox} color={isChecked ? '#4630EB' : undefined} value={isChecked} onValueChange={()=>setChecked(!isChecked)} />
            <View style={styles.textcon}>
                <Text style={styles.name}>{item?.patient?.Fname+','+item?.patient?.Lname}</Text>
                <View style={styles.inrrow}>
                    <Text style={styles.date}>Visit Date:</Text>
                    <Text style={styles.subtext}>{item?.VisitDate?.slice(0,10)}</Text>
                </View>
                <View style={styles.inrrow}>
                <Text style={styles.date}>Charges:</Text>
                <Text style={styles.subtext2}>{Charges}</Text>
                </View>
                <View style={styles.inrrow}>
                <Text style={styles.date}>Diagnosis:</Text>
                <Text style={styles.subtext2}>{[item.Dxcode1, item.Dxcode2, item.Dxcode3]
                            .filter(Boolean)
                            .join(', ')}</Text>
                </View>
            </View>
            <View style={styles.inroww}>
            <Text style={[styles.draft,{color:statusColor}]}>{statusText}</Text>
            <AntDesign style={styles.icoon} name="right" size={20} color={colors.darktext} />
        </View>
            </View>
        )
       }}
       />
      
        </View>
        <FilterModal 
        isVisibleFilter={showFilterModal}
        handleClose={()=>setShowFilterModal(false)}
        
        />
    </View>
    )
}
const styles=StyleSheet.create({
    footer:{
        height:getHeight(12)
    },
    inroww:{
        
        flexDirection:'row',
        
        // backgroundColor:colors.HEADERBLUE,
        // justifyContent:'space-between',
        // borderBottomWidth: 1,
        // paddingBottom:5
    },
    inrrow:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:getHeight(.5)
    },
    icoon:{
        marginTop:getHeight(.5)
    },
    draft:{
        fontSize:getFontSize(12),
        fontWeight:'800',
        color:colors.buttontext,
        marginTop:getHeight(.5),
        width:getWidth(17),
        textAlign:'right'
    },
    subtext2:{
        fontSize:getFontSize(12),
        color:colors.lighttext,
     
    },
    subtext:{
        fontSize:getFontSize(12),
        color:colors.darktext,
       
       
       
    },
    textcon:{
        width:getWidth(60),
        // backgroundColor:colors.HEADERBLUE,
        // marginLeft:getWidth(3)
    },
    date:{
        fontSize:getFontSize(13),
        color:colors.darktext,
        fontWeight:'900',
        width:getWidth(20)
       
    },
    name:{
        fontSize:getFontSize(17),
        color:colors.indicator,
        fontWeight:'bold'

    },
    checkbox: {
        // marginLeft: 10,
        width:getWidth(4),
        height:getWidth(4),
        marginTop:getHeight(1)
      },
    inrow:{
        flexDirection:'row',
        // backgroundColor:colors.HEADERBLUE,
        justifyContent:'space-between',
        borderBottomWidth: 1,
        paddingBottom:10,
        paddingTop:10
        // padding: 5,
        // alignItems:'center'
    },
    maincon:{
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:getWidth(6),
        marginTop:getHeight(1)
    },
    container:{flex:1,backgroundColor:colors.secondary},
    selectall:{
        fontSize:getFontSize(16),
        color:colors.indicator,
        marginLeft:getWidth(9),
        marginTop:getHeight(1),
        textDecorationStyle:'solid',
        textDecorationColor:colors.indicator,
        textDecorationLine:'underline'
        // backgroundColor:'white'
    }
})
export default AllCharge