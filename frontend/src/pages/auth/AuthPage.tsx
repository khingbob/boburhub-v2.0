import React, { useContext, useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import {
  Button,
  Fade,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CustomPaper } from "../../components/CustomPaper.tsx";
import {
  Apple,
  Facebook,
  Google,
  KeyboardBackspace,
} from "@mui/icons-material";
import { Brand } from "../../components/Brand.tsx";
import { stagesValues } from "./stages/stages.tsx";
import { VerificationMethodContext } from "./stages/verification/VerificationMethodContextProvider.tsx";

export type FadeIn = {
  state: boolean;
  timeout: number;
  direction: "next" | "back";
};
export function AuthPage() {
  const [stage, setStage] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<FadeIn>({
    timeout: 300,
    state: true,
    direction: "next",
  });
  const [_, setMethod] = useContext(VerificationMethodContext);
  const firstRender = React.useRef(true);

  const stages = stagesValues;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const formik = useFormik({
    initialValues: {
      phone_email: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
    if (stage === 0) {
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
    setFadeIn({ ...fadeIn, state: false, direction: "next" });
    firstRender.current = false;
  };

  const goBack = () => {
    if (stage === 0) {
      return;
    }
    setFadeIn({ ...fadeIn, state: false, direction: "back" });
  };

  useEffect(() => {
    document.title = "BH | Welcome!";
  }, []);

  useEffect(() => {
    if (!firstRender.current && !fadeIn.state) {
      setTimeout(() => {
        setStage(stage + (fadeIn.direction === "next" ? 1 : -1));
      }, fadeIn.timeout * 0.7);
      setTimeout(() => {
        setFadeIn({ ...fadeIn, state: true });
      }, fadeIn.timeout * 1.2);
    }
  }, [fadeIn]);

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Fade in={stage !== 0 || (fadeIn.state && stage !== 0)}>
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
        </Fade>
        <Fade in={fadeIn.state} timeout={fadeIn.timeout}>
          <Typography variant="h3" fontWeight={400} align="center" p={5}>
            {stages[stage].header}
          </Typography>
        </Fade>
        <Stack alignItems="center" spacing="7vh" width="100%">
          <CustomPaper
            sx={{
              transition: "width 0.3s, height 0.3s",
              ...stages[stage].sx,
            }}
          >
            <Stack alignItems="center">
              <Brand
                service="logo"
                variant="h1"
                sx={{ mb: 2 }}
                align="center"
              />
              {React.cloneElement(stages[stage].component, {
                getFieldProps,
                goNext,
                fadeIn,
              })}
            </Stack>
          </CustomPaper>
          {stage === 0 && (
            <Fade in={fadeIn.state} timeout={fadeIn.timeout}>
              <div>
                <Stack direction="row" alignItems="center" spacing={4} mb={7}>
                  <Paper elevation={5}>
                    <Button color="inherit">
                      <Google fontSize="large" />
                    </Button>
                  </Paper>
                  <Paper elevation={5}>
                    <Button color="inherit">
                      <Apple fontSize="large" />
                    </Button>
                  </Paper>
                  <Paper elevation={5}>
                    <Button color="inherit">
                      <Facebook fontSize="large" />
                    </Button>
                  </Paper>
                </Stack>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Typography variant="subtitle1">
                    Don't have an account?
                  </Typography>
                  <Button variant="outlined">Sign up</Button>
                </Stack>
              </div>
            </Fade>
          )}
        </Stack>
      </Form>
    </FormikProvider>
  );
}
