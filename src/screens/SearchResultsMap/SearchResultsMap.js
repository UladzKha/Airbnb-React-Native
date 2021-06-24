import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = ({posts}) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const width = useWindowDimensions().width;
  const flatList = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length) {
      setSelectedPlaceId(() => viewableItems[0]?.item?.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatList || !posts.length) {
      return;
    }

    const index = posts.findIndex(place => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };

    setTimeout(() => map.current.animateToRegion(region), 500);
  }, [selectedPlaceId, posts]);

  return (
    <View width="100%" height="100%">
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {posts.map(place => (
          <CustomMarker
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            key={place.id}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 5}}>
        <FlatList
          ref={flatList}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
