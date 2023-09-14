import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentScreen from './screens/ComponentScreen';
import HomeScreen from './screens/HomeScreeen';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Colors" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
