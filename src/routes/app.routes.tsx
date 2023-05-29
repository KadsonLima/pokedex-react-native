import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import PokemonData from '../screens/Pokemon';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#080301',
            height: 40,
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Pokemon" component={PokemonData} />
      </Navigator>
    </NavigationContainer>
  );
}
