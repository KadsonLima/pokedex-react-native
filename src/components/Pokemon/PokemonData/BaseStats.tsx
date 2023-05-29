import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from '../../ProgressBar/ProgressBar';
import { PokemonData } from '../../../interfaces/PokemonData';
import { About } from './About';

const stats = ['hp', 'atk', 'def', 'satk', 'sdef', 'spd'];

export const BaseStats = ({
  color,
  pokemonData,
}: {
  color: string;
  pokemonData: PokemonData;
}) => {
  return (
    <View style={styles.container}>
      <About color={color} pokemonData={pokemonData} />
      <Text style={[styles.title, { color: color }]}>Base Stats</Text>
      <View style={styles.statsContainer}>
        {pokemonData.stats.map((stat, index) => {
          return (
            <View key={index} style={styles.statRow}>
              <Text style={[styles.statName, { color: color }]}>{stats[index].toUpperCase()}</Text>
              <Text>{String(stat.base_stat).padStart(3, '0')}</Text>
              <ProgressBar color={color} currentValue={stat.base_stat} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent:'space-evenly',
    marginTop: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'column',
  },
  statRow: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  statName: {
    width: 45,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
