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

function setCorrect(correctAnswers) {
  stats.caKey = correctAnswers
  localStorage.setItem(caKey, correctAnswers)
}

function setIncorrect(incorrectAnswers) {
  stats.iaKey = incorrectAnswers
  localStorage.setItem(iaKey, incorrectAnswers)
}

function getCorrect() {
  try {
    return parseInt(localStorage.getItem(caKey))
  } catch (e) {
    return 0
  }
}

function getIncorrect() {
  try {
    return parseInt(localStorage.getItem(iaKey))
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
