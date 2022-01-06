import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import theme from "../themes/theme";
import {
  ChakraProvider,
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import "@fontsource/m-plus-rounded-1c/400.css";
import "@fontsource/m-plus-rounded-1c/500.css";
import "@fontsource/m-plus-rounded-1c/700.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
