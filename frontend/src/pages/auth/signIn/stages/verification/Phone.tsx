import { Stack, Typography } from "@mui/material";
import { InputBar } from "../../../../../components/InputBar.tsx";
import { useRef, useState } from "react";

export function Phone() {
  const [code, setCode] = useState(new Array(5).fill(""));
  const codeRefs = useRef<HTMLInputElement[]>([]);

  const verifyCode = (code: string) => {
    console.log(code);
  };
  const handleClick = (index: number, e: KeyboardEvent) => {
    const copy = [...code];
    if (e.key === "Backspace") {
      if (index > 0) {
        codeRefs.current[index - 1].focus();
      }
      copy[index] = "";
      setCode(copy);
      return;
    }

    if (isNaN(Number(e.key))) {
      return;
    }

    if (copy[index] === "") {
      copy[index] = e.key;
    }
    setCode(copy);
    if (index === code.length - 1) {
      verifyCode(copy.join(""));
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
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 2 }}
        width={"100%"}
      >
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
                width: { xs: "3.5rem", sm: "3.5rem" },
                height: { xs: "4.5rem", sm: "5rem" },
                "& input": {
                  textAlign: "center",
                  fontSize: {
                    xs: "2rem",
                  },
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
