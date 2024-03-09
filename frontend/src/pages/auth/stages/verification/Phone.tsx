import { Stack, Typography } from "@mui/material";
import { InputBar } from "../../../../components/InputBar.tsx";
import { useRef, useState } from "react";

export function Phone() {
  const [code, setCode] = useState(new Array(5).fill(""));
  const codeRefs = useRef<HTMLInputElement[]>([]);

  const verifyCode = (code: string) => {
    alert(code);
  };
  const handleClick = (index: number, e: KeyboardEvent) => {
    if (e.key === "Backspace" && index > 0) {
      if (codeRefs.current[index].value.length > 0) {
        setCode(code.map((digit, i) => (i === index ? "" : digit)));
        codeRefs.current[index - 1].focus();
        return;
      } else {
        setCode(code.map((digit, i) => (i === index - 1 ? "" : digit)));
        codeRefs.current[index - 1].focus();
        return;
      }
    }

    setCode(code.map((digit, i) => (index === i ? e.key : digit)));

    if (index === code.length - 1) {
      verifyCode(code.join("") + e.key);
      return;
    }
    codeRefs.current[index + 1].focus();
  };

  return (
    <Stack alignItems="center">
      <Typography variant="h5" align="center" sx={{ fontWeight: 500, mt: 3 }}>
        Enter notification code
      </Typography>
      <Typography
        variant="subtitle1"
        color={"text.secondary"}
        align="center"
        mt={1}
        mb={4}
      >
        We sent a code to your phone number
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2} width={"70%"}>
        {code.map((_, index) => {
          return (
            <InputBar
              autoFocus={index === 0}
              inputRef={(el: HTMLInputElement) =>
                (codeRefs.current[index] = el)
              }
              inputProps={{ inputMode: "numeric" }}
              key={index}
              onKeyDown={(e: KeyboardEvent) => {
                handleClick(index, e);
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
