import React from 'react';
import { Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function Settings( { navigation } ) {
  
  return (
      <View style={styles.container}>
        <Text style = {styles.text}>Profile Info</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Puzzler')}>
          <Text style = {styles.text}>Trivia Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Settings')}>
          <Text style = {styles.text}>Alarm Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}>
          <Text style = {styles.bottomContainer}>Return to Home</Text>
        </TouchableOpacity>
      </View>
  );
}

export default Settings