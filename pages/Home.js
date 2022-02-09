import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text>The ? Alarm App</Text>
        <StatusBar style="auto" />
      </View>
  );
}

export default HomeScreen