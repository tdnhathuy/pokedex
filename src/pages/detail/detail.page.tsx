import { Typography } from "@mui/material";
import { Flex } from "../../components/common/flex.componen";
import { usePayload } from "../../hooks/comon.hook";
import { IPokemon } from "../../redux/api/pokemon.interface";

export interface DetailPageProps {}

export const DetailPage = (props: DetailPageProps) => {
  const {} = props;

  const { pokemon } = usePayload<{ pokemon: IPokemon }>();

  return (
    <Flex>
      <Typography>{pokemon.name}</Typography>
    </Flex>
  );
};
