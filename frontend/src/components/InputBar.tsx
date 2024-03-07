import { styled, TextField, useTheme } from "@mui/material";

export function InputBar(props: any) {
  const theme = useTheme();
  const InputBar = styled(TextField)({
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.input?.main,
    },
  });
  return <InputBar {...props} />;
}
