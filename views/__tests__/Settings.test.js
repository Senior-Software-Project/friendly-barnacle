import React from 'react'
import View, { getCategory, setCategory, getDifficulty, setDifficulty } from '../Settings.js'
import { describe, expect, test } from '@jest/globals'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

describe('Settings View', () => {
  test('Render Settings', () => {
    render(<View />)
  })
  test('Change Category', () => {
    const { getByTestId } = render(<View />)
    waitFor(() => fireEvent(getByTestId('Picker.category'), 'onValueChange', 16))
    expect(getCategory()).toBe(16)
    setCategory('')
    expect(getCategory()).toBe('')
  })
  test('Change Difficulty', async () => {
    const { getByTestId } = render(<View />)
    await waitFor(() => fireEvent(getByTestId('Picker.difficulty'), 'onValueChange', 0))
    // setDifficultyKey(0)
    expect(getDifficulty()).toBe('easy')
    setDifficulty('')
    expect(getDifficulty()).toBe('')
  })
})
