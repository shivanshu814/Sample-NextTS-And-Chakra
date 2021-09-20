import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme";
import "../theme/style.css";
import { AppProps } from "next/app";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
