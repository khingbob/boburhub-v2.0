import { Fade, Stack, SxProps, Typography } from "@mui/material";
import { useEffect, useState, ReactElement } from "react";
import { CustomPaper } from "../../components/CustomPaper.tsx";
import { Brand } from "../../components/Brand.tsx";
import { useNavigate } from "react-router-dom";
import { Footer } from "./signIn/Footer.tsx";
import { SignIn } from "./signIn/SignIn.tsx";
import { SignUp } from "./singUp/SignUp.tsx";
import { stagesValues } from "./signIn/stages/stages.tsx";
import { signUpSx } from "./singUp/signUpSx.ts";
import { SignUpDescription } from "./singUp/SignUpDescription.tsx";

export type FadeType = {
  state: boolean;
  timeout: number;
  direction: "next" | "back" | "signUp";
};

export const isValidPass = (pass: string) => {
  if (pass.length < 6) return "Password must be at least 6 characters long";
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
  const navigate = useNavigate();
  const path = window.location.pathname;
  const isSignup = path === "/auth/signup";
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
  const [stage, setStage] = useState<number>(0);
  const [paperSx, setPaperSx] = useState<SxProps>(
    path === "/auth/signin" ? stagesValues[0].sx : signUpSx,
  );

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

  const signUp = () => {
    setFade({ ...fade, state: false, direction: "signUp" });
    setTimeout(() => {
      navigate("/auth/signup");
      setPaperSx(signUpSx);
    }, fade.timeout);
    setTimeout(() => {
      setFade({
        ...fade,
        state: true,
        timeout: fade.timeout,
      });
    }, fade.timeout * 1.5);
  };
  return (
    <Stack alignItems="center" spacing={{ xs: 6, lg: 5 }} width="100%">
      <Fade in={fade.state} timeout={fade.timeout}>
        <Typography variant="h3" fontWeight={400} align="center" pt={5}>
          {header}
        </Typography>
      </Fade>
      <CustomPaper
        sx={{
          transition: "width 0.2s, height 0.2s",
          ...paperSx,
        }}
      >
        <Stack direction="row" width="100%" height="100%">
          <SignUpDescription fade={fade} />
          <Stack
            alignItems="center"
            width={isSignup ? "50%" : "100%"}
            px={{ xs: 4, sm: 5 }}
          >
            {!isSignup && (
              <Brand
                service="logo"
                variant="h1"
                sx={{ my: { xs: 3, sm: 4 }, fontSize: { xs: "50px" } }}
                align="center"
              />
            )}

            {path === "/auth/signup" ? (
              <SignUp fade={fade} setFade={setFade} />
            ) : (
              <SignIn
                stage={stage}
                setStage={setStage}
                fade={fade}
                setFade={setFade}
                setPaperSx={setPaperSx}
                setHeader={setHeader}
              />
            )}
          </Stack>
        </Stack>
      </CustomPaper>

      {path === "/auth/signin" && stage === 0 && (
        <Footer signUp={signUp} fade={fade} />
      )}
    </Stack>
  );
}
