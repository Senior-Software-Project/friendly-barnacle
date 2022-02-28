import React from 'react'
import { Text, TouchableOpacity, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { styles } from './Styles'

function Stats ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Statistics About You</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Stats
