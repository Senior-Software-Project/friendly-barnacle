import React, { useState, createContext, useContext } from 'react'
import { Text, StatusBar, View } from 'react-native'
import { styles } from './Styles'


// create a function and a button that will reload the values for display


const caKey = 'correctAnswers'
const iaKey = 'incorrectAnswers'
const stats = {
  caKey: getCorrect(),
  iaKey: getIncorrect()
}

function isWindowed() {
  try {
    return localStorage === window.localStorage
  } catch (e) {
    return false
  }
}

function setCorrect(correctAnswers) {
  stats.caKey = correctAnswers
  if (isWindowed()) {
    localStorage.setItem(caKey, correctAnswers)
  }
}

function setIncorrect(incorrectAnswers) {
  stats.iaKey = incorrectAnswers
  if (isWindowed()) {
    localStorage.setItem(iaKey, incorrectAnswers)
  }
}

function getCorrect() {
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

function getIncorrect() {
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

function incrementCorrect() {
  setCorrect(getCorrect() + 1)
}

function incrementIncorrect() {
  setIncorrect(getIncorrect() + 1)
}

const userStats = createContext(stats)

function Stats () {
  const renderStats = useContext(userStats)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of Correct Answers: {renderStats.caKey} </Text>
      <Text style={styles.text}>Number of Incorrect Answers: {renderStats.iaKey} </Text>
    </View>
  )
}

export { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect }

export default Stats
