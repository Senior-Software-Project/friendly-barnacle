import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { styles } from './Styles'
import { fromStorage, toStorage } from '../components/storage'

let correctCount = 0
let incorrectCount = 0

async function getCorrect () {
  try {
    const value = Number.parseInt(await fromStorage('correctAnswers'))
    return Number.isNaN(value) ? correctCount : value
  } catch (error) {
    console.warn(error)
    return correctCount
  }
}

async function getIncorrect () {
  try {
    const value = Number.parseInt(await fromStorage('incorrectAnswers'))
    return Number.isNaN(value) ? incorrectCount : value
  } catch (error) {
    console.warn(error)
    return incorrectCount
  }
}

async function setCorrect (value) {
  value = Number.parseInt(value)
  value = Number.isNaN(value) ? 0 : value
  correctCount = value
  await toStorage('correctAnswers', value)
}

async function setIncorrect (value) {
  Number.parseInt(value)
  value = Number.isNaN(value) ? 0 : value
  incorrectCount = value
  await toStorage('incorrectAnswers', value)
}

async function incrementCorrect () {
  const value = await getCorrect()
  await setCorrect(value + 1)
}

async function incrementIncorrect () {
  const value = await getIncorrect()
  await setIncorrect(value + 1)
}

/**
 *  Accuracy Score: (total questions queried / total attempts) * 100%
 */
function Stats () {
  const [caCount, setcaCount] = useState(0)
  const [iaCount, setiaCount] = useState(0)

  useEffect(async () => {
    setcaCount(await getCorrect())
    setiaCount(await getIncorrect())
  }, [useIsFocused()])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats:</Text>
      <Text style={styles.text}>Questions Attempted: {caCount}</Text>
      <Text style={styles.text}>Total Attempts: {caCount + iaCount}</Text>
      <Text style={styles.text}>Trivia Accuracy: {(caCount / (caCount + iaCount) * 100).toFixed(2)}%</Text>
    </View>
  )
}
// <Text style={styles.text}>Correct Attempts: {caCount}</Text>
// <Text style={styles.text}>Incorrect Attempts: {iaCount}</Text>

export { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect }

export default Stats
