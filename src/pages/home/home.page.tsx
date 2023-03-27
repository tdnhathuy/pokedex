import { useEffect, useState } from "react";
import { PokemonTable } from "../../components/table/pokemon-table.componen";
import { thunkGetListPokemon } from "../../redux/action/pokemon.action";
import { pokemonApi } from "../../redux/api/pokemon.api";
import { IPokemon } from "../../redux/api/pokemon.interface";
import { store } from "../../redux/store.redux";

export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
  const {} = props;

  const { data = [] } = pokemonApi.useGetListPokemonQuery();

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    (async () => {
      const pokemon = await store.dispatch(thunkGetListPokemon()).unwrap();
      setPokemons(pokemon);
    })();
  }, []);

  return <PokemonTable pokemons={pokemons} />;
};
