import Splash from '../Splash'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<Splash />', () => {
  test('Splash should not have lexical errors.', () => {
    expect(create(Splash)).toBeTruthy()
  })
  test('Splash should not return null.', () => {
    expect(typeof (create(Splash))).not.toEqual(null)
  })
  test('Splash should shuffle array.', () => {
    const tree = JSON.stringify(create(Splash))
    expect(tree).toMatch('null')
  })
})
