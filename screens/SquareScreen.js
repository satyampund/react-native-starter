import React, { useState } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const colorIncrement = 15;

  const setColor = (color, change) => {
    //color = red, blue, green
    //change = +15, -15
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;

      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', colorIncrement)}
        onDecrease={() => setColor('red', -1 * colorIncrement)}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', colorIncrement)}
        onDecrease={() => setColor('blue', -1 * colorIncrement)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', colorIncrement)}
        onDecrease={() => setColor('green', -1 * colorIncrement)}
      />

      <View
        style={{ width: 200, height: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  );
};

export default SquareScreen;
