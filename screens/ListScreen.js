import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 22 },
    { name: 'Friend #2', age: 34 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 28 },
    { name: 'Friend #6', age: 21 },
    { name: 'Friend #7', age: 20 },
  ];
  return (
    <FlatList
      //   horizontal //horizontal={true}
      keyExtractor={(item) => item.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={style.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
