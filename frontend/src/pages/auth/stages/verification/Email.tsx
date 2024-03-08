import { Stack, Typography } from "@mui/material";
import { MarkEmailUnread } from "@mui/icons-material";

export function Email() {
  return (
    <Stack alignItems="center">
      <Typography variant="h4" align="center" sx={{ fontWeight: 500 }}>
        Verify your email
      </Typography>
      <Typography
        variant="subtitle1"
        color={"text.secondary"}
        align="center"
        mt={1}
        mb={4}
      >
        Check your email inbox for a verification link
      </Typography>
      <MarkEmailUnread sx={{ fontSize: "70px" }} />
    </Stack>
  );
}
