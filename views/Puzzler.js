import React from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'

const iaKey = 'incorrectAnswers'
const caKey = 'correctAnswers'

let correctAnswers = 0
let incorrectAnswers = 0
// let saveCorrect
// let saveIncorrect

// Puzzle Page
function Puzzler () {
  const [question, setQuestion] = React.useState('')
  const [incorrect, setIncorrect] = React.useState([])
  const [correct, setCorrect] = React.useState([])
  const [type, setType] = React.useState('')
  const [selected, setSelected] = React.useState('')

  // let questionsSeen

  // localStorage.setItem(caKey, correctAnswers)
  // localStorage.setItem(iaKey, incorrectAnswers)

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
  // eslint-disable-next-line no-debugger
  // debugger
  if (type === 'multiple') {
    return (
      <View style={styles.container}>
        {(() => {
          if (selected === correct) {
            correctAnswers += 1
            // alert('correct', correctAnswers)
            localStorage.setItem(caKey, correctAnswers)
            // return <Text style={styles.text}>Correct!!</Text>
            return <Text style={styles.text}>Number of correct answers : {correctAnswers}</Text>
          } else if (selected !== '' && selected !== correct) {
            incorrectAnswers += 1
            localStorage.setItem(iaKey, incorrectAnswers)
            // return <Text style={styles.text}>WRONG!!!!</Text>
            return <Text style={styles.text}>Number of incorrect answers : {incorrectAnswers}</Text>
          }
          // saveIncorrect = incorrectAnswers
          // saveCorrect = correctAnswers
          // alert('save inc', saveIncorrect)
          // alert('save corr', saveCorrect)
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
        {() => {
          if (selected === correct) {
            correctAnswers = correctAnswers++
            // alert('retCorr', correctAnswers)
            localStorage.setItem('correctAnswers', correctAnswers)
            // return <Text style={styles.text}>Correct!!</Text>
            return <Text style={styles.text}>Correct : {correctAnswers}</Text>
          } else if (selected !== '' && selected !== correct) {
            incorrectAnswers = incorrectAnswers++
            // alert('retInCorr', incorrectAnswers)
            localStorage.setItem('incorrectAnswers', incorrectAnswers)
            // return <Text style={styles.text}>WRONG!!!!</Text>
            return <Text style={styles.text}>WRONG : {incorrectAnswers}</Text>
          }
        }}

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

export { iaKey, caKey }

export default Puzzler
