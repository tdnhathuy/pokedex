import { Button as ButtonMUI } from "@mui/material";

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { title = "Title button", onClick } = props;

  return (
    <ButtonMUI onClick={onClick} variant="contained" {...props}>
      {title}
    </ButtonMUI>
  );
};
