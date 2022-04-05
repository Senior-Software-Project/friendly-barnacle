require('jest-fetch-mock').enableMocks()
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () =>
  require('react-native/Libraries/EventEmitter/__mocks__/NativeEventEmitter.js')
)
