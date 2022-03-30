import React from 'react'
import View from '../tabs.js'
import { NavigationContainer } from '@react-navigation/native'
import { describe, test, beforeEach } from '@jest/globals'
import { render } from '@testing-library/react-native'

const mockedDispatch = jest.fn()

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch
    })
  }
})

describe('Tabs Stack', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })
  test('Render Tabs', () => {
    render(<NavigationContainer><View /></NavigationContainer>)
  })
})
