import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//import HomeScreen from './views/Home'
//import Puzzler from './views/Puzzler'
//import Settings from './views/Settings'
import { AnimatedAppLoader } from "./views/Splash"
//import Stats from './views/Stats'

import Tabs from "./Navigation/tabs"
import { HomeScreen, Puzzler, Settings, Splash, Stats } from "./views"

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <AnimatedAppLoader image={require("././assets/splash.png")}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
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
