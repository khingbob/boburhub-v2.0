import "./App.css";
import { Router } from "./router/Router";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CustomThemeProvider } from "./theme/CustomThemeProvider.tsx";

function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Router />
    </CustomThemeProvider>
  );
}

export default App;
