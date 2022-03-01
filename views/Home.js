import React from 'react';
import { 
  Text, 
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList
} from 'react-native';

import {images} from '../components'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = () => {

  function renderHeader(){
    return(
      <View style = {{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style = {{
            width: 50,
            paddingLeft: 10 * 2,
            justifyContent: 'center'
          }}
        >
          <Image
            source={images.alarmHeader}
            resizeMode = "contain"
            style = {{
              width: 45,
              height: 23
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return(
    <SafeAreaView style = {styles.container}>
      {renderHeader()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D23',
  },
  shadow:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
});

export default HomeScreen