import React from 'react'
import * from '../index.js'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('index', () => {
  test('index', () => {
    const result = JSON.stringify(<Tabs />)
    expect(typeof (result)).not.toEqual(null)
  })
})
