import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
  Pressable,
  FlatList

} from 'react-native'
import PropTypes from 'prop-types'
import ModalContent from '../components/modalContent'
import ReactNativeAN from 'react-native-alarm-notification'
import AlarmPreview from '../components/alarmPreview'
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
  const [data, setData] = useState([])
  const Item = ({ alarmID, day, month, year, hour, minute, second }) => (
    <TouchableOpacity>
      <AlarmPreview title = {alarmID}
          hour={hour}
          minute = {minute}
          />
    </TouchableOpacity>

  )

  const renderItem = ({ item }) => (
    <Item alarmID={item.alarmId} day={item.day} month ={item.month} year ={item.year} hour ={item.hour}
      minute ={item.minute} second ={item.second}
    />
  )

  Item.propTypes = {
    alarmID: PropTypes.number,
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    hour: PropTypes.number,
    minute: PropTypes.number,
    second: PropTypes.number

  }
  async function onPress () {
    console.log(await ReactNativeAN.getScheduledAlarms())
    setData(await ReactNativeAN.getScheduledAlarms())
  }

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
      <SafeAreaView style={{ flex: 1, width: '95%', height: '100%', justifyContent: 'center' }}>
        <FlatList
          // the array to render
          data={data}
          // every element will be rendered
          renderItem={renderItem}
          // extract keys for every element in array
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexGrow: 0,
            justifyContent: 'center'
          }}
        />
      </SafeAreaView >
      <TouchableOpacity style={{ justifyContent: 'space-between', padding: 30 }}
      onPress={onPress}
      >
      <Text style={{ color: 'white', backgroundColor: 'blue' }}>
        Click me to show alarms
      </Text>
      </TouchableOpacity>
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
