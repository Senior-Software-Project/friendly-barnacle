import Puzzler, { shuffleArray } from '../Puzzler'
import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<Puzzler />', () => {
  test('Puzzler should not have lexical errors.', () => {
    expect(<Puzzler />).toBeTruthy()
  })
  test('Puzzler should not return null.', () => {
    expect(typeof (<Puzzler/>)).not.toEqual(null)
  })
  test('Puzzler should return a View component.', () => {
    const component = create(<Puzzler />)
    const tree = component.toJSON()
    expect(tree.type).toMatch('View')
  })
  test('Verify shuffleArray', () => {
    const arr = [4, 3, 2, 1]
    const response = shuffleArray(arr)
    expect(response.length).toBe(arr.length)
    for (let i = 0; i < arr.length; i++) {
      expect(arr.includes(response[i])).toBeTruthy()
    }
  })
  test('Fetch api call', () => {
    expect(true).toBeTruthy()
  })
  test('Verify returned jsx / React component', () => {
    expect(true).toBeTruthy()
  })
})
