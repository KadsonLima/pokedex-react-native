import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonList } from "./ListPokemons";



export default function PokemonListCard({listPokemon, navigation}:{listPokemon:PokemonList, navigation:any}) {

  useEffect(()=>{},[listPokemon])

  if (!listPokemon?.results) return <Text>Loading..</Text>;

  

  const renderItem = ({ item }:{item:any}) => {

    const handleCardPress = () => {
      navigation.navigate('Pokemon', { name: item?.name });
    };
    
    
    return  <TouchableOpacity style={styles.flexContainer} onPress={handleCardPress}><PokemonCard pokemon={item} /></TouchableOpacity>;
  };

  return (
    <FlatList
      
      numColumns={3}
      data={listPokemon?.results}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}

    />
  );
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
})

