import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen')
const Productcard = (props) => {
    const { name, price, image, countInStock } = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: image ? image : "https://ik.imagekit.io/demo/img/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg" }} style={styles.image} />
            <View style={styles.row}>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0,15-3 ) + "...." : name}
            </Text>
            <Text style={styles.price}>${price}</Text>
            </View>
            {countInStock > 0 ? (
                <Pressable style={styles.Addbutton} >
                    <Text style={{color:'white'}}>Add</Text>
                </Pressable>
            ):(
                <Text style={[styles.title,{marginBottom:20}]}>Not Availiable</Text>
            )}
        </View>
    )
}

export default Productcard

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.5,
        // padding: 10,
        borderRadius: 10,
        flex:1,
        gap:2,
        margin: 10,
        elevation: 8,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    row:{
        marginVertical:10,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    image: {
        width: width / 2 - 20 ,
        height: width / 2 - 20 - 20,
        // resizeMode: 'contain',        
    },
    
    title:{
        fontWeight:'bold',
        textAlign:'center',
        color:'black',
        fontSize:14
    },
    price:{
        color:'orange',
        fontSize:12,
    },
    Addbutton:{
        width:'90%',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        marginTop:5
    }
})