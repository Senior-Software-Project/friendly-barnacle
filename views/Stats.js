import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './Styles'
import PropTypes from 'prop-types'

// create a function and a button that will reload the values for display

const caKey = 'correctAnswers'
const iaKey = 'incorrectAnswers'
const stats = {
  caKey: getCorrect(),
  iaKey: getIncorrect()
}

function isWindowed () {
  try {
    return localStorage === window.localStorage
  } catch (e) {
    return false
  }
}

function setCorrect (correctAnswers) {
  stats.caKey = correctAnswers
  if (isWindowed()) {
    localStorage.setItem(caKey, correctAnswers)
  }
}

function setIncorrect (incorrectAnswers) {
  stats.iaKey = incorrectAnswers
  if (isWindowed()) {
    localStorage.setItem(iaKey, incorrectAnswers)
  }
}

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

function incrementCorrect () {
  setCorrect(getCorrect() + 1)
}

function incrementIncorrect () {
  setIncorrect(getIncorrect() + 1)
}

Stat.propTypes = {
  stat: PropTypes.string
}

function Stat (props) {
  return (
    <Text style={styles.text}>{props.stat}</Text>
  )
}

function Stats () {
  return (
    <View style={styles.container}>
      <Stat stat = {'Number of Correct Answers: ' + getCorrect()} />
      <Stat stat = {'Number of Incorrect Answers: ' + getIncorrect()} />
    </View>
  )
}

export { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect }

export default Stats
