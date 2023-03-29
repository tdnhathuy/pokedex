import { Box, BoxProps } from "@mui/material";

export interface FlexProps extends BoxProps {
  children: any;
  row?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {} = props;

  return (
    <Box
      display={"flex"}
      flexDirection={props.row ? "row" : "column"}
      {...props}
    >
      {props.children}
    </Box>
  );
};
