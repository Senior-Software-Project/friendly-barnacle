import React from 'react'
import View from '../Home.js'
import { describe, expect, test } from '@jest/globals'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

jest.mock('react-native/Libraries/Modal/Modal', () => {
  const Modal = jest.requireActual('react-native/Libraries/Modal/Modal')
  // eslint-disable-next-line react/display-name
  return props => <Modal {...props} />
})

describe('Homescreen View', () => {
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
  test('Reload app', async () => {
    const { getByTestId } = render(<View />)
    await waitFor(() => fireEvent.press(getByTestId('App.reload')))
  })
})

/*
  Sources:
  - https://spin.atomicobject.com/2021/02/24/react-navigation-5-unit-testing-components/
  - https://github.com/vanGalilea/react-native-testing/blob/master/__tests__/Modal.test.tsx
*/
