import React from 'react';
import { Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function Splash( { navigation } ) {
  return (
      <View style={styles.container}>
        <Text>Loading The ? Alarm App</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}>
          <Text>Return to Home</Text>
        </TouchableOpacity>
      </View>
  );
}

export default Splash