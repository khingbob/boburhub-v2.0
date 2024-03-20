import { Button, Fade, Typography } from "@mui/material";
import { FadeType } from "../../AuthenticationPage.tsx";
import { InputBar } from "../../../../components/InputBar.tsx";

export function Password({
  getFieldProps,
  fade,
}: {
  getFieldProps?: any;
  fade?: FadeType;
}) {
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
          type={"password"}
          {...getFieldProps("password")}
        />

        <Button variant="contained" fullWidth type={"submit"}>
          Submit
        </Button>
      </div>
    </Fade>
  );
}
