import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image={require('./../assets/forest.jpg')} score="9" />
      <ImageDetail title="Beach" image={require('./../assets/beach.jpg')} score="7" />
      <ImageDetail title="Mountain" image={require('./../assets/mountain.jpg')} score="4" />
    </View>
  );
};

export default ImageScreen;
