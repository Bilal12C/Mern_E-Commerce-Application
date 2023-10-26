import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Image, ListItem } from '@rneui/themed';
const Cart = (props) => {
  const cartitem = useSelector((state) => state.cart.cartitem);
  return (
    <>
      {
        cartitem.length > 0 ? (
          <FlatList
            style={{flex:1,width:'100%'}}
            data={cartitem}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <ListItem topDivider  containerStyle={{paddingHorizontal:20}} bottomDivider>
                <Image source={{ uri: item?.image }} style={{ width: 40, height: 40, borderRadius: 50 }} />
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Title>{item.price}</ListItem.Title>
              </ListItem>
            )}
          />
        ) : (
          <View style={styles.nocart}>
            <Text style={styles.nofoundText}>No Product In Your Cart</Text>
            <Text style={styles.nofoundText}>Add Product to Your Cart to get started</Text>
          </View>
        )
      }
    </>
  )
}


export default Cart;

const styles = StyleSheet.create({
  nocart: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  nofoundText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'

  }
})