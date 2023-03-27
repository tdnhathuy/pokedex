import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/pokemon.api";
import { IPokemon } from "../api/pokemon.interface";
import { store } from "../store.redux";

export const thunkGetListPokemon = createAsyncThunk<IPokemon[], void>(
  "thunkGetListPokemon",
  async () => {
    const rawList = await store
      .dispatch(pokemonApi.endpoints.getListPokemon.initiate())
      .unwrap();

    const pokemon = await Promise.all(
      rawList.map((pkm) =>
        store
          .dispatch(pokemonApi.endpoints.getPokemonByName.initiate(pkm))
          .unwrap()
      )
    );

    return pokemon;
  }
);
