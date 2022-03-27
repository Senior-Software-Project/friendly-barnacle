import React, { useState } from 'react'
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Modal,
  Pressable
} from 'react-native'
import { styles } from './Styles'
import { images, getImage } from '../components/images'
import ModalContent from '../components/modalContent'

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Set Alarm!</Text>
          <ModalContent/>
          <View>
            <Pressable
              onPress={() => setModalVisible(false)}
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
          onPress = {() => setModalVisible(true)}
        >
          {getImage(images.footer, 80, 80)}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
