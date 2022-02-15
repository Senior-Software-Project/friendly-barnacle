import React from 'react';
import { Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function HomeScreen( { navigation } ) {
  return (
      <View style={styles.container}>
        <Text>The ? Alarm App</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Puzzler')}>
          <Text>?</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Settings')}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Splash')}>
          <Text>Splash</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Stats')}>
          <Text>Stats</Text>
        </TouchableOpacity>
      </View>
  );
}

export default HomeScreen