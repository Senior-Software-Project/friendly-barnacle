import React from 'react';
import { Text, TouchableOpacity, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

const Home = () => {
  return(
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}
function HomeScreen( { navigation } ) {
  return (
      <View style={styles.container}>
        <Text>The ? Alarm App</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Splash')}>
          <Text>Splash</Text>
        </TouchableOpacity>

      </View>
  );
}

export default HomeScreen