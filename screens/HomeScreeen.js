import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>This is Home Screen Page</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Component')}>
        <Text style={styles.buttonText}>Component</Text>
      </TouchableOpacity>
      <Button title="List" onPress={() => navigation.navigate('List')} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Images')}>
        <Text style={styles.buttonText}>Images</Text>
      </TouchableOpacity>
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Colors')}>
        <Text style={styles.buttonText}>Colors</Text>
      </TouchableOpacity>
      <Button title="Square" onPress={() => navigation.navigate('Square')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: 'black',
    margin: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
