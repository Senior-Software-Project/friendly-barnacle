import React from 'react'
import { Text, TouchableOpacity, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { styles } from './Styles'

function Settings ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Settings
