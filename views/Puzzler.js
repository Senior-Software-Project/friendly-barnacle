import React from 'react'
import { Text, TouchableOpacity, StatusBar, View, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { styles } from './Styles'

// Puzzle Page
function Puzzler({ navigation }) {
  let [question, setQuestion] = React.useState('')
  let [incorrect, setIncorrect] = React.useState([])
  let [type, setType] = React.useState('')

  const fetchApiCall = () => {
    fetch('https://opentdb.com/api.php?amount=1', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results[0])
        setQuestion(response.results[0].question)
        setType(response.results[0].type)
        setIncorrect(response.results[0].incorrect_answers)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
      <Text style={styles.text}>{type}</Text>
      <Text style={styles.text}>{incorrect}</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <Text style={styles.text}>Press to get JSON</Text>
      </TouchableHighlight>
      <Text style={styles.text}>The Question</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Puzzler
