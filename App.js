import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import HomeScreen from './screens/HomeScreen';
import SumadoraScreen from './screens/SumadoraScreen';
import TraductorScreen from './screens/TraductorScreen';
import TablaMultiplicarScreen from './screens/TablaMultiplicarScreen';
import ExperienciaPersonalScreen from './screens/ExperienciaPersonalScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sumadora" component={SumadoraScreen} />
        <Stack.Screen name="Traductor" component={TraductorScreen} />
        <Stack.Screen name="TablaMultiplicar" component={TablaMultiplicarScreen} />
        <Stack.Screen name="ExperienciaPersonal" component={ExperienciaPersonalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Amín Jesús Báez Espinosa 2021-0929