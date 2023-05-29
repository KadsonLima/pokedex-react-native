import api from './api';

export async function searchPokemon(pokemon: string | number) {
  let url: string;

  if (typeof pokemon === 'string' && (pokemon.startsWith('https://') || pokemon.startsWith('http://'))) {
    url = pokemon;
  } else {
    url = `/pokemon/${pokemon}`;
  }

  const response = await api.get(url);
  return response.data;
}