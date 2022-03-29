import React, { useState } from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'
import { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from './Stats'

export function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export async function fetchTrivia () {
  return await fetch('https://opentdb.com/api.php?amount=1', {
    method: 'GET'
  }).then((response) => response.json())
    .then((response) => {
      // console.log('Fetch received: \n' + response.results[0])
      return response.results[0]
    })
    .catch((error) => {
      console.log(error)
      return {
        category: 'General Knowledge',
        type: 'multiple',
        difficulty: 'medium',
        question: 'Earl Grey tea is black tea flavoured with what?',
        correct_answer: 'Bergamot oil',
        incorrect_answers: ['Lavender', 'Vanilla', 'Honey']
      }
    })
}

// Puzzle Page
function Puzzler () {
  const [question, setQuestion] = useState('')
  const [incorrect, setIncorrect] = useState([])
  const [correct, setCorrect] = useState([])
  const [type, setType] = useState('')
  const [selected, setSelected] = useState('')
  const [isAnswered, answeredCorrectly] = useState(false)

  const getTrivia = async () => {
    const result = await fetchTrivia()
    console.log('Result retrieved: \n' + result)
    setQuestion(decode(result.question))
    setType(result.type)
    setIncorrect(shuffleArray(decode(result.incorrect_answers.concat(result.correct_answer))))
    setCorrect(decode(result.correct_answer))
    setSelected('')
    answeredCorrectly(false)
  }

  if (!isAnswered) {
    if (selected === correct) {
      answeredCorrectly(true)
      incrementCorrect()
    } else if (selected !== '' && selected !== correct) {
      incrementIncorrect()
    }
  }

  const isMultiple = type === 'multiple'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of correct answers : {getCorrect()}</Text>
      <Text style={styles.text}>Number of incorrect answers : {getIncorrect()}</Text>
      <Text style={styles.text}>{decodeURI(question)}</Text>
      <Text style={styles.text}>{type}</Text>
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
