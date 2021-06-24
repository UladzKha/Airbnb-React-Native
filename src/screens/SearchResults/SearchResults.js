import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../components/Post';

const SearchResultsScreen = ({posts}) => {
  return <FlatList data={posts} renderItem={({item}) => <Post post={item} key={item.id} />} />;
};

export default SearchResultsScreen;
