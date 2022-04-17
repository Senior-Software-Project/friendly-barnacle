import React from 'react'
import View, { shuffleArray, fetchTrivia } from '../Puzzler.js'
import { NavigationContainer } from '@react-navigation/native'
import { getCorrect } from '../Stats.js'
import { describe, expect, test } from '@jest/globals'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import fetchMock from 'jest-fetch-mock'

describe('Puzzler View', () => {
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
    const result = await waitFor(() => fetchTrivia())
    expect(result).toBeTruthy()
  })
  test('Trigger Fetch Trivia', async () => {
    const { getByTestId, getAllByTestId } = render(<NavigationContainer><View /></NavigationContainer>)
    await waitFor(() => fireEvent.press(getByTestId('Question')))
    expect(getByTestId('View.answers')).toBeTruthy()
    const answers = getAllByTestId('Answers')
    const correctCount = getCorrect()
    for (const answer of answers) {
      if (correctCount === getCorrect()) {
        act(() => {
          fireEvent.press(answer)
        })
      }
    }
  }, 30000)
  test('Fetch Trivia Catches Errors', async () => {
    fetchMock.enableMocks()
    try {
      await fetchTrivia()
    } catch (e) {
      expect(JSON.stringify(e)).toMatch('invalid json response body')
      console.log(e)
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
