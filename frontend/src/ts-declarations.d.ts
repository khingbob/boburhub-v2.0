import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    input?: PaletteColor;
  }
  interface PaletteOptions {
    input?: PaletteColorOptions;
  }
}
