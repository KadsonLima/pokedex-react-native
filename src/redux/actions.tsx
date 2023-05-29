export const ActionTypes = {
  UPDATE_VALUE_POKEMON: 'UPDATE_VALUE_POKEMON',
  UPDATE_VALUE_ANOTHER: 'UPDATE_VALUE_ANOTHER',
};

export interface UpdateValuePokemonAction {
  type: typeof ActionTypes.UPDATE_VALUE_POKEMON;
  payload: any;
}

export interface UpdateValueAnotherAction {
  type: typeof ActionTypes.UPDATE_VALUE_ANOTHER;
  payload: any;
}

export const updateValuePokemon = (value: any): UpdateValuePokemonAction => ({
  type: ActionTypes.UPDATE_VALUE_POKEMON,
  payload: value,
});

export const updateValueAnother = (value: any): UpdateValueAnotherAction => ({
  type: ActionTypes.UPDATE_VALUE_ANOTHER,
  payload: value,
});