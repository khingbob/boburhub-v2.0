import { Button, Fade, Paper, Stack, Typography } from "@mui/material";
import { Apple, Facebook, Google } from "@mui/icons-material";
import { FadeType } from "../AuthenticationPage.tsx";

export function Footer({ fade }: { fade: FadeType }) {
  return (
    <Fade in={fade.state} timeout={fade.timeout}>
      <div>
        <Stack direction="row" alignItems="center" spacing={4} mb={7}>
          <Paper elevation={5}>
            <Button color="inherit">
              <Google fontSize="large" />
            </Button>
          </Paper>
          <Paper elevation={5}>
            <Button color="inherit">
              <Apple fontSize="large" />
            </Button>
          </Paper>
          <Paper elevation={5}>
            <Button color="inherit">
              <Facebook fontSize="large" />
            </Button>
          </Paper>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="subtitle1">Don't have an account?</Typography>
          <Button variant="outlined">Sign up</Button>
        </Stack>
      </div>
    </Fade>
  );
}
