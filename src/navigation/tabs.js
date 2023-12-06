import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { Home, Progress } from '../screens';
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#B65E75'
        }
        }}>

        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon:({focused}) => (
              <AntDesign 
                name="home" size={focused ? 27 : 24} 
                color={focused ? "#B6FFFA" : "white"}/>
            )
          }} />

        <Tab.Screen 
          name="Progress" 
          component={Progress}
          options={{
            tabBarIcon:({focused})=>(
              <MaterialIcons  
                name='leaderboard' 
                size={focused ? 27 : 24}
                color={focused ? "#B6FFFA" : "white"}/>
            )
          }} />

    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})