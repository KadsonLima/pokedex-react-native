import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PokemonList } from '../Pokemon/ListPokemons';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

const FilterButton = ({ listPokemon, setPokemon }:{listPokemon:PokemonList, setPokemon:Function}) => {
  const [selectedFilter, setSelectedFilter] = useState('#');
  const pokemonRedux = useSelector((state:any) => state.pokemon.value);
  const options = [
    { value: '#', label: '#' },
    { value: 'A', label: 'A' },
  ];

  useEffect(() => {
    if (!listPokemon) return;

    if (selectedFilter === '#' && pokemonRedux) {
      const listSort = listPokemon.results.sort((a, b) => {
        const idA = parseInt(a.url.split('/')[6]);
        const idB = parseInt(b.url.split('/')[6]);
        return idA - idB;
      });
      setPokemon({ ...listPokemon, results: listSort });
    } else {
      const listSort = listPokemon.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPokemon({ ...listPokemon, results: listSort });
    }
  }, [selectedFilter, pokemonRedux]);

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedFilter}
        onValueChange={(value) => setSelectedFilter(value)}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 50,
    backgroundColor: 'gray.500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray.300',
    paddingRight: 24,
    _focus: {
      outline: 'none',
      borderColor: 'blue.400',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.3)',
    },
    WebkitAppearance: 'none',
  },
});

export default FilterButton;
