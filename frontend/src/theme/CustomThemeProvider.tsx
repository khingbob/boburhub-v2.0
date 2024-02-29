import { createContext, ReactNode, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: ThemeType) => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

const darkThemePallet = createTheme({ palette: { mode: "dark" } });
const lightThemePallet = createTheme({ palette: { mode: "light" } });

const themeMap = { light: lightThemePallet, dark: darkThemePallet };

export function CustomThemeProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeMap[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
