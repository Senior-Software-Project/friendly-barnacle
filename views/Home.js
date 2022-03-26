import React, { useState } from 'react'
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  Pressable
} from 'react-native'
import { styles } from './Styles'
import { images } from '../components'
import ModalContent from './modalContent'

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

export default HomeScreen
