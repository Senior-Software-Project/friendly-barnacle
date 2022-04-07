import React from 'react'
import App, { getAppStack } from '../App'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { render, waitFor } from '@testing-library/react-native'

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

describe('App Stack', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })

  test('Render App', async () => {
    const { findByTestId } = render(<App />)
    await waitFor(() => { findByTestId('App.nav') })
  })
  test('Compare everything', () => {
    expect(getAppStack()).toBeTruthy()
  })
})
