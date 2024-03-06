import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  Popover,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Brand } from "../components/Brand.tsx";
import { Apple, Facebook, Google, HelpOutlined } from "@mui/icons-material";
import { useState } from "react";
export function AuthPage() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const InputBar = styled(TextField)({
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.input.main,
    },
  });

  return (
    <Stack alignItems="center" spacing={5} p={3} sx={{ width: "100%" }}>
      <Typography variant="h3" fontWeight={400} align="center">
        Welcome to <Brand variant="h4" />
      </Typography>
      <Stack alignItems="center" spacing={8}>
        <Paper
          elevation={20}
          variant="outlined"
          sx={{
            maxWidth: "500px",
            minWidth: "400px",
            width: "50%",
            pt: 3,
            pb: 5,
            px: 3,
            boxShadow: "0 6px 20px -4px black",
          }}
        >
          <Stack alignItems="center">
            <Brand service="logo" variant="h2" sx={{ mb: 3 }} />
            <Typography variant="h3" align="center" sx={{ fontWeight: 500 }}>
              Sign in
            </Typography>
            <InputBar label="Phone or email" margin="normal" fullWidth />
            <Stack
              direction="row"
              alignItems="center"
              sx={{ width: "100%", mb: 5 }}
            >
              <FormControlLabel
                label={<>Save user</>}
                control={<Checkbox disableRipple />}
                sx={{ mr: 0 }}
              />
              <IconButton onClick={handleClick} disableRipple>
                <HelpOutlined fontSize="small" />
              </IconButton>
            </Stack>
            <Popover
              open={open}
              anchorEl={anchor}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              elevation={10}
              sx={{ width: "70%" }}
            >
              <Typography variant="subtitle2" sx={{ p: 2 }}>
                Check this box if you want your account information saved for
                quick login on this device
              </Typography>
            </Popover>
            <Button variant="contained" fullWidth>
              Sign in
            </Button>
          </Stack>
        </Paper>
        <Stack direction="row" alignItems="center" spacing={4}>
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
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="subtitle1">Don't have an account?</Typography>
          <Button variant="outlined">Sign up</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
