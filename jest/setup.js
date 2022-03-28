/*
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn()
    })
  }
})

// Verbatim copy from snippet at Source: https://spin.atomicobject.com/2021/02/24/react-navigation-5-unit-testing-components/
*/

/*
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()
const MockedNavigator = ({ component, params = {} }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={ component }
          initialParams={ params }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MockedNavigator

// Verbatim copy from snippet at Source: https://spin.atomicobject.com/2021/02/24/react-navigation-5-unit-testing-components/
*/

/*
import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}

  return Reanimated
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
*/
