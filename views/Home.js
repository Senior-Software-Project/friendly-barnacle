import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
  Pressable
} from 'react-native'
import { styles } from './Styles'
import { images, getImage } from '../components/images'
import ModalContent from '../components/modalContent'
import ReactNativeAN from 'react-native-alarm-notification'

const HomeScreen = () => {
  function renderHeader () {
    return (
      <View style = {{ flexDirection: 'row', height: 50 }}>
        <TouchableOpacity
          style = {{
            width: 50,
            paddingLeft: 10 * 2,
            justifyContent: 'center'
          }}
        >
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
      <AlarmPreview/>
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

export default HomeScreen
