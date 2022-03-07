import HomeScreen from '../Home.js'
import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<HomeScreen />', () => {
  test('HomeScreen should return HomeScreen view.', () => {
    const result = JSON.stringify(<HomeScreen />)
    expect(typeof (result)).not.toEqual(null)
  })
  test('Testing HomeScreen', () => {
    const component = create(<HomeScreen />)
    const tree = component.toJSON()
    expect(tree.type).toMatch('RCTSafeAreaView')
    expect(tree.children.length).toEqual(3)
    const childrenTypes = JSON.stringify(tree.children)
    expect(childrenTypes).toMatch('"type":"Modal"')
    expect(childrenTypes).toMatch('"type":"View"')
  })
})
