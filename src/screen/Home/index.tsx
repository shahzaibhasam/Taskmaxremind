import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utilis";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../../component/AppTextInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/Reducers/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  const productsRed = useSelector(
    (state: RootState) => state.authReducer.products[0]
  );
  const navigation = useNavigation();
  const [searchProduct, setSearchProduct] = useState("");
  const [products, setProducts] = useState(null);
  console.log("array", productsRed);
  const fetchData = async () => {
    try {
      let response;
      if (searchProduct) {
        response = await axios.get(
          `https://dummyjson.com/products/search?q=${searchProduct}`
        );

        setProducts(response?.data?.products);
        // dispatch(addProduct(response?.data?.products))
      } else {
        response = await axios.get("https://dummyjson.com/products");
        // dispatch(addProduct(response?.data?.products))

        setProducts(response?.data?.products);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const DeleteProduct = async (productId: number) => {
    try {
      const response = await axios.delete(
        `https://dummyjson.com/products/${productId}`
      );
      if (response?.status === 200) {
        // Remove the deleted product from the state
        setProducts(products.filter((product) => product.id !== productId));
        // dispatch(addProduct(products.filter((product) => product.id !== productId)))
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchProduct]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={{ marginLeft: 10 }}
            name="left"
            size={24}
            color={colors.secondary}
          />
        </TouchableOpacity>
        <Text style={styles.homeText}>Home</Text>
        <View style={{ width: "10%" }} />
      </View>
      <View style={{ alignSelf: "center", width: "100%", marginTop: 10 }}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search product "
            value={searchProduct}
            defaultValue={""}
            onChangeText={(text) => setSearchProduct(text)}
            style={{ width: "90%" }}
          />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "100%",
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "92%",
                  height: 120,
                  alignSelf: "center",
                  elevation: 1,
                  backgroundColor: "#eeeded",
                  borderRadius: 5,
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    marginLeft: 10,
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                  source={{ uri: item?.images[0] }}
                />
                <View style={{ marginLeft: 10, width: "60%" }}>
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {item?.title.slice(0, 30) + "..."}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colors.primary,
                      width: "70%",
                    }}
                  >
                    {item?.description.slice(0, 60) + "..."}
                  </Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: "bold", color: "green" }}
                  >
                    {"$ " + item?.price}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginRight: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => DeleteProduct(item?.id)}
                    style={{
                      ...styles.btn,
                      backgroundColor: "red",
                      marginLeft: 5,
                    }}
                  >
                    <Text style={styles.btntext}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={{ position: "absolute", bottom: 10, width: "100%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddProduct")}
          style={styles.absBtn}
        >
          <Text style={styles.btntext}>Add new product</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: Platform.OS === "ios" ? 0 : 15,
  },
  absBtn: {
    width: "70%",
    backgroundColor: colors.primary,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btntext: { color: colors.secondary, fontSize: 12 },
  btn: {
    width: 40,
    backgroundColor: colors.primary,
    borderRadius: 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "92%",
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  homeText: { fontSize: 20, color: colors.secondary, fontWeight: "bold" },
  headerCon: {
    height: 60,
    backgroundColor: colors.primary,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  seetext: { fontSize: 25, color: colors.primary, fontWeight: "bold" },
  inputCon: { justifyContent: "center", alignItems: "center", marginTop: 5 },
  textinput: {
    width: "80%",
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  textt: {
    fontSize: 12,
    color: colors.primary,
    alignSelf: "flex-start",
    marginLeft: 40,
  },
});
export default Home;
