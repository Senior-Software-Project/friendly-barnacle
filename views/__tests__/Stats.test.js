import React from 'react'
import Stats, { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from '../Stats.js'
import { NavigationContainer } from '@react-navigation/native'
import { describe, expect, test } from '@jest/globals'
import { render } from '@testing-library/react-native'

describe('Stats View', () => {
  test('Stats functions', async () => {
    expect(await getCorrect()).toBe(0)
    expect(await getIncorrect()).toBe(0)
    await incrementCorrect()
    await incrementIncorrect()
    expect(await getCorrect()).toBe(1)
    expect(await getIncorrect()).toBe(1)
  })
  test('Render Stats', () => {
    render(<NavigationContainer><Stats /></NavigationContainer>)
  })
})
