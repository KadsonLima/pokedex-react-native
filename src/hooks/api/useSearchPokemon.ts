import useAsync from '../useAsync';

import * as pokedexApi from '../../services/searchPokemon';

export default function useSearchPokemon() {
  const {
    data: pokemon,
    loading: pokemonLoading,
    error: pokemonrror,
    act: getPokemon,
  } = useAsync(pokedexApi.searchPokemon, false);

  return {
    pokemon,
    pokemonLoading,
    pokemonrror,
    getPokemon,
  };
}