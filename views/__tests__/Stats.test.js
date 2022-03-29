import { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from '../Stats.js'
import { describe, expect, test, beforeEach } from '@jest/globals'

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

describe('Stats View', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })
  test('Stats functions', () => {
    expect(getCorrect()).toBe(0)
    expect(getIncorrect()).toBe(0)
    incrementCorrect()
    incrementIncorrect()
    expect(getCorrect()).toBe(1)
    expect(getIncorrect()).toBe(1)
  })
})
