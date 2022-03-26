import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AnimatedAppLoader } from './views/Splash'
import Tabs from './Navigation/tabs'
import { Puzzler, Settings, Splash, Stats } from './views'

const splashImage = require('././assets/splash.png')

const Stack = createNativeStackNavigator()

export const getAppStack = () => {
  return (Stack)
}

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AnimatedAppLoader image={splashImage}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Puzzler" component={Puzzler} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>
      </AnimatedAppLoader>
    </NavigationContainer>
  )
}

export default App
