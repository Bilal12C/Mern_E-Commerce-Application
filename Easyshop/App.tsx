import React from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './Navigators/TabNavigation'
import { Provider } from 'react-redux'
import store from './Screens/store'
import Header from './Shared/Header'
LogBox.ignoreAllLogs(true)
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header/>
        <TabNavigation />
      </NavigationContainer>
    </Provider>

  )
}

export default App

