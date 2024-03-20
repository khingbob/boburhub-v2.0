import { Dispatch } from "react";
import { FadeType } from "../AuthenticationPage.tsx";
import { Button, Fade, IconButton, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { InputBar } from "../../../components/InputBar.tsx";
import UploadProfilePic from "../../../components/UploadProfilePic.tsx";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface FormikSchema {
  profile_pic?: string;
  email?: string;
  password?: string;
  username?: string;
  phone?: string;
}
export function SignUp({
  fade,
  setFade,
}: {
  fade: FadeType;
  setFade: Dispatch<FadeType>;
}) {
  const validate = () => {
    if (!values.username) {
      setFieldError("username", "Username is required");
    }
    if (!values.password) {
      setFieldError("password", "Password is required");
    }
    if (!values.email && !values.phone) {
      setFieldError("email", "Either Email or Phone is required");
    }
  };

  const formik = useFormik<FormikSchema>({
    initialValues: {},
    validationSchema: validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, errors, touched, setFieldError, setFieldValue } = formik;
  const getFieldProps = (name: keyof FormikSchema) => {
    return {
      ...formik.getFieldProps(name),
      error: touched[name] === true && errors[name] !== undefined,
      helperText: touched[name] === true && errors[name],
    };
  };

  const navigate = useNavigate();
  const goBack = () => {
    setFade({ ...fade, state: false });
    setTimeout(() => {
      navigate("/auth/signin");
      setFade({ ...fade, state: true });
    }, fade.timeout);
  };

  return (
    <FormikProvider value={formik}>
      <Fade in={fade.state} timeout={fade.timeout}>
        <Form autoComplete="off" noValidate style={{ width: "100%" }}>
          <IconButton
            sx={{
              position: "absolute",
              top: { xs: "auto", sm: "30px" },
              bottom: { xs: "20px", sm: "auto" },
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
          <Stack
            spacing={4}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={3}
          >
            <UploadProfilePic
              fontSize={6}
              sx={{
                my: { xs: 3, sm: 4 },
              }}
              getFieldProps={getFieldProps}
              setFieldValue={setFieldValue}
            />
            <InputBar
              label="Email"
              type="email"
              fullWidth
              {...getFieldProps("email")}
            />
            <InputBar
              label="Phone"
              type="number"
              fullWidth
              {...getFieldProps("phone")}
            />
            <InputBar
              label="Username"
              fullWidth
              {...getFieldProps("username")}
            />

            <InputBar
              label="Password"
              type="password"
              fullWidth
              {...getFieldProps("password")}
            />
          </Stack>
          <Button
            variant={"contained"}
            fullWidth
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Register
          </Button>
        </Form>
      </Fade>
    </FormikProvider>
  );
}
