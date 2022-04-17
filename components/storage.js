import { Storage } from 'expo-storage'

/**
 *  Storage design decisions.
 *  Of the options for persistent storage, we have:
 *  1. localStorage for the web
 *            at https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 *  2. AsyncStorage for all platforms, from @react-native-async-storage/async-storage
 *            at https://react-native-async-storage.github.io/async-storage/
 *  3. Storage for Android/iOS from expo-storage
 *            at https://github.com/echowaves/expo-storage#readme
 *  We chose expo-storage because the library is actively developed and maintained as of 2022.
 *
 *  Other Sources:
 *  -  https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 */

/**
  * Compares storage environment with Window to determine compatibility.
  * Store in browser for the Web or Expo-Storage for Android/iOS
  * @return boolean
  */
function isWindowed () {
  try {
    return localStorage === window.localStorage
  } catch (e) {
    return false
  }
}

/**
 * Retrieves value paired with passed key, from persistent storage.
 * @param {object name} key - name accessed value stored in json.
 * @return value as String, else null
 */
async function fromStorage (key) {
  if (isWindowed()) {
    // console.log(key, await JSON.parse(await localStorage.getItem(key)))
    return localStorage.getItem(key)
  } else {
    // console.log(key, JSON.parse(await Storage.getItem({key})))
    return JSON.parse(await Storage.getItem({ key }))
  }
}

/**
 * Stores passed key, values pairs persistently to storage.
 * @param {object name} key - name accessed value stored in json. Must be String or int.
 * @param {object value} value - value mapped to key stored in json. Should be JSON stringifiable.
 */
async function toStorage (key, value) {
  if (isWindowed()) {
    if (value instanceof String) {
      localStorage.getItem(key, value)
    } else {
      localStorage.getItem(key, value.toString())
    }
  } else {
    if (value instanceof String) {
      await Storage.setItem({ key, value })
    } else {
      await Storage.setItem({ key, value: JSON.stringify(value) })
    }
  }
}

export { fromStorage, toStorage }
