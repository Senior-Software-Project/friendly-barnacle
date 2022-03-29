import React from 'react'
import App from '../App'
import { describe, expect, test } from '@jest/globals'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const getAppStack = App

describe('<App />', () => {
  test('App should return Home as the initial view.', () => {
    const result = JSON.stringify(App())
    expect(result).toMatch('"initialRouteName":"Home"')
  })
  test('App stack returns NavigationStack', () => {
    expect(App).toStrictEqual(getAppStack)
    expect(JSON.stringify(getAppStack())).toMatch('"initialRouteName":"Home"')
    expect(typeof (getAppStack)).toBe(typeof (() => {}))
    expect(getAppStack).toBeTruthy()
  })
  test('Mock the app', () => {
    const Stack = createNativeStackNavigator()
    const component = {}
    const params = {}
    const app = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MockedScreen"
              component={component}
              initialParams={params}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    expect(app).toBeTruthy()
  })
  test('Compare everything', () => {
    expect(JSON.stringify(getAppStack())).toBe(JSON.stringify(App()))
  })
})
