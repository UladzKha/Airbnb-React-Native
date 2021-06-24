import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const IsSearchButtonAvailable = adults > 0 || children > 0 || infants > 0;

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>

            <Text style={{color: 'lightgrey'}}>Ages 13 or above</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(prev => (prev <= 0 ? 0 : prev - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>−</Text>
            </Pressable>

            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
              }}>
              {adults}
            </Text>

            <Pressable onPress={() => setAdults(prev => prev + 1)} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>

            <Text style={{color: 'lightgrey'}}>Ages 2−12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(prev => (prev <= 0 ? 0 : prev - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>−</Text>
            </Pressable>

            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
              }}>
              {children}
            </Text>

            <Pressable onPress={() => setChildren(prev => prev + 1)} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>

            <Text style={{color: 'lightgrey'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(prev => (prev <= 0 ? 0 : prev - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>−</Text>
            </Pressable>

            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 16,
              }}>
              {infants}
            </Text>
            <Pressable onPress={() => setInfants(prev => prev + 1)} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        disabled={!IsSearchButtonAvailable}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
              params: {
                screen: 'list',
                params: {
                  guests: adults + children,
                  viewport: route.params.viewport,
                },
              },
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: IsSearchButtonAvailable ? '#f15454' : '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, color: IsSearchButtonAvailable ? '#fff' : '#000'}}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
