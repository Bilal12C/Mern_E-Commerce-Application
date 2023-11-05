import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, Get_Product_URL } from '../../actions/type';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import { FlatList } from 'react-native';
import Listitem from './Listitem';


const listitemHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.Headeritem}></View>
      <View style={styles.Headeritem}>
        <Text style={{color:'black',fontWeight:'bold'}}>Brand</Text>
      </View>
      <View style={styles.Headeritem}>
        <Text style={{color:'black',fontWeight:'bold'}}>nam</Text>
      </View>
      <View style={styles.Headeritem}>
        <Text style={{color:'black',fontWeight:'bold'}}>Category</Text>
      </View>
      <View style={styles.Headeritem}>
        <Text style={{color:'black',fontWeight:'bold'}}>Price</Text>
      </View>
    </View>
  )
}
const Product = () => {
  const [productlist, setproductlist] = useState([])
  const [productfilter, setProductfilter] = useState();
  const [loading, setloading] = useState(true)
  const [token, settoken] = useState('')
  const [search, setsearch] = useState('')

  let focus = useIsFocused();

  useEffect(() => {
    if (focus) {
      GetProductData();
    }
    return () => {
      setproductlist([])
      setProductfilter([])
      setloading(true)
    }
  }, [])

  const GetProductData = async () => {
    const url = API_URL + Get_Product_URL;
    const res = await axios.get(url)
    if (res.data) {
      console.log(res.data.length)
      setproductlist(res.data)
      setProductfilter(res.data)
      setloading(false)
    }
  }

  const handlesearchtext = (text) => {
    if (text) {
        const data = productlist.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        setProductfilter(data)
        setsearch(text)
    }
    else {
        console.log(productlist.length)
        setproductlist(productlist)
        setsearch(text)
    }
}
  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        containerStyle={styles.containerStyle}
        placeholder="Search Here..."
        lightTheme={true}
        onChangeText={(e) => handlesearchtext(e)}
        inputStyle={styles.inutstyle}
        inputContainerStyle={styles.inputContainerStyle}
      />
      {
        loading ? (
          <View style={styles.contentwait}>
            <ActivityIndicator size={30} color={'black'} />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={listitemHeader}
            data={productfilter}
            keyExtractor={(item) =>item.id}
            renderItem={({ item , index }) => (
              <Listitem {...item} index={index}/>
        )}
          />
        )
      }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentwait: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerStyle: {
    backgroundColor: 'white',
    padding: 8,
    borderBlockColor: 'white',
    marginVertical: 5
  },
  inputContainerStyle: {
    color: 'black',
    paddingHorizontal: 8,
    borderRadius: 30
  },
  inutstyle: {
    color: 'black',
  },
  header:{
    flexDirection:'row',
    padding:5,
    backgroundColor:'gainsboro'
  },
  Headeritem:{
    width:Dimensions.get('screen').width/5,
    margin:3,
  }
})