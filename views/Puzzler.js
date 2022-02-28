import React from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { styles } from './Styles'

// Puzzle Page
function Puzzler({ navigation }) {
  let [question, setQuestion] = React.useState('')
  let [incorrect, setIncorrect] = React.useState([])
  let [correct, setCorrect] = React.useState([])
  let [type, setType] = React.useState('')
  let [selected, setSelected] = React.useState('')

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
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
        setQuestion(decodeURI(response.results[0].question))
        setType(response.results[0].type)
        setIncorrect(shuffleArray(response.results[0].incorrect_answers.concat(response.results[0].correct_answer)))
        setCorrect(response.results[0].correct_answer)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  if (type === "multiple"){
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{question}</Text>
      <Text style={styles.text}>{type}</Text>
      <View style = {styles.row}>
        {incorrect.map((answer)=>(
          <TouchableOpacity style={styles.button}
          key={answer}
          onPress={() => setSelected(answer)}
          >
          <Text style={styles.text}>
            { decodeURI(answer)}
          </Text>
        </TouchableOpacity>
        ))}
        
      </View>
      <TouchableHighlight onPress={fetchApiCall}>
        <Text style={styles.text}>Press to get JSON</Text>
      </TouchableHighlight>
      <Text style={styles.text}>The Question</Text>
      <StatusBar style="auto" />
    </View>
  )
  }
  else {
    return (
      <View style={styles.container}>
      
      <Text style={styles.text}>{ decodeURI(question)}</Text>
      <Text style={styles.text}>{type}</Text>
      <View style = {styles.rowBol}>
        {incorrect.map((answer)=>(
          <TouchableOpacity style={styles.button} key={answer}
          >
          <Text style={styles.text}>
            { decodeURI(answer)}
          </Text>
        </TouchableOpacity>
        ))}
        
      </View>
      <TouchableHighlight onPress={fetchApiCall}>
        <Text style={styles.text}>Press to get JSON</Text>
      </TouchableHighlight>
      <Text style={styles.text}>The Question</Text>
      <StatusBar style="auto" />
    </View>
    )
  }
}

export default Puzzler
