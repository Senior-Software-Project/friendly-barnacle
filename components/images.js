import React from 'react'
import { Image } from 'react-native'

export const images = {
  actionBar: require('../assets/images/Action_Bar.png'),
  accounts: require('../assets/images/account.png'),
  adaptiveIcon: require('../assets/images/adaptive-icon.png'),
  alarm1: require('../assets/images/Alarm-1.png'),
  alarm: require('../assets/images/Alarm.png'),
  appIcon: require('../assets/images/appicon.png'),
  clockFaceHour: require('../assets/images/Clock_face_hour.png'),
  favIcon: require('../assets/images/favicon.png'),
  footer: require('../assets/images/Footer.png'),
  group2: require('../assets/images/Group2.png'),
  group3: require('../assets/images/Group3.png'),
  group4: require('../assets/images/Group4.png'),
  keyIcon: require('../assets/images/KeyIcon.png'),
  more: require('../assets/images/More.png'),
  nY: require('../assets/images/NY.png'),
  periodSelector: require('../assets/images/PeriodSelector.png'),
  puzzle: require('../assets/images/Puzzle.png'),
  rectangle1: require('../assets/images/Rectangle1.png'),
  rectangle8: require('../assets/images/Rectangle8.png'),
  rectangle16: require('../assets/images/Rectangle16.png'),
  rectangle18: require('../assets/images/Rectangle18.png'),
  rectangle20: require('../assets/images/Rectangle20.png'),
  secondaryAction: require('../assets/images/secondaryAction.png'),
  seperator: require('../assets/images/Separator.png'),
  singleLineItem: require('../assets/images/SingleLineItem.png'),
  splash: require('../assets/splash.png'),
  timeSelector: require('../assets/images/TimeSelector.png'),
  settings: require('../assets/images/settings.png'),
  stats: require('../assets/images/stats.png'),
  alarmHeader: require('../assets/images/alarmHeader.png'),
  clear: require('../assets/images/clear.png')
}

// Write images function that returns a resized image.
export function getImage (image, width, height, customStyle, resizeMode = 'contain') {
  return (
    <Image
      source = {image}
      resizeMode = {resizeMode}
      style = {{
        ...{
          width: width,
          height: height
        },
        ...customStyle
      }}
    />
  )
}
