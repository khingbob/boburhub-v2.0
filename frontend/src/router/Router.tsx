import { useRoutes } from "react-router-dom";
import { AuthGuard } from "../auth/AuthGuard.tsx";
import { AuthPage } from "../pages/auth/AuthPage.tsx";

export function Router() {
  return useRoutes([
    { path: "/", element: <AuthGuard /> },
    { path: "/auth", element: <AuthPage /> },
  ]);
}
