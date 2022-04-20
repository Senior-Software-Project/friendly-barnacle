import React from 'react'
import { getAppStack } from '../../App'
import { AnimatedAppLoader } from '../Splash'
import { describe, test } from '@jest/globals'
import { render, waitFor } from '@testing-library/react-native'
import { images } from '../../components/images'

describe('Splash Animation', () => {
  test('Render Animated Splash', async () => {
    await waitFor(() => render(<AnimatedAppLoader image={images.splash}>{getAppStack()}</AnimatedAppLoader>))
  })
})

/*
  Sources:
  * https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
*/
