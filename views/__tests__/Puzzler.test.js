import React from 'react'
import View, { shuffleArray } from '../Puzzler.js'
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

describe('Puzzler View', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })
  test('Render Puzzler', () => {
    render(<View />)
  })
  test('Verify shuffleArray', () => {
    const arr = [4, 3, 2, 1]
    const response = shuffleArray(arr)
    expect(response.length).toBe(arr.length)
    for (let i = 0; i < arr.length; i++) {
      expect(arr.includes(response[i])).toBeTruthy()
    }
  })
  test('Select and answer trivia', async () => {
    const { getByTestId } = render(<View />)
    expect(() => getByTestId('Question.answer')).toThrow(
      'Unable to find an element with testID: Question.answer'
    )
    fireEvent.press(getByTestId('Question.get'))
    await waitFor(() => getByTestId('Question.get'))
    // fireEvent.press(getByTestId('Question.answer'))
  })
  /*
  expect(() => getByTestId('Modal.close')).toThrow(
      'Unable to find an element with testID: Modal.close'
    )
  fireEvent.press(getByTestId('Modal.open'))
  await waitFor(() => getByTestId('Modal.open'))
  fireEvent.press(getByTestId('Modal.close'))
  */
})
