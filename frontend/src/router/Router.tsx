import { useRoutes } from "react-router-dom";
import { AuthGuard } from "../auth/AuthGuard.tsx";
import { SignIn } from "../pages/auth/signIn/SignIn.tsx";
import { SignUp } from "../pages/auth/singUp/SignUp.tsx";
import { AuthenticationPage } from "../pages/auth/AuthenticationPage.tsx";

export function Router() {
  return useRoutes([
    { path: "/", element: <AuthGuard /> },
    {
      path: "/auth",
      element: <AuthenticationPage />,
      children: [
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);
}
