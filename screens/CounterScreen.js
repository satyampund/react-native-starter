import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
