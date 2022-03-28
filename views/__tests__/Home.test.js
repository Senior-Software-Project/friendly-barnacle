import React from 'react'
import View from '../Home.js'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { render } from '@testing-library/react-native'
// import { HomeScreen } from '@testing-library/jest-dom'

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
  // test('Homescreen Renders Correctly', () => {
  //   const tree = create(<HomeScreen />)
  //   expect(tree).toMatchSnapshot()
  // })
  test('Open & Close Modal', async () => {
    const { getByTestId } = render(<View />)
    // expect(getByTestId('Modal.close')).toBeInTheDocument()
    // expect(getByTestId('Modal.open')).toBeInTheDocument()
    expect(() => getByTestId('Modal.close')).toThrow(
      'Unable to find an element with testID: Modal.close'
    )
    /*
    fireEvent.press(getByTestId('Modal.open'))
    await waitFor(() => getByTestId('Modal.open'))
    fireEvent.press(getByTestId('Modal.close'))

    expect(() => getByTestId('Modal.close')).toThrow(
      'Unable to find an element with testID: Modal.close',
    )
    */
  })
})

/*
  Sources:
  - https://github.com/vanGalilea/react-native-testing/blob/master/__tests__/Modal.test.tsx
*/
