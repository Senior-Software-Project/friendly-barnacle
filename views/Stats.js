import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './Styles'
import PropTypes from 'prop-types'
import { useIsFocused } from '@react-navigation/native'

Stat.propTypes = {
  stat: PropTypes.string
}

const caKey = 'correctAnswers'
const iaKey = 'incorrectAnswers'
const stats = {
  caKey: getCorrect(),
  iaKey: getIncorrect()
}

/**
 * This function returns the local storage component that makes sure the data is stored locally
 * @returns boolean
 */
function isWindowed () {
  try {
    return localStorage === window.localStorage
  } catch (e) {
    return false
  }
}

/**
 *A setter function that sets the correct functions
 * @param {*} correctAnswers
 */
function setCorrect (correctAnswers) {
  stats.caKey = correctAnswers
  if (isWindowed()) {
    localStorage.setItem(caKey, correctAnswers)
  }
}
/**
 *A setter function that sets the incorrect answers
 * @param {*} incorrectAnswers
 */
function setIncorrect (incorrectAnswers) {
  stats.iaKey = incorrectAnswers
  if (isWindowed()) {
    localStorage.setItem(iaKey, incorrectAnswers)
  }
}

/**
 * A getter function that returns the amount of correct answers selected
 * @returns the stats of correct
 */
function getCorrect () {
  try {
    if (isWindowed()) {
      return parseInt(localStorage.getItem(caKey))
    } else {
      return stats.caKey
    }
  } catch (e) {
    return 0
  }
}

/**
 * A getter function that returns the Incorrect answer amount
 * @returns the stats of incorrect
 */
function getIncorrect () {
  try {
    if (isWindowed()) {
      return parseInt(localStorage.getItem(iaKey))
    } else {
      return stats.iaKey
    }
  } catch (e) {
    return 0
  }
}

/**
 *This function increments the correct count every time a correct answer is chosen
 */
function incrementCorrect () {
  setCorrect(getCorrect() + 1)
}

/**
 *This function increments the incorrect count every time a wrong answer is chosen
 */
function incrementIncorrect () {
  setIncorrect(getIncorrect() + 1)
}

/**
 * @param {*} props
 * @returns text style
 */
function Stat (props) {
  return (
    <Text style={styles.text}>{props.stat}</Text>
  )
}

/**
 * This function displays the amount of correct and incorrect questions
 * @param {*} param0
 * @returns {number}
 */
function Stats () {
  useEffect(() => {
    // this is necessary for stats to update dynamically
  }, [useIsFocused()])

  return (
    <View style={styles.container}>
      <Stat stat = {'Number of Correct Answers: ' + getCorrect()} />
      <Stat stat = {'Number of Incorrect Answers: ' + getIncorrect()} />
    </View>
  )
}

export { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect, Stat }

export default Stats
