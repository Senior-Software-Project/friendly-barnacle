import React from 'react';
import { Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function HomeScreen( { navigation } ) {
  return (
      <View style={styles.container}>
        <Text style = {styles.text}>The ? Alarm App</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Puzzler')}>
          <Text style = {styles.text}>?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Settings')}>
          <Text style = {styles.text}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Splash')}>
          <Text style = {styles.text}>Splash</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Stats')}>
          <Text style = {styles.text}>Stats</Text>
        </TouchableOpacity>
      </View>
  );
}

export default HomeScreen