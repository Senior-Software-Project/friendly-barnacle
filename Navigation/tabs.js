import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, Puzzler, Settings, Stats } from '../views'
import { images } from '../components'

const Tab = createBottomTabNavigator()

function MenuIcon (icon, focused) {
  return (
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
}

function TabScreen (name, component, icon) {
  return (
    <Tab.Screen
      name = {name}
      component = {component}
      options = {{ tabBarIcon: ({ focused }) => (MenuIcon(icon, focused)) }}
    />
  )
}

const alarmTab = TabScreen('Alarm', HomeScreen, images.alarm)
const puzzleTab = TabScreen('Puzzler', Puzzler, images.puzzle)
const settingsTab = TabScreen('Settings', Settings, images.settings)
const statsTab = TabScreen('Stats', Stats, images.stats)

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
      {alarmTab}
      {puzzleTab}
      {settingsTab}
      {statsTab}
    </Tab.Navigator>
  )
}

export default Tabs
