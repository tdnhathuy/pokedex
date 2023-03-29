import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button.component";
import { Pages } from "../../routes/config.routes";
export interface AuthProps {}

export const AuthPage = (props: AuthProps) => {
  const {} = props;

  const navigate = useNavigate();

  return (
    <Grid container rowGap={0.5} className="">
      <Grid item xs={6} md={12} className="text-center p-12">
        <Button title="Get data" onClick={() => navigate(Pages.Home)} />
      </Grid>
    </Grid>
  );
};
