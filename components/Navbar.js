// components/Navbar.js

import Link from "next/link";
import { Box, Flex, Spacer, ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'url("/path/to/navbar-background.jpg")',
        bgSize: "cover",
        bgPosition: "center",
      },
    },
  },
});

const Navbar = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={4}
        color="white"
        bg="transparent"
      >
        <Box>
          <Link href="/">
            <a>
              <img src="/path/to/logo.png" alt="Logo" />
            </a>
          </Link>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }} alignItems="center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Box>
        <Box display={{ base: "none", md: "flex" }} alignItems="center">
          <Box
            mx={4}
            _hover={{ transform: "translateY(-2px)" }}
            background="linear-gradient(to right, #1a1a1a, #4b0082)"
            paddingX={3}
            paddingY={1}
            borderRadius="md"
          >
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </Box>
          <Box
            mx={4}
            _hover={{ transform: "translateY(-2px)" }}
            background="linear-gradient(to right, #1a1a1a, #4b0082)"
            paddingX={3}
            paddingY={1}
            borderRadius="md"
          >
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
