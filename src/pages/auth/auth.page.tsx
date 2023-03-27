import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button.component";
import { EnumTo } from "../../routes/config.routes";
export interface AuthProps {}

export const AuthPage = (props: AuthProps) => {
  const {} = props;

  const navigate = useNavigate();

  return (
    <Grid>
      <Button title="abc" onClick={() => navigate(EnumTo.Home)} />
    </Grid>
  );
};
