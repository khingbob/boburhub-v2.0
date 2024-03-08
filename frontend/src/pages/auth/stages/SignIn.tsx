import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { Brand } from "../../../components/Brand.tsx";
import { HelpOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { InputBar } from "../../../components/InputBar.tsx";
import { FadeIn } from "../AuthPage.tsx";

export function SignIn({
  getFieldProps,
  goNext,
  fadeIn,
}: {
  getFieldProps?: any;
  goNext?: () => void;
  fadeIn?: FadeIn;
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
    <Fade in={fadeIn?.state ?? false} timeout={fadeIn?.timeout ?? 0}>
      <div>
        <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
          Sign in with your <Brand service="ID" variant="body1" />
        </Typography>
        <InputBar
          label="Phone or email"
          margin="normal"
          fullWidth
          {...getFieldProps("phone_email")}
        />
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", mb: 5 }}
        >
          <FormControlLabel
            label="Save user"
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
            Check this box if you want your account information saved for quick
            login on this device
          </Typography>
        </Popover>
        <Button variant="contained" fullWidth onClick={goNext}>
          Sign in
        </Button>
      </div>
    </Fade>
  );
}
