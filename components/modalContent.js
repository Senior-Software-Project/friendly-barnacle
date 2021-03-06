import React, { useState } from 'react'
import {
  Text,
  View,
  Button,
  NativeEventEmitter,
  NativeModules
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import ReactNativeAN from 'react-native-alarm-notification'

const { RNAlarmNotification } = NativeModules
const RNAlarmEmitter = new NativeEventEmitter(RNAlarmNotification)

RNAlarmEmitter.addListener(
  'OnNotificationDismissed', (data) => {
    const obj = JSON.parse(data)
    console.log(`notification id: ${obj.id} dismissed`)
  })

RNAlarmEmitter.addListener(
  'OnNotificationOpened', (data) => {
    const obj = JSON.parse(data)
    console.log(`app opened by notification: ${obj.id}`)
  }
)

const ModalContent = () => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Empty')

  const onChange = (_event, selectedDate) => {
    setShow(false)
    const currentDate = selectedDate || date
    setDate(currentDate)

    const tempDate = new Date(currentDate)
    const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    const fTime = tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds()
    setText(fDate + '\n' + fTime)

    const alarmNotifData = {
      title: 'Test Title',
      message: 'Test Message',
      channel: 'alarm',
      small_icon: 'ic_launcher',
      loop_sound: true,
      sound_name: 'sound.mp3',
      auto_cancel: false,
      data: { foo: 'bar' }

      // You can add any additional data that is important for the notification
      // It will be added to the PendingIntent along with the rest of the bundle.
      // e.g.
    }

    async function scheduleAlarm () {
      const alarm = await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: ReactNativeAN.parseDate(tempDate) })
      // console.log(alarms)
      console.log(alarm)
    }
    scheduleAlarm()

    console.log(fDate + ' (' + fTime + ') ')
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }
  return (
        <View>
          <Text>{text}</Text>
          <View style = {{ margin: 10 }}>
            <Button testID='Modal.date' title='Date' onPress={() => showMode('date')}/>
          </View>
          <View style = {{ margin: 10 }}>
            <Button testID='Modal.time' title='Time' onPress={() => showMode('time')}/>
          </View>
          {show && (
            <DateTimePicker
              testID='Picker.dateTime'
              value={date}
              mode={mode}
              is24Hour={false}
              display = 'default'
              onChange={onChange}
              />)}
        </View>

  )
}

export default ModalContent
