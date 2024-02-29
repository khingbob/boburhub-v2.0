import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../theme/CustomThemeProvider.tsx";

export function AuthPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Box>
      <Typography variant="h3">Auth Page</Typography>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Login
      </Button>
    </Box>
  );
}
