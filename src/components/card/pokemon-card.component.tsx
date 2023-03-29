import { CardMedia, Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { upperFirst, values } from "lodash";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "../../redux/api/pokemon.interface";
import { Pages } from "../../routes/config.routes";
import { Flex } from "../common/flex.componen";

export const PokemonCard = (pokemon: IPokemon) => {
  const images = values(pokemon.sprites)
    .filter((x) => typeof x === "string")
    .flat() as string[];

  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(Pages.Detail);
  };

  return (
    <Flex
      className="bg-slate-200 rounded-lg p-2 flex-col hover:bg-slate-300 hover:cursor-pointer"
      onClick={onClickCard}
    >
      <Box component={"img"} src={images[0]} className="self-center" />
      <Typography
        variant="h1"
        component="h2"
        sx={{ fontSize: { xs: "10px", sm: "14px", md: "18px", lg: "18px" } }}
        textAlign={"center"}
      >
        {upperFirst(pokemon.name)}
      </Typography>
    </Flex>
  );
};
