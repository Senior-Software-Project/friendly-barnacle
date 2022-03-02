import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import { styles } from './Styles'

function Settings () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Settings
