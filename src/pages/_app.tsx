import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Tabby</title>
        <link
          rel="icon"
          href="assets/images/tabby_hero.png"
          type="image/x-icon"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
