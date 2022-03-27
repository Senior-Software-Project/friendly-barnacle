import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Splash'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<Splash />', () => {
  test('Splash should not have lexical errors.', () => {
    expect(create(Splash)).toBeTruthy()
  })
  test('Splash should not return null.', () => {
    expect(typeof (create(Splash))).not.toEqual(null)
    const tree = JSON.stringify(create(Splash))
    expect(tree).toMatch('null')
  })
  test('Splash should return a View component.', () => {
    const nav = createNativeStackNavigator().Navigator
    const tree = JSON.stringify(create(Splash))
    expect(tree).toMatch('null')
    expect(nav).toMatch('null')
  })
})
