import React, { useState, useEffect, ReactDOM } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { PokemonList } from '../Pokemon/ListPokemons';
import useSearchPokemon from '../../hooks/api/useSearchPokemon';
import Icon from "react-native-vector-icons/AntDesign"
import { PokemonData } from '../../interfaces/PokemonData';

export const SearchBar = ({ listPokemon, setPokemon }:{listPokemon:PokemonList, setPokemon:Function}) => {
  const pokemonRedux = useSelector((state:any) => state.pokemon.value);
  const { getPokemon } = useSearchPokemon();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const pokemon = await getPokemon(searchTerm);
      const newPokemon = {
        ...listPokemon,
        results: [{ url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/` }],
      };
      setPokemon(newPokemon);
    } catch (error) {
      
    }
  };

  const handleKeyDown = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const pokemonsFilter = pokemonRedux?.results.filter((pokemon:PokemonData) => {
      if (
        pokemon.name.startsWith(searchTerm.toLowerCase()) ||
        pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').slice(0, -1) === searchTerm
      )
        return pokemon;
    });
    pokemonRedux && setPokemon({ ...pokemonRedux, results: pokemonsFilter });
  }, [searchTerm]);

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const handleIconClick = () => {
    handleSearch();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleIconClick}>
        <Icon  name="search1" size={30} color="#900"/>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={searchTerm}
        placeholder="ID ou nome do Pokémon..."
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"90%",
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  iconContainer: {
    padding: 10,
  },
});


