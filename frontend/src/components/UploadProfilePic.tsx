import { CameraAltOutlined, Person } from "@mui/icons-material";
import { Stack, SxProps, TextField } from "@mui/material";
import { useRef } from "react";

export default function UploadProfilePic({
  sx,
  fontSize,
  getFieldProps,
}: {
  sx?: SxProps;
  fontSize?: number;
  getFieldProps: any;
  setFieldValue: (field: string, value: string) => void;
}) {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleChange = () => {
    //#TODO: upload image to server
  };
  return (
    <Stack
      sx={{
        cursor: "pointer",
        position: "relative",
        backgroundColor: "input.main",
        borderRadius: "1000px",
        color: "text.main",
        p: "1rem",
        fontSize: fontSize + "rem",
        ...sx,
      }}
      onClick={() => {
        ref.current?.click();
      }}
    >
      <TextField
        inputRef={(inputRef) => {
          ref.current = inputRef;
        }}
        type="file"
        inputProps={{
          accept: "image/*",
          capture: "user",
          onChange: handleChange,
        }}
        sx={{ display: "none" }}
      />
      {getFieldProps("profile_pic").value ? (
        <img
          src={getFieldProps("profile_pic").value}
          alt="profile"
          style={{
            aspectRatio: 1,
            height: fontSize + "rem",
            objectFit: "cover",
            borderRadius: "1000px",
          }}
        />
      ) : (
        <Person fontSize="inherit" />
      )}
      <CameraAltOutlined
        sx={{
          fontSize: (fontSize ?? 1) * 0.4 + "rem",
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      />
    </Stack>
  );
}
