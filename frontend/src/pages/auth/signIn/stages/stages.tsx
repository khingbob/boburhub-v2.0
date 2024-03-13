import { EmailPhone } from "./EmailPhone.tsx";
import { Brand } from "../../../../components/Brand.tsx";
import { Email } from "./verification/Email.tsx";
import { Phone } from "./verification/Phone.tsx";
import { ReactElement } from "react";
import { SxProps } from "@mui/material";
import { Password } from "./Password.tsx";

interface Stage {
  tag: string;
  sx: SxProps;
  header: string | ReactElement;
  component: ReactElement;
  children?: {
    email: {
      sx: SxProps;
      component: ReactElement;
    };

    phone: {
      sx: SxProps;
      component: ReactElement;
    };
  };
}
export const stagesValues: Stage[] = [
  {
    tag: "email_phone",
    sx: {
      width: {
        xs: "80vw",
        sm: "400px",
      },
      height: {
        xs: "420px",
        md: "430px",
      },
    },
    header: (
      <>
        Welcome to <Brand variant="h4" />
      </>
    ),
    component: <EmailPhone />,
  },
  {
    tag: "password",
    sx: {
      width: {
        xs: "80vw",
        sm: "400px",
      },
      height: {
        xs: "430px",
        md: "440px",
      },
    },
    header: "User Verification",
    component: <Password />,
  },
  {
    tag: "verification",
    header: "User Verification",
    sx: {},
    component: <></>,
    children: {
      email: {
        sx: {
          width: {
            xs: "80vw",
            md: "35vw",
          },
          height: "38vh",
          maxHeight: "1600px",
          maxWidth: "1600px",
        },
        component: <Email />,
      },
      phone: {
        sx: {
          width: {
            xs: "80vw",
            md: "35vw",
          },
          height: "38vh",
          maxHeight: "1600px",
          maxWidth: "1600px",
        },
        component: <Phone />,
      },
    },
  },
];
