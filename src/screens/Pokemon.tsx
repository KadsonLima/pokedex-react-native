import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { PokemonData as TypesPokemonData } from '../interfaces/PokemonData';
import useSearchPokemon from '../hooks/api/useSearchPokemon';
import { typeColors } from '../utils/typeColors';
import { BaseStats } from '../components/Pokemon/PokemonData/BaseStats';
import { Loading } from '../components/Loading';
import { formatNumber } from '../utils/formatNumber';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export function PokemonData() {
  const route = useRoute();
  const { name } = route.params;
  const [color, setColor] = useState('gray');
  const pokemonDataRedux: TypesPokemonData = useSelector((state: any) => state.pokemonData.value);
  const [pokemonData, setPokemon] = useState<TypesPokemonData | undefined>(undefined);
  const { getPokemon } = useSearchPokemon();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    const fetchData = async () => {
      if (pokemonDataRedux) {
        setPokemon(pokemonDataRedux);
        const cor = typeColors[pokemonDataRedux?.types[0].type.name] || 'gray';
        setColor(cor);
      }

      try {
        const pokemonData = await getPokemon(name);
        setPokemon(pokemonData);
        const cor = typeColors[pokemonData?.types[0].type.name] || 'gray';
        setColor(cor);
      } catch (error) {}
    };
    fetchData();
  }, []);

  if (!pokemonData) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={[styles.mainBox, { backgroundColor: color }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Icon name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
          <Text style={styles.pokemonName}>{pokemonData.name}</Text>
          <Text style={styles.pokemonId}>{formatNumber(pokemonData.id)}</Text>
        </View>
        <Image
          source={{ uri: pokemonData.sprites.other['official-artwork'].front_default }}
          style={styles.pokemonImage}
        />
        <View style={styles.contentContainer}>
          <BaseStats pokemonData={pokemonData} color={color}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#b40c0c',
    flex: 1,
  },
  mainBox: {
    height: '100%',
    maxWidth: 700,
    width: '100%',
    padding: 10,
    position: 'relative',
  },
  pokeballImage: {
    position: 'absolute',
    right: '-10%',
    top: 20,
    zIndex: 0,
    width: '60%',
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    paddingLeft: 45,
    flexDirection:"row",
  },
  backButton: {
    position: 'absolute',
    left: 3,
  },
  pokemonName: {
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  pokemonId: {
    fontWeight: 'bold',
    color: 'white',
    zIndex: 1,
  },
  pokemonImage: {
    height: 200,
    width: 200,
    top:"23%",
    position: 'absolute',
    zIndex: 3,
    alignSelf: 'center',
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    height: '60%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    borderRadius: 10,
    shadowColor: '#222222',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.37,
    shadowRadius: 4,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default PokemonData;
