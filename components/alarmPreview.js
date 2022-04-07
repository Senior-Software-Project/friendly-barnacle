import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const AlarmPreview = () => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.alarmTitle}>alarm title</Text>
        <Text style={styles.itemText}>Time!</Text>
        <View style={styles.container}>
          <Switch
            trackColor={{ false: "#767577", true: "#5A57F7" }}
            
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#34344A',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 177,
    width: 169,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    fontSize: 36,
    color: '#FFF',

  },
  alarmTitle: {
    fontSize: 14,
    color: '#FFF',
  },
  swithes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

});

export default AlarmPreview;