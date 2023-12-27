// pages/_app.js

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
