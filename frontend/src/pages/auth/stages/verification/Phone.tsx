import { Stack, Typography } from "@mui/material";
import { InputBar } from "../../../../components/InputBar.tsx";
import { ChangeEvent, useRef, useState } from "react";

export function Phone() {
  const [code, setCode] = useState(new Array(5).fill(""));
  const codeRefs = useRef<HTMLElement[]>([]);

  const verifyCode = (code: string) => {
    alert(code);
  };
  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value[index];
      return;
    }
    setCode(code.map((digit, i) => (index === i ? e.target.value : digit)));
    if (e.target.value.length == 1 && index < code.length - 1) {
      codeRefs.current[index + 1].focus();
    }
    if (index === code.length - 1) {
      verifyCode(code.join("") + e.target.value);
    }
  };

  return (
    <Stack alignItems="center">
      <Typography variant="h5" align="center" sx={{ fontWeight: 500 }}>
        Enter notification code
      </Typography>
      <Typography
        variant="subtitle1"
        color={"text.secondary"}
        align="center"
        mt={1}
        mb={2}
      >
        We sent a code to your phone number
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2} width={"70%"}>
        {code.map((_, index) => {
          return (
            <InputBar
              autoFocus={index === 0}
              inputProps={{
                max: 9,
                inputMode: "numeric",
              }}
              inputRef={(el: HTMLElement) => (codeRefs.current[index] = el)}
              key={index}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleChange(index, e);
              }}
              type={"number"}
              size={"small"}
              sx={{
                fontSize: "h1",
                width: "5rem",
                "& input": { textAlign: "center", fontSize: "2rem" },
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
              }}
              value={code[index]}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
