import React, { useState } from 'react'
import { Text, StatusBar, View, Picker } from 'react-native'
import { styles } from './Styles'
import { decode } from 'html-entities'

const categories = {
  '': 'Any Category',
  '9': 'General Knowledge',
  '10': 'Books',
  '11': 'Film',
  '12': 'Music',
  '13': 'Musicals &amp; Theatres',
  '14': 'Television',
  '15': 'Video Games',
  '16': 'Board Games',
  '17': 'Science &amp; Nature',
  '18': 'Computers',
  '19': 'Mathematics',
  '20': 'Mythology',
  '21': 'Sports',
  '22': 'Geography',
  '23': 'History',
  '24': 'Politics',
  '25': 'Art',
  '26': 'Celebrities',
  '27': 'Animals',
  '28': 'Vehicles',
  '29': 'Comics',
  '30': 'Gadgets',
  '31': 'Japanese Anime &amp; Manga',
  '32': 'Cartoon &amp; Animations'
}
var categoryKey = ''

function getCategory(){
  return categoryKey
}

function setCategory(key){
  categoryKey = key
}

let category_options = []
for (let cat in categories) {
  category_options.push(<Picker.Item label={decode(categories[cat])} value={cat} key={cat} />)
}

function Settings () {
  const [catKey, setCategoryKey] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category:</Text>
      <Picker style={{height: 20, width: '80%', weight: 10, color: 'white', textAlign: 'center'}} selectedValue={catKey} onValueChange={(cat) => {setCategoryKey(cat);setCategory(cat)}}>
        {category_options}
      </Picker>
    </View>
  )
}

export { getCategory }

export default Settings
