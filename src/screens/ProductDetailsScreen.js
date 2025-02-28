import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function ProductDetailsScreen({route}) {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  image: {width: '100%', height: 350, borderRadius: 8},
  name: {fontSize: 22, fontWeight: 'bold', marginTop: 10},
  price: {fontSize: 18, color: 'gray', marginVertical: 5},
  description: {fontSize: 16, color: '#333'},
});
