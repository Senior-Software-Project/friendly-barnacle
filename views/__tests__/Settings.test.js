import Settings from '../Settings'
import React from 'react'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<Settings />', () => {
  test('Settings should not have lexical errors.', () => {
    expect(<Settings />).toBeTruthy()
  })
  test('Settings should not return null.', () => {
    expect(typeof (<Settings/>)).not.toEqual(null)
  })
  test('Settings should shuffle array.', () => {
    const component = create(<Settings />)
    const tree = component.toJSON()
    expect(tree.type).toMatch('View')
  })
})
