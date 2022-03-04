import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, Puzzler, Settings, Stats } from '../views'
import { images } from '../components'

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#34344A',
                    borderTopWidth: 0,
                },
                headerShown: false

            }}
        >
            <Tab.Screen
                name = "Alarm"
                component = {HomeScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source = {images.alarm}
                            resizeMode = "contain"
                            style = {{
                                width : 45,
                                height : 45,
                                tintColor: focused ? '#5A57F7' : '#FFFFFF'

                            }}
                        />
                    )
                }}
      />
      <Tab.Screen
        name='Puzzler'
        component={Puzzler}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.puzzle}
              resizeMode='contain'
              style={{
                width: 45,
                height: 45,
                tintColor: focused ? '#5A57F7' : '#FFFFFF'
              }}
            />
          )
        }}
        />
            <Tab.Screen
                name = "Settings"
                component = {Settings}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source = {images.settings}
                            resizeMode = "contain"
                            style = {{
                                width : 50,
                                height : 50,
                                tintColor: focused ? '#5A57F7' : '#FFFFFF'
                            }}
                        />
                    )
                }}
            />
      <Tab.Screen
        name='Stats'
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.stats}
              resizeMode='contain'
              style={{
                width: 50,
                height: 50,
                tintColor: focused ? '#5A57F7' : '#FFFFFF'
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
