import {
  Checkbox,
  FormControlLabel,
  SxProps,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";

export function InputBar({
  sx,
  type,
  ...props
}: {
  sx?: SxProps;
  type?: React.InputHTMLAttributes<unknown>["type"];
  [key: string]: any;
}) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => setShowPassword(!showPassword);

  return (
    <div style={{ width: props.fullWidth ? "100%" : "auto" }}>
      <TextField
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.input?.main,
          },
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          ...sx,
        }}
        {...props}
      />
      {type === "password" && (
        <FormControlLabel
          label="Show password"
          onClick={handleShow}
          checked={showPassword}
          control={<Checkbox disableRipple />}
          sx={{ mr: 0, mb: 5, color: "text.secondary" }}
        />
      )}
    </div>
  );
}
