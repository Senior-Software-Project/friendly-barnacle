import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import { describe, expect, test } from '@jest/globals'

describe('<App />', () => {
  test('App should not have lexical errors.', () => {
    expect(shallow(<App />)).toBeTruthy()
  })
  test('App should not return null.', () => {
    const result = shallow(<App />)
    expect(typeof (result)).not.toEqual(null)
  })
  test('App should return Home as the initial view.', () => {
    const result = JSON.stringify(App())
    expect(result).toMatch('"initialRouteName":"Home"')
  })
})
