import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from '@rneui/themed'

const SingleProduct = (props) => {
  
  const[item,setitem] = useState(props.route.params.item)
  const[availibility,setavalibility] =  useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.imagecontent}>
        <Image source={{uri:item.image}} style={{resizeMode:'cover' , width:'100%', height:'100%'}}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.textdesign}>{item.name}</Text>
        <Text style={styles.textdesign}>{item.description}</Text>
      </View>
    </View>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
    
    imagecontent:{
        width:'100%',
        height:'50%',
    },
    content:{
        marginTop:20,
        padding:20
    },
    textdesign:{
        color:'black',
        fontSize:20,
        fontWeight:'800'
    }
})