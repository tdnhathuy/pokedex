import { IPokemon } from "../../redux/api/pokemon.interface";
import { PokemonCard } from "../card/pokemon-card.component";

export interface PokemonTableProps {
  pokemons: IPokemon[];
}

export const PokemonTable = (props: PokemonTableProps) => {
  const { pokemons } = props;

  return (
    <div className="p-6">
      {pokemons.map((pkm) => {
        return <PokemonCard {...pkm} />;
      })}
    </div>
  );
};
