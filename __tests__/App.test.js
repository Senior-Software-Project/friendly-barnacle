import App from '../App'
import { describe, expect, test } from '@jest/globals'

describe('<App />', () => {
  test('App should return Home as the initial view.', () => {
    const result = JSON.stringify(App())
    expect(result).toMatch('"initialRouteName":"Home"')
  })
})
