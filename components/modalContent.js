import React, { useState } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import ReactNativeAN from 'react-native-alarm-notification'

const ModalContent = () => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Empty')

  const onChange = (event, selectedDate) => {
    setShow(false)
    const currentDate = selectedDate || date
    setDate(currentDate)

    const tempDate = new Date(currentDate)
    const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    const fTime = tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds()
    setText(fDate + '\n' + fTime)

    const alarmNotifData = {
      title: 'asdf resdfa asdf',
      message: 'asdf sdf asdsadf',
      channel: 'alarm',
      small_icon: 'ic_launcher',
      loop_sound: true,
      sound_name: 'sound.mp3',
      auto_cancel: false

      // You can add any additional data that is important for the notification
      // It will be added to the PendingIntent along with the rest of the bundle.
      // e.g.
    }

    async function method () {
      const alarm = await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: ReactNativeAN.parseDate(tempDate)})
      const alarms = await ReactNativeAN.getScheduledAlarms()

      console.log(alarm) // { id: 1 }
      console.log(alarms) // { id: 1 }
    }
    method()

    console.log(fDate + ' (' + fTime + ') ')
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }
  return (
        <View>

            <Text>{text}</Text>
            <View style = {{ margin: 20 }}>
                <Button title = 'DatePicker' onPress={() => showMode('date')}/>
            </View>
            <View style = {{ margin: 20 }}>
                <Button title = 'TimePicker' onPress={() => showMode('time')}/>
            </View>
            {show && (
                <DateTimePicker
                testID='dateTimePicker'
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
