import { Box, SxProps, Typography } from "@mui/material";

export function Brand({
  sx,
  service,
  ...other
}: {
  sx?: SxProps;
  service?: string;
  [key: string]: any;
}) {
  const serviceSx = {
    bgcolor: "primary.main",
    borderRadius: "5px",
    p: "1px 6px 0 5px",
    color: "black",
    boxShadow: "0 0 8px -2px #ffda00",
    fontWeight: 1000,
  };
  if (service === "logo") {
    return (
      <Typography
        sx={{ px: 1.5, py: 1, userSelect: "none", ...serviceSx, ...sx }}
        {...other}
      >
        BH
      </Typography>
    );
  }
  return (
    <Typography
      component="span"
      noWrap
      sx={{ fontWeight: 1000, userSelect: "none", ...sx }}
      {...other}
    >
      {"BOBUR "}
      <Box component="span" sx={serviceSx}>
        {service ?? "HUB"}
      </Box>
    </Typography>
  );
}
