import React, { useState } from "react";
import { 
  Text, 
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  Pressable
} from 'react-native';

import {images} from '../components'
import { NavigationContainer } from '@react-navigation/native';

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

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

  const [modalVisible, setModalVisible] = useState(false);
  return(
    <SafeAreaView style = {styles.container}>
      {renderHeader()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
         
        <Text style={styles.modalText}>Set Alarm!</Text>
        <View style={styles.modalView}>
          <View>
            <Pressable
              onPress={() => setModalVisible(false)}
            >
              
              <Image
                source ={images.clear}
                resizeMode = "contain"
                style = {{
                  width: 25,
                  height: 25
                }}
              />
            
            </Pressable>    
          </View>
        </View>

      </Modal>
      <View style = {styles.modalToggle}>
        <Pressable
          style = {{
            width: 80,
            justifyContent: 'center'
          }}
          onPress = {() => setModalVisible(true)}        
        >
          <Image
            source={images.footer}
            resizeMode = "contain"
            style = {{
              width: 80,
              height: 80
            }}
          />
        </Pressable>
      </View>
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
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalToggle:{
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignSelf: "center",

  }
});

export default HomeScreen
