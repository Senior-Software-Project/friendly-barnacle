import React, { useState } from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'
import { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from './Stats'
import { getCategory, getDifficulty } from './Settings'
import ReactNativeAN from 'react-native-alarm-notification'
let newCount = 0
const numCorrect = 5

export function shuffleArray (array) {
  /* SEE:
    https://www.npmjs.com/package/react-native-simple-crypto
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
    https://developer.mozilla.org/en-US/docs/Web/API/crypto_property
  */
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export async function fetchTrivia () {
  // console.log('https://opentdb.com/api.php?amount=1&category=' + getCategory() + '&difficulty=' + getDifficulty())
  return fetch('https://opentdb.com/api.php?amount=1&category=' + getCategory() + '&difficulty=' + getDifficulty(), {
    method: 'GET'
  }).then((response) => response.json())
    .then((response) => {
      // console.log('Fetch received: \n' + response.results[0])
      return response.results[0]
    })
    .catch((error) => {
      console.warn('The trivia fetch call was rejected: ' + error.message)
      throw error
    })
}

// Puzzle Page
function Puzzler () {
  const [question, setQuestion] = useState('')
  const [incorrect, setIncorrect] = useState([])
  const [correct, setCorrect] = useState([])
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [selected, setSelected] = useState('')
  const [isAnswered, answeredCorrectly] = useState(false)

  const getTrivia = async () => {
    await fetchTrivia().then((result) => {
      console.log('Result retrieved: \n' + result)
      setQuestion(decode(result.question))
      setType(result.type)
      setCategory(result.category)
      setDifficulty(result.difficulty)
      setIncorrect(shuffleArray(decode(result.incorrect_answers.concat(result.correct_answer))))
      setCorrect(decode(result.correct_answer))
      setSelected('')
      answeredCorrectly(false)
    }).catch((error) => {
      alert(error.message)
      setQuestion('Earl Grey tea is black tea flavoured with what?')
      setType('multiple')
      setCategory('General Knowledge')
      setDifficulty('hard')
      setIncorrect(shuffleArray(['Lavender', 'Vanilla', 'Honey'].concat('Bergamot oil')))
      setCorrect('Bergamot oil')
      setSelected('')
      answeredCorrectly(false)
    })
  }

  if (!isAnswered) {
    if (selected === correct) {
      answeredCorrectly(true)
      incrementCorrect()
      newCount++
      console.log(newCount)
    } else if (selected !== '' && selected !== correct) {
      incrementIncorrect()
    }
  }

  if (newCount >= numCorrect) {
    ReactNativeAN.stopAlarmSound()
    newCount = 0
  }

  const isMultiple = type === 'multiple'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats:</Text>
      <View style={{ selfAlign: 'left' }}>
        <Text style={styles.text}>Number of correct answers: {getCorrect()}</Text>
        <Text style={styles.text}>Number of incorrect answers: {getIncorrect()}</Text>
      </View>
      <Text style={styles.title}>Question:</Text>
      <View style={{ selfAlign: 'left' }}>
        <Text style={styles.text}>Category: {category}</Text>
        <Text style={styles.text}>Difficulty: {difficulty}</Text>
        <Text style={styles.text}>Type: {type}</Text>
        <Text style={styles.text}>{decodeURI(question)}</Text>
      </View>
      <View testID = 'View.answers' style={isMultiple ? styles.row : styles.rowBol}>
        {incorrect.map((answer) => (
          <TouchableOpacity
            style={[
              styles.button,
              selected === correct && selected === answer && styles.selected,
              selected !== correct && selected === answer && styles.wrongAnswer
            ]}
            testID = 'Answers'
            key={answer}
            onPress = {() => setSelected(answer)}
          >
            <Text style = {styles.text}>{decodeURI(answer)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableHighlight testID = 'Question' onPress={getTrivia}>
        <Text style = {styles.text}>Press to get Question</Text>
      </TouchableHighlight>
      <Text style = {styles.text}>The Question</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Puzzler
