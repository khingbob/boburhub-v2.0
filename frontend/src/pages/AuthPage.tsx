import { Paper, Stack, Typography } from "@mui/material";
import { Brand } from "../components/Brand.tsx";
export function AuthPage() {
  return (
    <Stack alignItems="center" gap={3} p={3} sx={{ width: "100%" }}>
      <Typography variant="h3" fontWeight={400} align="center">
        Welcome to <Brand variant="h4" />
      </Typography>
      <Paper
        elevation={24}
        variant="outlined"
        sx={{ height: "85vh", width: "70%", p: 5 }}
      >
        <Stack alignItems="center">
          <Brand service="logo" sx={{ fontSize: 30 }} />
        </Stack>
      </Paper>
    </Stack>
  );
}
