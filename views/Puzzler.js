import React from 'react';
import { Text,TouchableOpacity, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

// Puzzle Page
function Puzzler( { navigation } ) {
  return (
      <View style={styles.container}>
        <Text style = {styles.text}>The Question</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}>
          <Text style = {styles.text}>Return to Home</Text>
        </TouchableOpacity>
      </View>
  );
}

export default Puzzler