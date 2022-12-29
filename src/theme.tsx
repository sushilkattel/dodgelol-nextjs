import { extendTheme, ThemeConfig} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  config,
  styles: {
    global: {
      body: {
        bg: "#15172A",
      },
    },
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
      },
      heroGradientStart: {
        default: "#7928CA",
      },
      heroGradientEnd: {
        default: "#FF0080",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
