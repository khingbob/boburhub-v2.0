import { Paper } from "@mui/material";

export function CustomPaper({
  children,
  sx,
  ...props
}: {
  children?: any;
  sx?: any;
  props?: any;
}) {
  return (
    <Paper
      variant="outlined"
      sx={{
        px: {
          xs: 4,
          sm: 5,
        },
        py: {
          xs: 3,
          sm: 4,
        },
        boxShadow: "0 6px 20px -4px black",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
}
