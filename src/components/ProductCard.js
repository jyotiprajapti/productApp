import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function ProductCard({
  product,
  navigation,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', {product})}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity onPress={onToggleFavorite}>
          <Image
            source={
              isFavorite
                ? require('../assets/heart-filled.png')
                : require('../assets/heart-outline.png')
            }
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  image: {width: '100%', height: 350, borderRadius: 8},
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  name: {fontSize: 16, fontWeight: 'bold'},
  price: {fontSize: 14, color: 'gray'},
  favoriteIcon: {width: 24, height: 24},
});
