import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableOpacity, StatusBar, View } from 'react-native'
import '@react-navigation/native'
import '@react-navigation/native-stack'
import { styles } from './Styles'

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The ? Alarm App</Text>
      <StatusBar style='auto' />
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text style={styles.text}>Splash</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
