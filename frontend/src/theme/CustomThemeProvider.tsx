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
    body1: {
      fontSize: "1.3rem",
    },
  },
  shape: {
    borderRadius: 7,
  },
};

const darkThemePallet = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#141414",
        secondary: "rgb(40 40 40)",
        paper: "rgb(34 34 34)",
      },
      primary: {
        main: "#ffda00",
        light: "#fcea9b",
      },
      error: {
        main: "#ff8d84",
      },
      input: {
        main: "#333333",
      },
      text: {
        primary: "rgba(255, 255, 255)",
        secondary: "rgb(215,215,215)",
        disabled: "rgb(136,136,136)",
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

  console.log("Theme: ", theme);

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
