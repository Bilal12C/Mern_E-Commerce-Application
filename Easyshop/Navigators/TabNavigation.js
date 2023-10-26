import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeNavigator } from './StackNavigation';
import CartNavigator from './CardNavigator';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            else if (route.name === 'ShoppingCart') {
              iconName = focused
                ? 'cart-sharp'
                : 'cart-outline';
            } 
            else if (route.name === 'Admin') {
              iconName = focused
                ? 'cog'
                : 'cog-outline';
            } 
            
            else if (route.name === 'User') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard:true,
          tabBarShowLabel:false
        })}
      >
        <Tab.Screen name="Home" options={{headerShown:false}} component={HomeNavigator} />
        <Tab.Screen name="ShoppingCart" options={{headerShown:false}} component={CartNavigator} />
        <Tab.Screen name="Admin" options={{headerShown:false}} component={HomeNavigator} />
        <Tab.Screen name="User" options={{headerShown:false}} component={HomeNavigator} />
      </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})