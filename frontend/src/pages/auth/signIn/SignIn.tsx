import React, { Dispatch, ReactElement, useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { IconButton, Stack, SxProps } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { stagesValues } from "./stages/stages.tsx";
import { FadeType, isValidPass } from "../AuthenticationPage.tsx";

interface User {
  phone_email: string;
  password?: string;
}
export interface FormikSchema {
  phone_email: string;
  email: string;
  phone: string;
  password: string;
}

export function SignIn({
  stage,
  setStage,
  fade,
  setFade,
  setHeader,
  setPaperSx,
}: {
  stage: number;
  setStage: Dispatch<number>;
  fade: FadeType;
  setFade: Dispatch<FadeType>;
  setHeader: Dispatch<ReactElement | string>;
  setPaperSx: Dispatch<SxProps>;
}) {
  const [method, setMethod] = useState<"email" | "phone">("email");

  const firstRender = React.useRef(true);

  const stages = stagesValues;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const phoneRegex = /^\+[1-9]\d{1,14}$/;

  const postUser = async (user: User) => {
    try {
      await fetch("http://localhost:3000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik<FormikSchema>({
    initialValues: {
      phone_email: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: () => {
      if (stages[stage].tag === "100") {
        postUser({
          phone_email: values.phone_email,
        }).catch((error) => {
          alert(error);
        });
      } else {
        if (
          stages[stage].tag === "password" &&
          isValidPass(values.password) !== "valid"
        ) {
          setFieldError("password", "Wrong password");
          return;
        }

        goNext();
      }
    },
  });

  const { values, errors, setFieldError, setFieldValue } = formik;

  const getFieldProps = (name: keyof typeof values) => {
    return {
      ...formik.getFieldProps(name),
      error: errors[name] !== undefined,
      helperText: errors[name],
    };
  };

  const goNext = () => {
    if (stage === stages.length - 1) {
      alert("Finished");
      return;
    }
    if (stages[stage].tag === "email_phone") {
      if (values.phone_email.match(phoneRegex)) {
        setMethod("phone");
        setFieldValue("phone", values.phone_email);
      } else if (values.phone_email.match(emailRegex)) {
        setMethod("email");
        setFieldValue("email", values.phone_email);
      } else {
        setFieldError("phone_email", "Invalid phone number or email address");
        return;
      }
    }

    console.log(`Fade: ${fade.state} -> false`);
    setFade({
      ...fade,
      state: false,
      direction: "next",
    });
    firstRender.current = false;
  };

  const goBack = () => {
    if (stage === 0) {
      return;
    }
    setFade({ ...fade, state: false, direction: "back" });
  };

  useEffect(() => {
    document.title = "BH | Welcome!";
  }, []);

  useEffect(() => {
    if (!firstRender.current && !fade.state) {
      const one = fade.direction === "next" ? 1 : -1;
      setTimeout(() => {
        setStage(stage + one);
        setHeader(stages[stage + one].header);
        setPaperSx(
          stages[stage + one].children?.[method].sx ?? stages[stage + one].sx,
        );
        setFade({ ...fade, state: true });
      }, fade.timeout * 0.4);
      // setTimeout(() => {
      // }, fade.timeout * 1.9);
    }
  }, [fade]);

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate style={{ width: "100%" }}>
        {stage !== 0 && (
          <IconButton
            sx={{
              position: "absolute",
              top: "30px",
              left: "5%",
            }}
            onClick={goBack}
          >
            <KeyboardBackspace
              sx={{
                fontSize: "40px",
              }}
            />
          </IconButton>
        )}
        <Stack alignItems="center" spacing="7vh" width="100%">
          <Stack alignItems="center" width={"100%"}>
            {React.cloneElement(
              stages[stage].children?.[method].component ??
                stages[stage].component,
              {
                getFieldProps,
                goNext,
                fade,
              },
            )}
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
