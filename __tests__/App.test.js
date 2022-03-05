import App, { testFunc } from '../App'
import { shallow } from 'enzyme';

describe('<App />', () => {
  test('App should not have lexical errors.', () => {
    shallow(<App />)
  }),
  test('App should not return null.', () => {
    const result = shallow(<App />)
    expect(typeof(result)).not.toEqual(null)
  }),
  test('App should return Home as the initial view.', () => {
    const result = JSON.stringify(App())
    expect(result).toMatch(/\"initialRouteName\":\"Home\"/)
  })
})
