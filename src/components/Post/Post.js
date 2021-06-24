import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Post = ({post}) => {
  const {bed, bedroom, image, oldPrice, newPrice, totalPrice, type, title} = post;

  const days = 7;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {type}. {title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.newPrice}>&nbsp;${newPrice}&nbsp;</Text>/ night
      </Text>

      <Text style={styles.totalPrice}>${newPrice * days} Total</Text>
    </Pressable>
  );
};

export default Post;
