import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, Puzzler, Settings, Stats } from '../views'
import { images } from '../components'

const Tab = createBottomTabNavigator()

function MenuIcon(icon) {
  return (
     ({ focused }) => (
      <Image
        source = {icon}
        resizeMode = "contain"
        style = {{
          width: 45,
          height: 45,
          tintColor: focused ? '#5A57F7' : '#FFFFFF'
        }}
      />
    )
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#34344A',
          borderTopWidth: 0
        },
        headerShown: false
      }}
    >
        <Tab.Screen
          name = 'Alarm'
          component = {HomeScreen}
          options = {{tabBarIcon: MenuIcon(images.alarm)}}
        />
        <Tab.Screen
          name = 'Puzzler'
          component = {Puzzler}
          options = {{tabBarIcon: MenuIcon(images.puzzle)}}
        />
        <Tab.Screen
          name = 'Settings'
          component = {Settings}
          options = {{tabBarIcon: MenuIcon(images.settings)}}
        />
        <Tab.Screen
          name = 'Stats'
          component = {Stats}
          options = {{tabBarIcon: MenuIcon(images.stats)}}
        />
    </Tab.Navigator>
  )
}

export default Tabs
