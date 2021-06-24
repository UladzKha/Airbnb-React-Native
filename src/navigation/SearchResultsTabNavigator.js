import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';
import {useRoute} from '@react-navigation/native';

const SearchResultsTabNavigator = () => {
  const [posts, setPosts] = useState([]);

  const Tab = createMaterialTopTabNavigator();

  const route = useRoute();

  const {
    params: {
      guests,
      viewport: {southwest, northeast},
    },
  } = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [southwest.lat, northeast.lat],
                },
                longitude: {
                  between: [southwest.lng, northeast.lng],
                },
              },
            },
          }),
        );

        setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e, 'ERROR');
      }
    };

    fetchPosts();
  }, [guests, southwest, northeast]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name="list">{() => <SearchResults posts={posts} />}</Tab.Screen>

      <Tab.Screen name="map">{() => <SearchResultsMap posts={posts} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
