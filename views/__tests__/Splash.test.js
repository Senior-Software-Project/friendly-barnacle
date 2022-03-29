import React from 'react'
import { Splash } from '../Splash.js'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { create } from 'react-test-renderer'

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
  test('Splash Tree is Correct', async () => {
    const tree = await create(<Splash />).toJSON()
    expect(tree.children.length).toBe(3)
  })
})
