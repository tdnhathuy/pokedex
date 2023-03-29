import { CardMedia, Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { upperFirst, values } from "lodash";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "../../redux/api/pokemon.interface";
import { Pages } from "../../routes/config.routes";

export const PokemonCard = (pokemon: IPokemon) => {
  const images = values(pokemon.sprites)
    .filter((x) => typeof x === "string")
    .flat() as string[];

  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(Pages.Detail);
  };

  return (
    <Box onClick={onClickCard}>
      <Grid container>
        <Box component={"img"} src={images[0]} />
      </Grid>
    </Box>
  );

  return (
    <Card
      onClick={() => {
        navigate(Pages.Detail);
      }}
      elevation={4}
      className="mb-8"
      sx={{}}
    >
      <CardMedia component="img" height={80} image={images[0]} />
      <CardContent>
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: { xs: "14px", md: "18px", lg: "18px" } }}
        >
          {upperFirst(pokemon.name)}
        </Typography>
      </CardContent>
    </Card>
  );
};
