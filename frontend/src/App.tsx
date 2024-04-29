import "./App.css";
import { Router } from "./router/Router";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CustomThemeProvider } from "./theme/CustomThemeProvider.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const user = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    }
  }, []);
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Router />
    </CustomThemeProvider>
  );
}

export default App;
