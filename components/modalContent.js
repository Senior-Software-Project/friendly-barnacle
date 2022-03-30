import React, { useState } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import Notification, { schedulePushNotification } from './notification.js'

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
    const fTime = 'Hours:' + tempDate.getHours() + ' | Miniutes:' + tempDate.getMinutes()
    setText(fDate + '\n' + fTime)
    schedulePushNotification()
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
