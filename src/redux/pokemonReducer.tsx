import { ActionTypes, UpdateValuePokemonAction } from './actions';

const initialState = {
  value: null,
};

const pokemonReducer = (state = initialState, action: UpdateValuePokemonAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_VALUE_POKEMON:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
