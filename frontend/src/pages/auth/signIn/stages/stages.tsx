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

const emailPhonePassSx = {
  width: {
    xs: "80vw",
    sm: "400px",
  },
  height: "430px",
};
export const stagesValues: Stage[] = [
  {
    tag: "email_phone",
    sx: emailPhonePassSx,
    header: (
      <>
        Welcome to <Brand variant="h4" />
      </>
    ),
    component: <EmailPhone />,
  },
  {
    tag: "password",
    sx: emailPhonePassSx,
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
        },
        component: <Email />,
      },
      phone: {
        sx: {
          width: {
            xs: "80vw",
            sm: "400px",
          },
          height: {
            xs: "350px",
            sm: "360px",
          },
        },
        component: <Phone />,
      },
    },
  },
];
