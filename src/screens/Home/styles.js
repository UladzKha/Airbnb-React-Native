import {StyleSheet, Dimensions} from 'react-native';

const margin25 = 25;
const bold = 'bold';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: bold,
    color: '#ffffff',
    width: '70%',
    marginLeft: margin25,
  },
  button: {
    backgroundColor: '#ffffff',
    width: 200,
    marginLeft: margin25,
    marginTop: margin25,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: bold,
  },
  searchButton: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width - 20,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
    zIndex: 100,
    elevation: Platform.OS === 'android' ? 50 : 0,
    marginHorizontal: 10,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: bold,
  },
});

export default styles;
