import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { styles } from './Styles'
import { fromStorage, toStorage } from '../components/storage'

let correctCount = 0
let incorrectCount = 0

/**
 * A getter function that returns the amount of correct answers selected
 * @returns the stats of correct
 */
async function getCorrect () {
  try {
    const value = Number.parseInt(await fromStorage('correctAnswers'))
    return Number.isNaN(value) ? correctCount : value
  } catch (error) {
    console.warn(error)
    return correctCount
  }
}

/**
 * A getter function that returns the Incorrect answer amount
 * @returns the stats of incorrect
 */
async function getIncorrect () {
  try {
    const value = Number.parseInt(await fromStorage('incorrectAnswers'))
    return Number.isNaN(value) ? incorrectCount : value
  } catch (error) {
    console.warn(error)
    return incorrectCount
  }
}

/**
 *A setter function that sets the correct functions
 * @param {*} correctAnswers
 */
async function setCorrect (value) {
  value = Number.parseInt(value)
  value = Number.isNaN(value) ? 0 : value
  correctCount = value
  await toStorage('correctAnswers', value)
}

/**
 *A setter function that sets the incorrect answers
 * @param {*} incorrectAnswers
 */
async function setIncorrect (value) {
  Number.parseInt(value)
  value = Number.isNaN(value) ? 0 : value
  incorrectCount = value
  await toStorage('incorrectAnswers', value)
}

/**
 *This function increments the correct count every time a correct answer is chosen
 */
async function incrementCorrect () {
  const value = await getCorrect()
  await setCorrect(value + 1)
}

/**
 *  Increments the incorrect count every time a wrong answer is chosen.
 */
async function incrementIncorrect () {
  const value = await getIncorrect()
  await setIncorrect(value + 1)
}

/**
 *
 * This function displays the amount of correct and incorrect questions
 * Trivia Accuracy: (total questions queried / total attempts) * 100%
 * @param {*} param0
 * @returns {number}
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

export { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect }

export default Stats
