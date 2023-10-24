import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './Navigators/TabNavigation'
LogBox.ignoreAllLogs(true)
const App = () => {
  return (
    <NavigationContainer>
        <TabNavigation />
    </NavigationContainer>

  )
}

export default App

