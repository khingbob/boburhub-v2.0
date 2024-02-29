import { createContext, ReactNode, useState } from "react";
import { createTheme, Theme, ThemeProvider } from "@mui/material";

type ThemeContextType = {
  theme: Theme;
  setThemeMode: (theme: "light" | "dark") => void;
};
const defaultTheme = createTheme({ palette: { mode: "dark" } });
export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setThemeMode: () => {},
});

const darkThemePallet = createTheme({
  palette: { mode: "dark", background: { default: "#141414", paper: "red" } },
});
const lightThemePallet = createTheme({ palette: { mode: "light" } });

export function CustomThemeProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [theme, setTheme] = useState(defaultTheme);

  const setThemeMode = (theme: "light" | "dark") => {
    setTheme(theme == "light" ? lightThemePallet : darkThemePallet);
  };

  document.body.style.transition = theme.transitions.create("background-color");

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
