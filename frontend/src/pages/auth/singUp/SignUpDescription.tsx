import { Box, Fade, Stack, Typography } from "@mui/material";
import { AccountCircle, AdminPanelSettings, Lock } from "@mui/icons-material";
import { Brand } from "../../../components/Brand.tsx";
import { FadeType } from "../AuthenticationPage.tsx";

export function SignUpDescription({ fade }: { fade: FadeType }) {
  const isSignup = window.location.pathname === "/auth/signup";
  return (
    <Box
      sx={{
        transition: "width 0.2s",
        backgroundColor: "background.secondary",
        width: isSignup ? "50%" : 0,
        height: "100%",
        padding: isSignup ? { xs: 5, sm: 6 } : 0,
        p: {
          fontSize: "1.2rem",
        },
        svg: {
          fontSize: "3rem",
        },
        spacing: 5,
        color: "text.secondary",
      }}
    >
      {window.location.pathname === "/auth/signup" && (
        <Fade in={fade.state} timeout={fade.timeout}>
          <Stack width="100%" height="100%" spacing={10} alignItems="center">
            <Stack width="100%">
              <Brand variant="h6" color="text.primary" service="ID" />
              <Typography color="text.primary">
                Sign up for your BOBUR ID
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AccountCircle />
              <Typography>Single account for all BOBUR services</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Lock />
              <Typography>Your personal data is safe and secure</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AdminPanelSettings />
              <Typography>Even Bobur doesn't have access to it</Typography>
            </Stack>
          </Stack>
        </Fade>
      )}
    </Box>
  );
}
