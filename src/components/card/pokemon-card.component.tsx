import { CardMedia, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { upperFirst, values } from "lodash";
import { IPokemon } from "../../redux/api/pokemon.interface";

export const PokemonCard = (pokemon: IPokemon) => {
  const images = values(pokemon.sprites)
    .filter((x) => typeof x === "string")
    .flat() as string[];

  return (
    <Card elevation={4} className="mb-8" sx={{ maxWidth: 170 }}>
      <CardMedia component="img" height={80} image={images[0]} />
      <CardContent>
        <Typography variant="h5" component="div">
          {upperFirst(pokemon.name)}
        </Typography>
      </CardContent>

      <CardActions className="justify-end">
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
