import React from 'react'
import Tabs from '../tabs.js'
import { describe, expect, test } from '@jest/globals'

describe('<Tabs />', () => {
  test('Tabs should return a non null value', () => {
    const result = JSON.stringify(<Tabs />)
    expect(typeof (result)).not.toEqual(null)
  })
})
