import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs(true)
const App = () => {
  return (
      <View style={styles.container}>
        <Header/>
        <ProductContainer />
      </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})