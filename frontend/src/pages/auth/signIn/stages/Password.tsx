import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FadeType } from "../../AuthenticationPage.tsx";
import { InputBar } from "../../../../components/InputBar.tsx";

export function Password({
  getFieldProps,
  fade,
}: {
  getFieldProps?: any;
  fade?: FadeType;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => setShowPassword(!showPassword);
  return (
    <Fade in={fade?.state ?? false} timeout={fade?.timeout ?? 0}>
      <div style={{ width: "100%", height: "100%" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 500, pt: 2, pb: 1 }}
        >
          Enter your password
        </Typography>
        <InputBar
          autoFocus
          label="Password"
          margin="normal"
          fullWidth
          type={showPassword ? "text" : "password"}
          {...getFieldProps("password")}
        />

        <FormControlLabel
          label="Show password"
          onClick={handleShow}
          checked={showPassword}
          control={<Checkbox disableRipple />}
          sx={{ mr: 0, mb: 5, color: "text.secondary" }}
        />
        <Button variant="contained" fullWidth type={"submit"}>
          Submit
        </Button>
      </div>
    </Fade>
  );
}
