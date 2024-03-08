import { SignIn } from "./SignIn.tsx";
import { Verification } from "./verification/Verification.tsx";
import { Brand } from "../../../components/Brand.tsx";

export const stagesValues = [
  {
    sx: {
      width: {
        xs: "80vw",
        sm: "60vw",
        md: "40vw",
        lg: "30vw",
        xl: "30vw",
      },
      height: "42vh",
      maxWidth: "1600px",
    },
    header: (
      <>
        Welcome to <Brand variant="h4" />
      </>
    ),
    component: <SignIn />,
  },
  {
    sx: {
      width: {
        xs: "80vw",
        md: "35vw",
      },
      height: "38vh",
      maxHeight: "1600px",
      maxWidth: "1600px",
    },
    header: "User Verification",
    component: <Verification />,
  },
];
