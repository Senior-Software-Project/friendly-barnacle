import React from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'
import { getCorrect, getIncorrect, incrementCorrect, incrementIncorrect } from './Stats'

// Puzzle Page
function Puzzler () {
  const [question, setQuestion] = React.useState('')
  const [incorrect, setIncorrect] = React.useState([])
  const [correct, setCorrect] = React.useState([])
  const [type, setType] = React.useState('')
  const [selected, setSelected] = React.useState('')

  function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const fetchApiCall = async () => {
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
        { () => {
          if (selected === correct) {
            return (
              incrementCorrect(),
              <Text style={styles.text}>Number of correct answers : {getCorrect()}</Text>
            )
          } else if (selected !== '' && selected !== correct) {
            return (
              incrementIncorrect(),
              <Text style={styles.text}>Number of incorrect answers : {getIncorrect()}</Text>
            )
          }
        }
      }
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
        { () => {
          if (selected === correct) {
            return (
              incrementCorrect(),
              <Text style={styles.text}>Correct : {getCorrect()}</Text>
            )

          } else if (selected !== '' && selected !== correct) {
            return (
              incrementIncorrect(),
              <Text style={styles.text}>WRONG : {getIncorrect()}</Text>
            )
          }
        }
      }

        <Text style={styles.text}>{decodeURI(question)}</Text>
        <Text style={styles.text}>{type}</Text>
        <View style={styles.rowBol}>
        { incorrect.map((answer) => (
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
          ))
        }
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
