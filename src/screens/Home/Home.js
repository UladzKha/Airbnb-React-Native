import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Text style={styles.searchButtonText}>
          <Fontisto name="search" size={25} color="#f15454" />
          &nbsp;&nbsp;where are you going?
        </Text>
      </Pressable>
      <ImageBackground source={require('../../assets/images/wallpaper.jpg')} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable style={styles.button} onPress={() => console.warn('Explore Button clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
