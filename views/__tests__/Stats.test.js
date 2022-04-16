import React from 'react'
import Stats, { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from '../Stats.js'
import { NavigationContainer } from '@react-navigation/native'
import { describe, expect, test } from '@jest/globals'
import { render } from '@testing-library/react-native'

describe('Stats View', () => {
  test('Stats functions', () => {
    expect(getCorrect()).toBe(0)
    expect(getIncorrect()).toBe(0)
    incrementCorrect()
    incrementIncorrect()
    expect(getCorrect()).toBe(1)
    expect(getIncorrect()).toBe(1)
  })
  test('Render Stats', () => {
    render(<NavigationContainer><Stats /></NavigationContainer>)
  })
})
