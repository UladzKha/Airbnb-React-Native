import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

const Post = ({post}) => {
  const {bed, bedroom, image, oldPrice, newPrice, totalPrice, type, title, longDescription} = post;
  return (
    <ScrollView>
      <View style={styles.container}>
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

        <Text style={styles.totalPrice}>${totalPrice} Total</Text>

        <Text style={styles.longDescription}>{longDescription}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
