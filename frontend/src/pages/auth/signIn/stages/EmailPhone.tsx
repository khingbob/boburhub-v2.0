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
import { Brand } from "../../../../components/Brand.tsx";
import { HelpOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { InputBar } from "../../../../components/InputBar.tsx";
import { FormikSchema } from "../SignIn.tsx";
import { useFormikContext } from "formik";
import { FadeType } from "../../AuthenticationPage.tsx";

export function EmailPhone({
  getFieldProps,
  fade,
}: {
  getFieldProps?: any;
  goNext?: () => void;
  fade?: FadeType;
}) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const formik = useFormikContext<FormikSchema>();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fade in={fade?.state ?? false} timeout={fade?.timeout ?? 0}>
      <div style={{ width: "100%", height: "100%" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 500, pt: 2, pb: 1 }}
        >
          Sign in with your <Brand service="ID" variant="body1" />
        </Typography>
        <InputBar
          autoFocus
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
            sx={{ mr: 0, color: "text.secondary" }}
          />
          <IconButton onClick={handleClick} disableRipple sx={{ pl: 0.2 }}>
            <HelpOutlined
              sx={{ fontSize: "1.1rem", color: "text.secondary" }}
            />
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
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Sign in
        </Button>
      </div>
    </Fade>
  );
}
