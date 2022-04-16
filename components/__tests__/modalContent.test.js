import React from 'react'
import ModalContent from '../modalContent.js'
import { describe, test } from '@jest/globals'
import { render, fireEvent } from '@testing-library/react-native'

describe('ModalContent', () => {
  test('Render Modal Content', () => {
    const { getByTestId } = render(<ModalContent />)
    fireEvent.press(getByTestId('Modal.date'))
    fireEvent.press(getByTestId('Modal.time'))
  })
})
