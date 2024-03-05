import { Box, Typography } from "@mui/material";

export function Brand({
  sx,
  service,
  ...other
}: {
  sx?: React.CSSProperties;
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
    return <Box sx={{ ...sx, ...serviceSx }}>BH</Box>;
  }
  return (
    <Typography
      component="span"
      noWrap
      sx={{ fontWeight: 1000, ...sx }}
      {...other}
    >
      {service !== "logo" && "BOBUR"}{" "}
      <Box
        component="span"
        sx={{
          bgcolor: "primary.main",
          borderRadius: "5px",
          p: "1px 6px 0 5px",
          color: "black",
          boxShadow: "0 0 8px -2px #ffda00",
        }}
      >
        {service === "logo" ? "BH" : service ?? "HUB"}
      </Box>
    </Typography>
  );
}
