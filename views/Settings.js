import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { decode } from 'html-entities'
import { fromStorage, toStorage } from '../components/storage'
import { styles } from './Styles'

/**
 *  All the available categories.
 */
const categories = {
  '': 'Any Category',
  9: 'General Knowledge',
  10: 'Books',
  11: 'Film',
  12: 'Music',
  13: 'Musicals &amp; Theatres',
  14: 'Television',
  15: 'Video Games',
  16: 'Board Games',
  17: 'Science &amp; Nature',
  18: 'Computers',
  19: 'Mathematics',
  20: 'Mythology',
  21: 'Sports',
  22: 'Geography',
  23: 'History',
  24: 'Politics',
  25: 'Art',
  26: 'Celebrities',
  27: 'Animals',
  28: 'Vehicles',
  29: 'Comics',
  30: 'Gadgets',
  31: 'Japanese Anime &amp; Manga',
  32: 'Cartoon &amp; Animations'
}
let categoryKey = ''

/**
 * Getter for category
 * @returns categoryKey
 */
async function getCategory () {
  try {
    const key = await fromStorage('cat')
    return key === null ? '' : key
  } catch (error) {
    console.warn(error)
    return categoryKey
  }
}

/**
 * Setter for category
 * @param {*} key
 */
function setCategory (key) {
  categoryKey = key
  toStorage('cat', key)
}

const categoryOptions = []
for (const key in categories) {
  categoryOptions.push(<Picker.Item label={decode(categories[key])} value={key} key={key} />)
}

const difficulties = {
  '': '',
  0: 'easy',
  1: 'medium',
  2: 'hard'
}
let difficultyKey = ''

async function getDifficulty () {
  try {
    const key = await getDifficultyKey()
    return key === '' ? '' : difficulties[key]
  } catch (error) {
    console.warn(error)
    return difficultyKey === '' ? '' : difficulties[difficultyKey]
  }
}

async function getDifficultyKey () {
  try {
    const key = await fromStorage('dif')
    return key === null ? '' : key
  } catch (error) {
    console.warn(error)
    return difficultyKey
  }
}

function setDifficulty (key) {
  difficultyKey = key
  toStorage('dif', key)
}

const difficultyOptions = []
for (const key in difficulties) {
  difficultyOptions.push(<Picker.Item label={key === '' ? 'any' : difficulties[key]} value={key} key={key} />)
}

/**
 *  Allows the user to set the type of puzzle setting that they want
 *  @returns style settings
 */
function Settings () {
  const [catKey, setCategoryKey] = useState('')
  const [difKey, setDifficultyKey] = useState('')

  useEffect(async () => {
    setCategoryKey(await getCategory())
    setDifficultyKey(await getDifficultyKey())
  }, [useIsFocused()])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {decode(categories[catKey])}</Text>
      <Picker testID='Picker.category' style={styles.picker} selectedValue={catKey} onValueChange={(key) => { setCategoryKey(key); setCategory(key) }}>
        {categoryOptions}
      </Picker>
      <Text style={styles.title}>Difficulty: {difficulties[difKey]}</Text>
      <Picker testID='Picker.difficulty' style={styles.picker} selectedValue={difKey} onValueChange={(key) => { setDifficultyKey(key); setDifficulty(key) }}>
        {difficultyOptions}
      </Picker>
    </View>
  )
}

export { getCategory, setCategory, getDifficulty, setDifficulty }

export default Settings
