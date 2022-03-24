import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import { styles } from './Styles'
import { iaKey, caKey } from './Puzzler'
// alert('iaKey', iaKey)
// alert('cakey', caKey)
// import { Button } from 'react-native'

// create a function and a button that will reload the values for display

async function Stats () {
  // eslint-disable-next-line no-return-assign
  const itemI = JSON.parse(await Storage.getItem({ key: `${iaKey}` }))
  const itemC = JSON.parse(await Storage.getItem({ key: `${caKey}` }))
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number of Correct Questions: {itemC}
      {/* localStorage.getItem(caKey) */}
      </Text>
      <Text style={styles.text}>Number of Incorrect Questions: {itemI}
      {/* localStorage.getItem(iaKey) */}
      </Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Stats
