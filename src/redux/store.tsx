import { combineReducers, configureStore } from "@reduxjs/toolkit";
import anotherReducer from "./anotherReducer";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonData: anotherReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;