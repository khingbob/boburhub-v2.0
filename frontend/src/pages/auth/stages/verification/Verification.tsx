import { Email } from "./Email.tsx";
import { Phone } from "./Phone.tsx";
import { useContext } from "react";
import { VerificationMethodContext } from "./VerificationMethodContextProvider.tsx";
import { Fade } from "@mui/material";
import { FadeIn } from "../../AuthPage.tsx";

export function Verification({ fadeIn }: { fadeIn?: FadeIn }) {
  const [method, _] = useContext(VerificationMethodContext);
  return (
    <Fade in={fadeIn?.state ?? false} timeout={fadeIn?.timeout ?? 0}>
      <div>{method === "phone" ? <Phone /> : <Email />}</div>
    </Fade>
  );
}
