import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
  Pressable

} from 'react-native'
import ModalContent from '../components/modalContent'
import ReactNativeAN from 'react-native-alarm-notification'
import RNRestart from 'react-native-restart'
import { styles } from './Styles'
import { images, getImage } from '../components/images'


/**
 * This function contains all of the data needed for the home screen
 * Contains all of the data for setting the alarm
 * Closes the alarm page once an alarm has been chosen
 * @returns image from the home screen
 */
const Home = () => {
  const onReloadPress = async () => {
    try {
      /* Source: https://aboutreact.com/react-native-restart-reset-current-screen/ */
      await RNRestart.Restart()
    } catch (e) {
      console.warn('Trigger splash failed: ' + e)
    }
  }

  function renderHeader () {
    return (
      <View style = {{ flexDirection: 'row', height: 50 }}>
        <TouchableOpacity
          style = {{
            width: 50,
            paddingLeft: 10 * 2,
            justifyContent: 'center'
          }}
          testID='App.reload'
          onPress={onReloadPress}
        >
          {/* alarmHeader is Alarm text icon. */}
          {getImage(images.alarmHeader, 45, 23)}
        </TouchableOpacity>
      </View>
    )
  }

  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaView style = {styles.container}>
      {renderHeader()}
      <View>
        <TouchableOpacity
                style = {styles.button}
                testID = 'Alarm.stop'
                onPress={ () => ReactNativeAN.stopAlarmSound()}
        >
          <Text>Stop Alarm</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType = 'slide'
        transparent={true}
        visible = {modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style = {styles.modalView}>
          <Text style = {styles.modalText}>Set Alarm!</Text>
          <ModalContent/>
          <View>
            <Pressable
              testID = 'Modal.close'
              onPress = {() => setModalVisible(false)}
            >
              {getImage(images.clear, 25, 25)}
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
          testID = 'Modal.open'
          onPress = {() => setModalVisible(true)}
        >
          {getImage(images.footer, 80, 80)}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Home
