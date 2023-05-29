import useAsync from '../useAsync';

import * as pokedexApi from '../../services/getPokemons';

export default function useGetPokemons() {
  const {
    data: pokemons,
    loading: pokemonsLoading,
    error: pokemonsError,
    act: getPokemons,
  } = useAsync(pokedexApi.getPokemons, false);

  return {
    pokemons,
    pokemonsLoading,
    pokemonsError,
    getPokemons,
  };
}