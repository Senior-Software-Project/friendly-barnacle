import React from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'

// Puzzle Page
function Puzzler () {
  const [question, setQuestion] = React.useState('')
  const [incorrect, setIncorrect] = React.useState([])
  const [correct, setCorrect] = React.useState([])
  const [type, setType] = React.useState('')
  const [selected, setSelected] = React.useState('')

  // let questionsSeen
  let correctAnswers
  let incorrectAnswers
  // const questionSeen_KEY = '@save'
  // const correctAnswers_KEY = '@save2'
  // const incorrectAnswers_KEY = '@save3'

  /** const saveData = async () => {
    try {
      await AsyncStorage.setItem(questionSeen_KEY, questionsSeen)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  } */

  function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const fetchApiCall = () => {
    fetch('https://opentdb.com/api.php?amount=1', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results[0])
        setQuestion(decode(response.results[0].question))
        setType(response.results[0].type)
        setIncorrect(shuffleArray(decode(response.results[0].incorrect_answers.concat(response.results[0].correct_answer))))
        setCorrect(decode(response.results[0].correct_answer))
        setSelected('')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if (type === 'multiple') {
    return (
      <View style={styles.container}>
        {(() => {
          if (selected === correct) {
            correctAnswers = correctAnswers++
            localStorage.setItem('correctAnswers', correctAnswers)
            // await AsyncStorage.setItem(correctAnswers_KEY, correctAnswers)
            return <Text style={styles.text}>Correct!!</Text>
          } else if (selected !== '' && selected !== correct) {
            incorrectAnswers = incorrectAnswers++
            localStorage.setItem('incorrectAnswers', incorrectAnswers)
            // await AsyncStorage.setItem(incorrectAnswers_KEY, incorrectAnswers)
            return <Text style={styles.text}>WRONG!!!!</Text>
          }
        })()}
        <Text style={styles.text}>{question}</Text>
        <Text style={styles.text}>{type}</Text>
        <View style={styles.row}>
          {incorrect.map((answer) => (
            <TouchableOpacity
              style={[
                styles.button,
                selected === correct && selected === answer && styles.selected,
                selected !== correct && selected === answer && styles.wrongAnswer
              ]}
              key={answer}
              onPress={() => setSelected(answer)}
            >
              <Text style={styles.text}>{decodeURI(answer)}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableHighlight onPress={fetchApiCall}>
          <Text style={styles.text}>Press to get Question</Text>
        </TouchableHighlight>
        <Text style={styles.text}>The Question</Text>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {(() => {
          if (selected === correct) {
            return <Text style={styles.text}>Correct!!</Text>
          } else if (selected !== '' && selected !== correct) {
            return <Text style={styles.text}>WRONG!!!!</Text>
          }
        })()}

        <Text style={styles.text}>{decodeURI(question)}</Text>
        <Text style={styles.text}>{type}</Text>
        <View style={styles.rowBol}>
          {incorrect.map((answer) => (
            <TouchableOpacity
              style={[
                styles.button,
                selected === correct && selected === answer && styles.selected,
                selected !== correct && selected === answer && styles.wrongAnswer
              ]}
              key={answer}
              onPress={() => setSelected(answer)}
            >
              <Text style={styles.text}>{decodeURI(answer)}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableHighlight onPress={fetchApiCall}>
          <Text style={styles.text}>Press to get Question</Text>
        </TouchableHighlight>
        <Text style={styles.text}>The Question</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

export default Puzzler
