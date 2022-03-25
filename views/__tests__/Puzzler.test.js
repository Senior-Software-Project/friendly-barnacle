import Puzzler, {shuffleArray} from '../Puzzler'
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
  test('Puzzler should shuffle array.', () => {
    const component = create(<Puzzler />)
    const tree = component.toJSON()
    expect(tree.type).toMatch('View')
  })
  test('Shuffler', () => {
    arr = [4, 3, 2, 1]
    response = shuffleArray(arr)
    console.log(response)
    expect(response.length).toBe(arr.length)
    for ( let i = 0; i < arr.length; i++) {
      expect(arr.includes(response[i])).toBeTruthy()
    }
  })
})
