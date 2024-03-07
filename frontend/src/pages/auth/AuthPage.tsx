import React, { useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { SignIn } from "./stages/SignIn.tsx";
import { Authentication } from "./stages/Authentication.tsx";
import { Stack } from "@mui/material";

export function AuthPage() {
  const [stage, setStage] = useState<number>(0);
  let stages = [<SignIn />, <Authentication />];
  const phoneRegex = /^\+\d+$/;
  const validationSchema = object({
    email: string().email("Invalid email address"),
    phone: string().matches(phoneRegex, "Invalid phone number"),
  });

  useEffect(() => {
    document.title = "BH | Welcome!";
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, touched, errors } = formik;

  const getFieldProps = (name: keyof typeof values) => {
    return {
      error: touched[name] && errors[name] !== null,
      helperText: touched[name] && errors[name],
    };
  };

  const goNext = () => {
    if (stage === stages.length - 1) {
      alert("Finished");
      return;
    }
    setStage(stage + 1);
  };

  stages = stages.map((stage, index) => {
    return React.cloneElement(stage, {
      key: index,
      goNext: goNext,
      getFieldProps: getFieldProps,
    });
  });

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Stack
          direction="row"
          flexWrap="nowrap"
          sx={{
            transition: "margin-left 0.5s cubic-bezier(0.65, 0.05, 0.36, 1)",
            overflowX: "hidden",
            ml: `${-100 * stage}vw`,
          }}
        >
          {stages.map((stage, index) => {
            return (
              <div style={{ width: "100vw" }} key={index}>
                <Stack alignItems="center" sx={{ width: "100vw" }}>
                  {stage}
                </Stack>
              </div>
            );
          })}
        </Stack>
      </Form>
    </FormikProvider>
  );
}
