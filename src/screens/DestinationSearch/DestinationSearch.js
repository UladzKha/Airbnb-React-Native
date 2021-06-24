import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import {useNavigation} from '@react-navigation/native';
import {PLACES_API} from '../../../envConfig';
import styles from './styles';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={inputRef}
        placeholder="where are you going?"
        onPress={(data, details = null) => {
          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        query={{
          key: PLACES_API,
          language: 'en',
          types: '(cities)',
        }}
        renderRow={item => <SuggestionRow item={item} />}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
        fetchDetails
      />
    </View>
  );
};
export default DestinationSearchScreen;
