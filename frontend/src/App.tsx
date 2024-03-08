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
import { VerificationMethodContextProvider } from "./pages/auth/stages/verification/VerificationMethodContextProvider.tsx";

function App() {
  const user = null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);
  return (
    <CustomThemeProvider>
      <VerificationMethodContextProvider>
        <CssBaseline />
        <Router />
      </VerificationMethodContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
