import { Fade, Stack, SxProps, Typography } from "@mui/material";
import { useEffect, useState, ReactElement } from "react";
import { CustomPaper } from "../../components/CustomPaper.tsx";
import { Brand } from "../../components/Brand.tsx";
import { useLocation } from "react-router-dom";
import { Footer } from "./signIn/Footer.tsx";
import { SignIn } from "./signIn/SignIn.tsx";
import { SignUp } from "./singUp/SignUp.tsx";
import { stagesValues } from "./signIn/stages/stages.tsx";

export type FadeType = {
  state: boolean;
  timeout: number;
  direction: "next" | "back";
};

export const isValidPass = (pass: string) => {
  if (pass.length > 5) return "Password must be at least 6 characters long";
  if (pass === pass.toLowerCase())
    return "Password must contain at least one uppercase letter";
  if (pass === pass.toUpperCase())
    return "Password must contain at least one lowercase letter";
  if (pass.includes(" ")) return "Password must not contain spaces";
  if (!/\d/.test(pass)) return "Password must contain at least one number";
  if (!/\W/.test(pass))
    return "Password must contain at least one special character";
  return "valid";
};

export function AuthenticationPage() {
  const [fade, setFade] = useState<FadeType>({
    timeout: 300,
    state: true,
    direction: "next",
  });
  const [header, setHeader] = useState<ReactElement | string>(
    <>
      Welcome to <Brand variant="h4" />
    </>,
  );
  const [paperSx, setPaperSx] = useState<SxProps>(stagesValues[0].sx);
  const [stage, setStage] = useState<number>(0);

  const path = useLocation().pathname;

  useEffect(() => {
    document.title = "BH | Welcome!";

    // #NOTE: EXIT WARNING
    // const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    //   event.preventDefault();
    //   event.returnValue = ""; // Modern browsers ignore this, but it's still required for compatibility
    //   return ""; // For legacy browsers
    // };
    //
    // window.addEventListener("beforeunload", handleBeforeUnload);
    //
    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);
  return (
    <Stack alignItems="center" spacing="7vh" width="100%">
      <Fade in={fade.state} timeout={fade.timeout}>
        <Typography variant="h3" fontWeight={400} align="center" pt={5}>
          {header}
        </Typography>
      </Fade>
      <CustomPaper
        sx={{
          transition: "width 0.3s, height 0.3s",
          ...paperSx,
        }}
      >
        <Stack alignItems="center">
          <Brand
            service="logo"
            variant="h1"
            sx={{ mb: 2, fontSize: { xs: "50px" } }}
            align="center"
          />
          {path === "/auth/signin" && (
            <SignIn
              stage={stage}
              setStage={setStage}
              fade={fade}
              setFade={setFade}
              setPaperSx={setPaperSx}
              setHeader={setHeader}
            />
          )}
          {path === "/auth/signup" && <SignUp />}
        </Stack>
      </CustomPaper>
      {path === "/auth/signin" && stage === 0 && <Footer fade={fade} />}
    </Stack>
  );
}
