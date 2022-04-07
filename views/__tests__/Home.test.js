import React from 'react'
import View from '../Home.js'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

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

jest.mock('react-native/Libraries/Modal/Modal', () => {
  const Modal = jest.requireActual('react-native/Libraries/Modal/Modal')
  // eslint-disable-next-line react/display-name
  return props => <Modal {...props} />
})

describe('Homescreen View', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })

  test('Homescreen Renders', () => {
    render(<View />)
  })
  test('Open & Close Modal', async () => {
    const { getByTestId } = render(<View />)
    expect(() => getByTestId('Modal.close')).toThrow(
      'Unable to find an element with testID: Modal.close'
    )
    fireEvent.press(getByTestId('Modal.open'))
    await waitFor(() => { getByTestId('Modal.open') })
    fireEvent.press(getByTestId('Modal.close'))

    expect(() => getByTestId('Modal.close')).toThrow(
      'Unable to find an element with testID: Modal.close'
    )
  })
})

/*
  Sources:
  - https://spin.atomicobject.com/2021/02/24/react-navigation-5-unit-testing-components/
  - https://github.com/vanGalilea/react-native-testing/blob/master/__tests__/Modal.test.tsx
*/
