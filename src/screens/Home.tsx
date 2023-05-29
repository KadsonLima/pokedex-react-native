import { StyleSheet, TouchableOpacity, View  } from 'react-native';
import PokemonListCard from '../components/Pokemon/PokemonListCard';
import {Header} from '../components/Header/Header';
import { useDispatch } from 'react-redux';
import { updateValuePokemon } from '../redux/actions';
import { useEffect, useState } from 'react';
import useGetPokemons from '../hooks/api/useGetPokemons';
import { PokemonList } from '../components/Pokemon/ListPokemons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loading } from '../components/Loading';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [listPokemon, setPokemon] = useState<PokemonList | null>(null);
  const { pokemonsLoading, getPokemons  } = useGetPokemons();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if(listPokemon) return;
      try {
        const pokemonList = await getPokemons();
        setPokemon(pokemonList)
        dispatch(updateValuePokemon(pokemonList));
      } catch (error) {
  
      }
    }
    fetchData();
    
  }, []);

  useEffect(()=>{},[listPokemon])

  const nextPage = async () =>{
    if(!listPokemon) return;
    try {
      const pokemonList = await getPokemons(listPokemon?.next);
      setPokemon(pokemonList)
      dispatch(updateValuePokemon(pokemonList));
    } catch (error) {
      
    }
  }

  const previousPage = async () =>{
    if(!listPokemon || !listPokemon.previous) return;
    try {
      const pokemonList = await getPokemons(listPokemon?.previous);
      setPokemon(pokemonList)
      dispatch(updateValuePokemon(pokemonList));
    } catch (error) {
      
    }
  }

  if(!listPokemon) return <Loading/>


  return (

    <View style={styles.container}>
        <Header listPokemon={listPokemon} setPokemon={setPokemon}/>
      <View style={styles.list}>
        <PokemonListCard listPokemon={listPokemon} navigation={navigation}/>
        <TouchableOpacity
        style={{
          position: 'absolute',
          left: 3,
          bottom: 10,
        }}
        onPress={previousPage}
      >
        <Icon
          name="arrow-left"
          color="#b40c0c"
          size={30}
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 3,
          bottom: 10,
        }}
        onPress={nextPage}
      >
        <Icon
          name="arrow-right"
          color="#b40c0c"
          size={30}
        />
      </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor:'#dc0a2d',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  list:{
    flex:0.1,
    marginTop:160,
    maxHeight:'80%',
    backgroundColor:'white',
    overflow:'scroll',
    paddingVertical:20,
    paddingHorizontal:10,
    borderRadius:18,
    flexGrow: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 10,
    elevation: 5,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
