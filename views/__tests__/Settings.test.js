import React from 'react'
import View, { getCategory, setCategory, getDifficulty, setDifficulty } from '../Settings.js'
import { NavigationContainer } from '@react-navigation/native'
import { describe, expect, test } from '@jest/globals'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

describe('Settings View', () => {
  test('Render Settings', () => {
    render(<NavigationContainer><View /></NavigationContainer>)
  })
  test('Change Category', async () => {
    const { getByTestId } = render(<NavigationContainer><View /></NavigationContainer>)
    waitFor(() => fireEvent(getByTestId('Picker.category'), 'onValueChange', 16))
    expect(await getCategory()).toBe(16)
    setCategory('')
    expect(await getCategory()).toBe('')
  })
  test('Change Difficulty', async () => {
    const { getByTestId } = render(<NavigationContainer><View /></NavigationContainer>)
    await waitFor(() => fireEvent(getByTestId('Picker.difficulty'), 'onValueChange', 0))
    expect(await getDifficulty()).toBe('easy')
    setDifficulty('')
    expect(await getDifficulty()).toBe('')
  })
})
