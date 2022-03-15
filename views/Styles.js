import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D23',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  rowBol: {
    flexDirection: 'row'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#34344A',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center'
  },
  selected: {
    backgroundColor: 'green',
    borderWidth: 0
  },
  wrongAnswer: {
    backgroundColor: 'red',
    borderWidth: 0
  }
})

export { styles }
