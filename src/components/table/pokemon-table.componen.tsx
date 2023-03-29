import { Grid } from "@mui/material";
import { IPokemon } from "../../redux/api/pokemon.interface";
import { PokemonCard } from "../card/pokemon-card.component";

export interface PokemonTableProps {
  pokemons: IPokemon[];
}

export const PokemonTable = (props: PokemonTableProps) => {
  const { pokemons } = props;

  return (
    <Grid container className="p-6" columnGap={2} justifyContent="center">
      {pokemons.map((pkm) => {
        return (
          <Grid item xs={2} md={2} lg={1.5}>
            <PokemonCard {...pkm} />
          </Grid>
        );
      })}
    </Grid>
  );
};
