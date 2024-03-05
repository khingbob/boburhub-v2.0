import { createContext, ReactNode, useState } from "react";
import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

type ThemeContextType = {
  theme: Theme;
  setThemeMode: (theme: "light" | "dark") => void;
};

const customProps = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.7rem",
    },
    h3: {
      fontSize: "2.4rem",
    },
    h4: {
      fontSize: "2.1rem",
    },
    h5: {
      fontSize: "1.8rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
  },
  shape: {
    borderRadius: 5,
  },
};

const darkThemePallet = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      background: { default: "#141414", paper: "#2c2c2c" },
      primary: {
        main: "#ffda00",
      },
    },
    ...customProps,
  }),
);
const lightThemePallet = responsiveFontSizes(
  createTheme({ palette: { mode: "light" }, ...customProps }),
);

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkThemePallet,
  setThemeMode: () => {},
});

export function CustomThemeProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const systemThemePallete = useMediaQuery("(prefers-color-scheme: dark)")
    ? darkThemePallet
    : lightThemePallet;

  const [theme, setTheme] = useState(systemThemePallete);

  console.log(theme);

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
