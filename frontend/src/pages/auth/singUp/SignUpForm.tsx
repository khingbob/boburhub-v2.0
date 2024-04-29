import { Stack, Fade, SxProps } from "@mui/material";
import { Brand } from "../../../components/Brand";
import { SignIn } from "../signIn/SignIn";
import { SignUp } from "./SignUp";
import { FadeType } from "../AuthenticationPage";
import { Dispatch, ReactElement } from "react";

export function SignUpForm({
  fade,
  setFade,
  stage,
  setStage,
  setHeader,
  setPaperSx,
}: {
  fade: FadeType;
  setFade: Dispatch<FadeType>;
  stage: number;
  setStage: Dispatch<number>;
  setHeader: Dispatch<ReactElement | string>;
  setPaperSx: Dispatch<SxProps>;
}) {
  const path = window.location.pathname;
  const isSignup = path === "/auth/signup";

  return (
    <Stack
      alignItems="center"
      width={isSignup ? { xs: "100%", sm: "50%" } : "100%"}
      px={{ xs: 4, sm: 5 }}
      sx={{ minWidth: "x-small" }}
    >
      {!isSignup && (
        <Fade in={fade.direction !== "signUp"} timeout={fade.timeout}>
          <div>
            <Brand
              service="logo"
              variant="h1"
              sx={{ my: { xs: 3, sm: 4 }, fontSize: { xs: "50px" } }}
              align="center"
            />
          </div>
        </Fade>
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
  );
}
