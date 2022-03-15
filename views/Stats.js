import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import { styles } from './Styles'

function Stats () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Statistics About You</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Stats
