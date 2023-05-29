import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SearchBar } from "./SearchBar";
import FilterButton from "./FilterButton";
import { PokemonList } from "../Pokemon/ListPokemons";

export const Header = ({ listPokemon, setPokemon }:{listPokemon:PokemonList, setPokemon:Function}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.titleContainer}>
            <Image
              source={require('../../../assets/Pokeball.png')}
              style={styles.image}
            />
          <Text style={styles.titleText}>Pokédex</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <SearchBar listPokemon={listPokemon} setPokemon={setPokemon} />
        <FilterButton listPokemon={listPokemon} setPokemon={setPokemon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: "#dc0a2d",
    paddingTop: 20,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 10,
    flexDirection: "column",
    alignItems: "baseline",
  },
  titleContainer: {
    alignItems:"center",
    width:"100%",
    height:50,
    fontSize: 16,
    alignContent:"space-around",
    flexDirection: "row",
    
  },
  image: {
    width: 40,
    height: 40,

  },
  titleText: {
    fontSize: 30,
    marginLeft: 6,
    fontWeight:"800",
    color:"white"
  },
  buttonsContainer: {
    flexDirection: "row",
    flex:1,
  },
});
