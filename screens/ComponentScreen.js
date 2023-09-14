import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = ({ navigation }) => {
  return <Text style={styles.textStyle}>This is Component</Text>;
};

export default ComponentScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: 'blue',
  },
});
