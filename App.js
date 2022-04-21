import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AnimatedAppLoader } from './views/Splash'
import Tabs from './Navigation/tabs'
import { Puzzler, Settings, Stats } from './views'
import { images } from './components/images'

const Stack = createNativeStackNavigator()

export function getAppStack () {
  return (Stack)
}

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AnimatedAppLoader image={images.splash}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          testID = 'App.nav'
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Puzzler" component={Puzzler} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>
      </AnimatedAppLoader>
    </NavigationContainer>
  )
}

export default App
