import { Dimensions, StyleSheet, View } from "react-native"
import { colors } from "../../utilis";
import { useEffect, useState } from "react";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import DraftCharge from "../../component/Draft/DraftCharge";
import AllCharge from "../../component/Draft/AllCharge";
import { RootState, getWidth } from "../../lib";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../Redux/Reducers/gernalSlice";
import CustomSearch from "../../component/Global/Drawer/CustomSearch";


const DraftCharges = () => {
  const dispatch=useDispatch();
  const token = useSelector((state: RootState) => state.authReducer.token);
  const filter = useSelector((state: RootState) => state.authReducer.filter);
  const filterModel = useSelector((state: RootState) => state.authReducer.filterModel);
  const { startDate, endDate,provider,location } = filter;
    const [index, setIndex] = useState(0);
    const [draftCharges,setDraftCharges]=useState([])
    const postData={practice_id:17,in_PageNumber:1,in_Rows:10,in_VisitStatus:index===0?'D':undefined,in_DateFrom:startDate,in_DateTo:endDate,provider:provider,location:location} 
    const postDataRef={practice_id:17,in_PageNumber:1,in_Rows:10}
    

    const getDraftCharges=async()=>{
        dispatch(setLoader(true))
          try{
            const url=`https://api.maxremind.technology/api/v1/mxchvisit/visitlist`
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json', // Ensure the Content-Type is set correctly
                },
              }
              const res = await axios.post(url,postDataRef, config);
              dispatch(setLoader(false))
              setDraftCharges(res?.data)
           console.log('getDraftCharges__')
          }catch(err){
            console.log('errr',err)
          }
        }
        const getDraftChargesFilterDate=async()=>{
          dispatch(setLoader(true))
            try{
              const url=`https://api.maxremind.technology/api/v1/mxchvisit/visitlist`
              const config = {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json', // Ensure the Content-Type is set correctly
                  },
                }
                const res = await axios.post(url,postData, config);
                dispatch(setLoader(false))
                setDraftCharges(res?.data)
                console.log('_____',res?.data)
                console.log('getDraftChargesFilterDate__')
                
            }catch(err){
              console.log('errr',err)
            }
          }
    useEffect(()=>{
if(startDate && endDate && provider && location){
  getDraftChargesFilterDate()
}else{
  getDraftCharges()
}
        
     
    },[startDate,endDate,provider,location])
    function filterDataByVisitStatus(data: any[], status: string) {
      return data?.filter((item: { VisitStatus: any; }) => item.VisitStatus === status);
  }
    const filteredData = filterDataByVisitStatus(draftCharges, 'D');
    const Tab1 = () => <DraftCharge item={filteredData}/>;
    const Tab2 = () => (
        <AllCharge item={draftCharges} />
      );
      const initialLayout = {width: Dimensions.get('window').width};
      const [routes] = useState([
        {key: 'tab1', title: 'Draft Charges'},
        {key: 'tab2', title: 'All Charges'},
      ]);
      const renderScene = SceneMap({
        tab1: Tab1,
        tab2: Tab2,
      });


    return(
        <View style={styles.container}>
 <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={props => (
              <TabBar
                {...props}
                gap={9}
                indicatorStyle={{backgroundColor:colors.indicator,width:getWidth(50)}}
                activeColor={colors.indicator}
                inactiveColor={colors.unactive}
                
                style={{
                  backgroundColor: colors.secondary,
               
                }}
                pressColor={colors.secondary} 
                pressOpacity={1.0}
             
              />
            )}
          />
         
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secondary
    }
})
export default DraftCharges;