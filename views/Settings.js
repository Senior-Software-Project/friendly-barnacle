import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from './Styles'
import { decode } from 'html-entities'

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

function getCategory () {
  return categoryKey
}

function setCategory (key) {
  categoryKey = key
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

function getDifficulty () {
  return difficulties[difficultyKey]
}

function setDifficulty (key) {
  difficultyKey = key
}

const difficultyOptions = []
for (const key in difficulties) {
  difficultyOptions.push(<Picker.Item label={key === '' ? 'any' : difficulties[key]} value={key} key={key} />)
}

function Settings () {
  const [catKey, setCategoryKey] = useState('')
  const [difKey, setDifficultyKey] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category:</Text>
      <Picker testID='Picker.category' style={styles.picker} selectedValue={catKey} onValueChange={(key) => { setCategoryKey(key); setCategory(key) }}>
        {categoryOptions}
      </Picker>
      <Text style={styles.title}>Difficulty:</Text>
      <Picker testID='Picker.difficulty' style={styles.picker} selectedValue={difKey} onValueChange={(key) => { setDifficultyKey(key); setDifficulty(key) }}>
        {difficultyOptions}
      </Picker>
    </View>
  )
}

export { getCategory, setCategory, getDifficulty, setDifficulty }

export default Settings
