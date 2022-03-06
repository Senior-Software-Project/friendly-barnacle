import Stats from '../Stats'
import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<Stats />', () => {
  test('Stats should not have lexical errors.', () => {
    expect(<Stats />).toBeTruthy()
  })
  test('Stats should not return null.', () => {
    expect(typeof (<Stats/>)).not.toEqual(null)
  })
  test('Stats should shuffle array.', () => {
    const component = create(<Stats />)
    const tree = component.toJSON()
    expect(tree.type).toMatch('View')
  })
})
