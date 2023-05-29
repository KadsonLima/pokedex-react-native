import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PokemonData } from '../../../interfaces/PokemonData';
import { typeColors } from '../../../utils/typeColors';
import InfoComponent from './InfoPokemon';

export const About = ({
  color,
  pokemonData,
}: {
  color: string;
  pokemonData: PokemonData;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.typeContainer}>
        {pokemonData.types.map(({ type }, index) => {
          return (
            <View
              key={index}
              style={[
                styles.typeBadge,
                { backgroundColor: typeColors[type.name] },
              ]}
            >
              <Text style={styles.typeText}>{type.name}</Text>
            </View>
          );
        })}
      </View>
      <Text style={[styles.title, { color: color }]}>About</Text>
      <InfoComponent data={pokemonData} />
      <View style={styles.columnContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 700,
    marginTop: 40,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },
  typeBadge: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  typeText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  columnContainer: {
    flexDirection: 'column',
  },
});
