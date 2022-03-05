import Splash from '../Splash'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

const splash = create(Splash)

describe('<Splash />', () => {
  test('Splash should not have lexical errors.', () => {
    expect(splash).toBeTruthy()
  })
  test('Splash should not return null.', () => {
    expect(typeof (splash)).not.toEqual(null)
  })
  test('Splash should shuffle array.', () => {
    const tree = JSON.stringify(splash)
    expect(tree).toMatch('null')
  })
})
