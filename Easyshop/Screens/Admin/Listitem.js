import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed'
const {width} = Dimensions.get('screen');
const Listitem = (props) => {
  return (
    <View style={[styles.container,{
    backgroundColor:props.index % 2 == 0 ? 'white' :'gainsboro'
    }]}>
        <Image PlaceholderContent={<ActivityIndicator size={20} color={'black'}/>} style={styles.image} source={{uri:props.image}} resizeMode='contain'/>
      <Text style={styles.item}>{props.brand}</Text>
      <Text style={styles.item} ellipsizeMode='tail' numberOfLines={1}>{props.name}</Text>
      <Text  style={styles.item} ellipsizeMode='tail' numberOfLines={1}>{props.category.name}</Text>
      <Text style={styles.item}>{props.price}</Text>
    </View>
  )
}

export default Listitem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:width,
        padding:5,
        alignItems:'center'
    },
    image:{
        width:50,
        margin:2,
        height:50,
        borderRadius:50,
        marginHorizontal:10
    },
    item:{
        flexWrap:'wrap',
        width:width/5,
        margin:3,
        color:'black',
    }
})