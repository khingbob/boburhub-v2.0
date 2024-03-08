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
        pt: 3,
        pb: 5,
        px: 3,
        boxShadow: "0 6px 20px -4px black",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
}
