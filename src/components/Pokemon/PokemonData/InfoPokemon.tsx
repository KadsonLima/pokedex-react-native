import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { PokemonData } from '../../../interfaces/PokemonData';

const InfoComponent = ({ data }: { data: PokemonData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoItem}>
        <View style={styles.infoItemContent}>
          <Feather name="key" size={12} style={styles.infoItemIcon} />
          <Text style={styles.infoItemText}>{(data.weight / 10).toFixed(1)}kg</Text>
        </View>
        <Text style={styles.infoItemLabel}>Weight</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.infoItem}>
        <View style={styles.infoItemContent}>
          <Feather name="check" size={12} style={styles.infoItemIcon} />
          <Text style={styles.infoItemText}>{(data.height / 10).toFixed(1)}m</Text>
        </View>
        <Text style={styles.infoItemLabel}>Height</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.infoItem}>
        {data.abilities.map(({ability}: any, index: number) => {
          
          return (
            <Text
              key={index}
              style={styles.abilityText}
            >
              {ability.name}
            </Text>
          );
        })}
        <Text style={styles.infoItemLabel}>Moves</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoItem: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoItemContent: {
    alignItems: 'center',
    flexDirection:'row',
  },
  infoItemIcon: {
    marginRight: 2,
  },
  infoItemText: {
    fontWeight: 'normal',
  },
  infoItemLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: 'black',
  },
  abilityText: {
    textTransform: 'capitalize',
    fontSize: 12,
    fontWeight: 'normal',
  },
});

export default InfoComponent;
