import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/Home'
import Puzzler from './views/Puzzler'
import Settings from './views/Settings'
import Splash from './views/Splash'
import Stats from './views/Stats'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Puzzler" component={Puzzler} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}