import React from "react";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { SkeletonPokemon } from "../Skeleton/SkeletonPokemon";
import { PokemonData } from "../../interfaces/PokemonData";
import { formatNumber } from "../../utils/formatNumber";
import { Pokemon as PokemonInterface } from "./ListPokemons";
import useSearchPokemon from "../../hooks/api/useSearchPokemon";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonInterface}) => {
  const { pokemonLoading, getPokemon } = useSearchPokemon();
  const [pokemonData, setPokemon] = useState<PokemonData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPokemon = await getPokemon(pokemon.url);
        setPokemon(dataPokemon);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pokemon]);



  if (pokemonLoading) return <SkeletonPokemon />;

  return (
    <>
      <Text style={styles.idText}>
        {pokemonData && formatNumber(pokemonData.id)}
      </Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData?.id}.png`,
        }}
        style={styles.image}
      />
      <Text style={styles.nameText}>
        {pokemonData?.name}
      </Text>
      <View style={{ position: "absolute", backgroundColor: "#0e0c0c13", left: 0, bottom: 0, width: "100%", height: "40%" }} />
    </>
  )
}

const { width } = Dimensions.get('window');
const imageSize = width / 4;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    width: imageSize,
    height: imageSize,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0e0c0c36',
    margin: 5,
    position: "relative",
  },
  idText: {
    fontSize: imageSize * 0.07,
    textAlign: 'right',
    marginRight: 5
  },
  image: {
    position: "absolute",
    width: imageSize * 0.8,
    height: imageSize * 0.8,
    resizeMode: 'contain',
    alignSelf: 'center',
    bottom: '10%',
    zIndex: 2,
  },
  nameText: {
    fontSize: imageSize * 0.1,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
