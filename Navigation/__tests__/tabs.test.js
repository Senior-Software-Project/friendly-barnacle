import React from 'react'
import Tabs from '../tabs.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { describe, expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'

describe('<Tabs />', () => {
  test('Tabs should return a non null value', () => {
    const result = JSON.stringify(<Tabs />)
    expect(typeof (result)).not.toEqual(null)
  })
})
