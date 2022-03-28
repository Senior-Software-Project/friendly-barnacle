import React from 'react'
import ModalContent from '../modalContent.js'
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

describe('ModalContent', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })
  test('Render Modal Contant', () => {
    render(<ModalContent />)
  })
})
