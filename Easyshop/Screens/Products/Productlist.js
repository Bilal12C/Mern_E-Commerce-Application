import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Productcard from './Productcard';
const width = Dimensions.get('screen').width;
const Productlist = (props) => {
 
  const { item } = props;
  return (
   <TouchableOpacity>
     <View style={{backgroundColor:'white'}}>
      <Productcard {...item}/>
     </View>
   </TouchableOpacity>
  )
}

export default Productlist

const styles = StyleSheet.create({})