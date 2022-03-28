import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, Puzzler, Settings, Stats } from '../views'
import { images, getImage } from '../components/images'

const Tab = createBottomTabNavigator()

function TabScreen (name, component, icon, width, height) {
  return (
    <Tab.Screen
      name = {name}
      component = {component}
      options = {{
        tabBarIcon: ({ focused }) => (getImage(icon, width, height,
          { tintColor: focused ? '#5A57F7' : '#FFFFFF' }))
      }}
    />
  )
}

const alarmTab = TabScreen('Alarm', HomeScreen, images.alarm, 45, 45)
const puzzleTab = TabScreen('Puzzler', Puzzler, images.puzzle, 45, 45)
const settingsTab = TabScreen('Settings', Settings, images.settings, 50, 50)
const statsTab = TabScreen('Stats', Stats, images.stats, 50, 50)

const Tabs = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}

export default Tabs
