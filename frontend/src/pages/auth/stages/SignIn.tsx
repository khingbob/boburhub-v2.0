import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { Brand } from "../../../components/Brand.tsx";
import { Apple, Facebook, Google, HelpOutlined } from "@mui/icons-material";
import { useState } from "react";
import { InputBar } from "../../../components/InputBar.tsx";
import { CustomPaper } from "../../../components/CustomPaper.tsx";

export function SignIn({
  getFieldProps,
  goNext,
}: {
  getFieldProps?: any;
  goNext?: () => void;
}) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography variant="h3" fontWeight={400} align="center" p={5}>
        Welcome to <Brand variant="h4" />
      </Typography>
      <Stack alignItems="center" spacing={"7vh"} width={"100%"}>
        <CustomPaper>
          <Stack alignItems="center">
            <Brand service="logo" variant="h1" sx={{ mb: 2 }} />
            <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
              Sign in with your <Brand service="ID" variant="body1" />
            </Typography>
            <InputBar
              label="Phone or email"
              margin="normal"
              fullWidth
              {...getFieldProps("email")}
            />
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
              <IconButton onClick={handleClick} disableRipple sx={{ pl: 0.2 }}>
                <HelpOutlined sx={{ fontSize: "1.1rem" }} />
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
            <Button variant="contained" fullWidth onClick={goNext}>
              Sign in
            </Button>
          </Stack>
        </CustomPaper>
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
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="subtitle1">Don't have an account?</Typography>
          <Button variant="outlined">Sign up</Button>
        </Stack>
      </Stack>
    </>
  );
}
