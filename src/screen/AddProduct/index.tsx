import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utilis'
import AppTextInput from '../../component/AppTextInput'
import AppButton from '../../component/AppButton'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/Reducers/authSlice'

const AddProduct = () => {
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const [title,setTitle]=useState('')
  const [id,setId]=useState(null)

const addNewProduct=async()=>{
  const addproductObj={title:title,
  id:id,}
  try{
    console.log('presssed')
const response =await axios.post('https://dummyjson.com/products/add',{
 addproductObj

})
console.log('presssed',response)
if(response?.status==200){
 console.log('add new product',response?.data)
//  dispatch(addProduct(response?.data))
  navigation.navigate('Home')
}
  }
  catch(err){
console.error(err)
  }
}
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.headerCon}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <AntDesign style={{marginLeft:10}} name="left" size={24} color={colors.secondary} />
    </TouchableOpacity>
    <Text style={styles.homeText}>Add Product</Text>
    <View style={{width:'10%'}}/>
    </View>
    <Text style={styles.producttext}>Add new Products</Text>
   <View style={styles.inputCenter}>
   <Text
          style={styles.textt}
        >
          Add title
        </Text>
        <AppTextInput value={title} defaultValue={''} secureTextEntry={false} onChangeText={(text)=>setTitle(text)} placeholder={'Add title...'}/>
   </View>
   <View style={styles.inputCenter}>
   <Text
          style={styles.textt}
        >
          Add Id
        </Text>
        <AppTextInput value={id} defaultValue={''} secureTextEntry={false} onChangeText={(text)=>setId(text)} placeholder={'Add Id...'}/>
   </View>
  
   <View style={{justifyContent:"center",alignItems:"center",position:"absolute",bottom:30,width:'100%'}}>
   <AppButton buttonName={'Add product'} onPress={()=>addNewProduct()} />
   </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: Platform.OS === "ios" ? 0 : 15,
  },
  producttext:{fontSize:20,fontWeight:'bold',color:colors.primary,alignSelf:"center",marginTop:20,marginBottom:10},
 inputCenter:{width:'100%',justifyContent:"center",alignItems:"center"},
  btn:{width:40,backgroundColor:colors.primary,borderRadius:5,height:30,justifyContent:"center",alignItems:"center"},
  homeText:{fontSize:20,color:colors.secondary,fontWeight:"bold"},
 headerCon:{height:60,backgroundColor:colors.primary,width:'100%',flexDirection:"row",alignItems:"center",alignSelf:"center",justifyContent:"space-between"},
  seetext: { fontSize: 25, color: colors.primary, fontWeight: "bold" },
  inputCon: { justifyContent: "center", alignItems: "center", marginTop: 5 },
  
  textt: {
    fontSize: 12,
    color: colors.primary,
    alignSelf: "flex-start",
    marginLeft: 40,
  },
});
export default AddProduct