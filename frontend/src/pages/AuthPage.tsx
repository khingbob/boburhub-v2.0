import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../theme/CustomThemeProvider.tsx";

export function AuthPage() {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const toggleTheme = () => {
    setThemeMode(theme.palette.mode === "light" ? "dark" : "light");
  };
  return (
    <Box>
      <Typography variant="h3">Welcome to BOBUR HUB</Typography>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Login
      </Button>
    </Box>
  );
}
