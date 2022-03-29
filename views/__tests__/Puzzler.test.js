import React from 'react'
import View, { shuffleArray, fetchTrivia } from '../Puzzler.js'
import { getCorrect } from '../Stats.js'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import fetchMock from 'jest-fetch-mock'

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
    fetchMock.resetMocks()
    jest.useFakeTimers()
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
  test('Fetch Trivia', async () => {
    const result = await fetchTrivia()
    expect(result).toBeTruthy()
  })
  test('Trigger Fetch Trivia', async () => {
    const { getByTestId, getAllByTestId } = render(<View />)
    await waitFor(() => fireEvent.press(getByTestId('Question')))
    expect(getByTestId('View.answers')).toBeTruthy()
    const answers = getAllByTestId('Answers')
    const correctCount = getCorrect()
    for (let i = 0; i < answers.length; i++) {
      if (correctCount === getCorrect()) {
        act(() => {
          fireEvent.press(answers[i])
        })
      }
    }
  })
  test('Fetch Trivia Catches Errors', async () => {
    fetchMock.enableMocks()
    try {
      await fetchTrivia()
    } catch (e) {
      expect(e).toMatch('FetchError')
    }
    fetchMock.dontMock()
  })
})

/*
  Sources:
  - [React Testing Library Timeout Helpers](https://github.com/testing-library/dom-testing-library/blob/main/src/helpers.js)
  - [React Testing Library waitFor](https://github.com/testing-library/dom-testing-library/blob/main/src/wait-for.js#L53)
  - [waitFor vs await waitFor Timeout Issue](https://github.com/callstack/react-native-testing-library/issues/506)
  - [Jest & Github Actions](https://medium.com/swlh/jest-and-github-actions-eaf3eaf2427d)
*/
