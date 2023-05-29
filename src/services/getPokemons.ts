import api from './api';

export async function getPokemons(_link:string| null) {
  let url = `/pokemon/`

  if(_link){
    url = _link.replace("https://pokeapi.co/api/v2", "")
  }

  const response = await api.get(url);

  return response.data;

}