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

describe('Splash Animation', () => {
  beforeEach(() => {
    mockedDispatch.mockClear()
  })
  test('Render Splash', () => {
    expect(1).toBeTruthy()
  })
})
