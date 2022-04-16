import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Modal,
  Pressable,
  FlatList,
  Button
} from 'react-native'
import { styles } from './Styles'
import { images, getImage } from '../components/images'
import ModalContent from '../components/modalContent'
import ReactNativeAN from 'react-native-alarm-notification'
import AlarmPreview from '../components/alarmPreview'

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
  const [data, setData] = useState([])
  const Item = ({ title, day, month, year, hour, minute, second }) => (

    <View>
      <Text style={{ backgroundColor: 'white' }}>[{title}- </Text>
      <Text style={{ backgroundColor: 'white' }}>alarm: {day}-{month}-{year} {hour}:{minute}:{second}] </Text>
      <Button
            title="Remove"
            color="red"
            onPress={() => {
              const id = parseInt(title, 10)

              ReactNativeAN.deleteAlarm(id)
              // onPress()
            }}
          />
    </View>
  )
  const renderItem = ({ item }) => (
    <Item title={item.alarmId} day={item.day} month ={item.month} year ={item.year} hour ={item.hour}
      minute ={item.minute} second ={item.second}
    />
  )
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
      <AlarmPreview title={'alarmtitle'} time={'Time!'}/>
      <TouchableOpacity
      onPress={onPress}>
      <Text style={{color:"white", backgroundColor:"blue"}}>
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
      <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1
        }}
      />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen
