import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL, Get_Product_URL } from '../../actions/type';
import { useIsFocused } from '@react-navigation/native';
// import ProductContainer from '../Products/ProductContainer';
import FormConatiner from '../../Shared/Form/FormConatiner';
import Input from '../../Shared/Form/Input';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
const ProductForm = () => {

  const categories = useSelector((state) => state.category.categorydata)
  console.log(categories)
  const [name , setname] = useState('')
  const[description,setdesctiption] = useState('');
  const[richdescription,richsetdesctiption] = useState('');
  const[image , setimage] = useState('')
  const[brand,setbrand] = useState('')
  const[price, setprice] = useState('')
  const[category,setcateory] = useState('')
  const[countinstock , setcountinstcok ] = useState('')
  const[Numreviews , setNumRev] = useState('')
  const[isfeatured,setisFeatured] = useState(false)
  const[value,setValue] = useState('')

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };

  
  return (
    <FormConatiner title = 'Add Product'>
      <Input
       placeholder={"Enter Your Brand Name"}
       value={brand}
       placeholderTextColor={'black'}
       onChangeText={(val) => setbrand(val)}
      />
      <Input
       placeholder={"Enter Your  Name"}
       value={name}
       placeholderTextColor={'black'}
       onChangeText={(val) => setname(val)}
      />
      <Input
       placeholder={"Enter count in stock"}
       value={countinstock}
       placeholderTextColor={'black'}
       onChangeText={(val) => setcountinstcok(val)}
      />
      <Input
       placeholder={"Enter Your Price"}
       value={price}
       placeholderTextColor={'black'}
       onChangeText={(val) => setprice(val)}
      />
      <Input
       placeholder={"Enter Description"}
       value={description}
       placeholderTextColor={'black'}
       onChangeText={(val) => setdesctiption(val)}
      />
      
      
    <Dropdown
              mode='modal'
              style={styles.dropdown}
              data={categories}
              renderItem={renderItem}
              placeholder={value === '' ? "Select type" : value}
              placeholderStyle={{ color: 'black' }}
              selectedTextStyle={{ color: 'black' }}
              value={value}
              renderRightIcon={() => (
                <Icon
                  style={styles.icon}
                  color="black"
                  name="chevron-down"
                  size={20}
                />
              )}
              onChange={item => {
                setValue(item.name);
              }}
            /> 
    </FormConatiner>
  )
}

export default ProductForm

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    height: 50,
    color: 'black',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  textItem:{
    color:'black',
    fontSize:18,
    marginVertical:5,
    
  },
  item:{
    paddingHorizontal:10,
    paddingVertical:10.,
    borderTopColor:'silver',
    borderTopWidth:0.5,
    borderBottomWidth:0.5

  }
})