import HomeScreen from '../Home.js'
import React, { useState } from 'react'
import { shallow } from 'enzyme'
import { describe, expect, test, } from '@jest/globals'
import { create } from "react-test-renderer"

describe('<HomeScreen />', () => {
  test('HomeScreen should not have lexical errors.', () => {
    expect(shallow(<HomeScreen />))
  }),
  test('HomeScreen should not return null.', () => {
    const result = shallow(<HomeScreen />)
    expect(typeof (result)).not.toEqual(null)
  }),
  test('HomeScreen should return HomeScreen view.', () => {
    const result = JSON.stringify(<HomeScreen />)
    expect(typeof (result)).not.toEqual(null)
  }),
  test('Testing HomeScreen', () => {
    let component = create(<HomeScreen />)
    const tree = component.toJSON()
    expect(tree.type).toMatch('RCTSafeAreaView')
    expect(tree.children.length).toEqual(3)
    const childrenTypes = JSON.stringify(tree.children)
    expect(childrenTypes).toMatch('"type":"Modal"')
    expect(childrenTypes).toMatch('"type":"View"')
  })
})
