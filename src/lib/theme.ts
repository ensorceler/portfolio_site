import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  body: "'M PLUS Rounded 1c'",
};

const theme = extendTheme({
  config,
  fonts,
});

export default theme;
