import { SxProps, TextField, useTheme } from "@mui/material";

export function InputBar({
  sx,
  ...props
}: {
  sx?: SxProps;
  [key: string]: any;
}) {
  const theme = useTheme();
  return (
    <TextField
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: theme.palette.input?.main,
        },
        ...sx,
      }}
      {...props}
    />
  );
}
