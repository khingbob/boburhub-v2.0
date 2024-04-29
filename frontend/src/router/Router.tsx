import { useRoutes } from "react-router-dom";
import { AuthGuard } from "../auth/AuthGuard.tsx";
import { AuthenticationPage } from "../pages/auth/AuthenticationPage.tsx";
import Home from "../pages/Home.tsx";

export function Router() {
  return useRoutes([
    { path: "/", element: <AuthGuard /> },
    {
      path: "/auth",
      element: <AuthenticationPage />,
      children: [{ path: "signin" }, { path: "signup" }],
    },
    {
      path: "/home", element: <Home />
    }
  ]);
}
