import React, { useState } from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'
import { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from './Stats'
import ReactNativeAN from 'react-native-alarm-notification'
const numCorrect = 5

export function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Puzzle Page
function Puzzler () {
  const [question, setQuestion] = useState('')
  const [incorrect, setIncorrect] = useState([])
  const [correct, setCorrect] = useState([])
  const [type, setType] = useState('')
  const [selected, setSelected] = useState('')
  const [isAnswered, answeredCorrectly] = useState(false)

  const fetchApiCall = () => {
    fetch('https://opentdb.com/api.php?amount=1', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results[0])
        setQuestion(decode(response.results[0].question))
        setType(response.results[0].type)
        setIncorrect(shuffleArray(decode(response.results[0].incorrect_answers.concat(response.results[0].correct_answer))))
        setCorrect(decode(response.results[0].correct_answer))
        setSelected('')
        answeredCorrectly(false)
      })
      .catch((err) => {
        console.log(err)
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
      <Text style={styles.text}>Number of correct answers : {getCorrect()}</Text>
      <Text style={styles.text}>Number of incorrect answers : {getIncorrect()}</Text>
      <Text style={styles.text}>{decodeURI(question)}</Text>
      <Text style={styles.text}>{type}</Text>
      <View style={isMultiple ? styles.row : styles.rowBol}>
        {incorrect.map((answer) => (
          <TouchableOpacity
            style={[
              styles.button,
              selected === correct && selected === answer && styles.selected,
              selected !== correct && selected === answer && styles.wrongAnswer
            ]}
            key={answer}
            testID = 'Question.answer'
            onPress = {() => setSelected(answer)}
          >
            <Text style = {styles.text}>{decodeURI(answer)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableHighlight testID = 'Question.get' onPress={fetchApiCall}>
        <Text style = {styles.text}>Press to get Question</Text>
      </TouchableHighlight>
      <Text style = {styles.text}>The Question</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Puzzler
