import { StyleSheet } from 'react-native'
/**
 * Creates all of the different settings that will be used on the individual mobile pages
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: '#1D1D23',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 20
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
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 140,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalToggle: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },
  picker: {
    height: 20,
    width: '80%',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center'
  }
})

export { styles }
