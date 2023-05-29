import { Pokemon } from "./PokemonCard";


export interface Pokemon {
  id: string;
  name: string;
  url: string;
}

export interface PokemonList{
  count:number,
  next:string,
  previous:string,
  results:Pokemon[],
}

export const ListPokemons = ({pokemons}:{pokemons:PokemonList}) => {

  const PokemonList = pokemons.results.map((pokemon: Pokemon) => {
    return <Pokemon key={pokemon.name} pokemon={pokemon} />;
  });

  return <>{PokemonList}</>;
};
