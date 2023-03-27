import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon } from "./pokemon.interface";

type Pokemon = {};

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getListPokemon: builder.query<string[], void>({
      query: () => `pokemon`,
      transformResponse(baseQueryReturnValue: any) {
        return baseQueryReturnValue.results.map((pokemon: any) => pokemon.name);
      },
    }),
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
