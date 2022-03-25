import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import { styles } from './Styles'

// create a function and a button that will reload the values for display


const caKey = 'correctAnswers'
const iaKey = 'incorrectAnswers'
const fs = require('fs');
const stats = {
  caKey: 0,
  iaKey: 0
}

function writeStats() {
  const data = JSON.stringify(stats);
  fs.writeFile('stats.json', data, (err) => {
      if (err) {
          throw err
      }
  })
}

function readStats() {
  fs.readFile('stats.json', 'utf-8', (err, data) => {
      if (err) {
          throw err
      }
      return JSON.parse(data.toString());
  })
}

function setCorrect(correctAnswers) {
  stats.caKey = correctAnswers
}

function setIncorrect(incorrectAnswers) {
  stats.iaKey = incorrectAnswers
}

function getCorrect() {
  return stats.caKey
}

function getIncorrect() {
  return stats.iaKey
}

function incrementCorrect() {
  setCorrect(getCorrect() + 1)
}

function incrementIncorrect() {
  setIncorrect(getIncorrect() + 1)
}

function Stats () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of Correct Answers: {stats.caKey}</Text>
      <Text style={styles.text}>Number of Incorrect Answers: {stats.iaKey}</Text>
    </View>
  )
}

export { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect }

export default Stats
