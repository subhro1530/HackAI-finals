// components/Navbar.js

import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  ChakraProvider,
  CSSReset,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'url("/navbar_bg.png")',
        bgSize: "cover",
        bgPosition: "center",
        color: "white",
        margin: 0,
        padding: 0,
      },
    },
  },
});

const navbarHeight = "60px"; // Set your desired height

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
              p={4}
              maxH="10vh"
        color="white"
        bg="transparent"
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
        maxW="95vw"
        mx={0}
        height={navbarHeight}
      >
        <Box>
          <ChakraLink href="/">
            <Image src="/path/to/logo.png" alt="Logo" width={50} height={50} />
          </ChakraLink>
        </Box>
        <Spacer />
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          fontSize="md"
        >
          <ChakraLink href="/">
            <Box
              mx={4}
              _hover={{ color: "#FFB6C1", borderBottom: "2px solid #FFB6C1" }}
              transition="0.3s"
            >
              Home
            </Box>
          </ChakraLink>
          <ChakraLink href="/about">
            <Box
              mx={4}
              _hover={{ color: "#FFB6C1", borderBottom: "2px solid #FFB6C1" }}
              transition="0.3s"
            >
              About
            </Box>
          </ChakraLink>
          <ChakraLink href="/contact">
            <Box
              mx={4}
              _hover={{ color: "#FFB6C1", borderBottom: "2px solid #FFB6C1" }}
              transition="0.3s"
            >
              Contact
            </Box>
          </ChakraLink>
          <ChakraLink href="/signin">
            <Box
              mx={4}
              _hover={{
                transform: "scale(1.05)",
                background: "white",
                color: "black",
              }}
              transition="0.3s"
              paddingX={4}
              paddingY={2}
              borderRadius="md"
              cursor="pointer"
            >
              Sign In
            </Box>
          </ChakraLink>
          <ChakraLink href="/signup">
            <Box
              mx={4}
              _hover={{
                transform: "scale(1.05)",
                background: "white",
                color: "black",
              }}
              transition="0.3s"
              paddingX={4}
              paddingY={2}
              borderRadius="md"
              cursor="pointer"
            >
              Sign Up
            </Box>
          </ChakraLink>
        </Box>
        {/* Hamburger icon for mobile view */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            onClick={handleDrawerOpen}
            variant="ghost"
            color="white"
            fontSize="24px"
          />
          <Drawer
            isOpen={isDrawerOpen}
            placement="right"
            onClose={handleDrawerClose}
          >
            <DrawerOverlay />
            <DrawerContent bgGradient="linear(to-r, #00001C, #000000)">
              <DrawerCloseButton color="white" />
              <DrawerHeader color="white">Menu</DrawerHeader>
              <DrawerBody>
                <ChakraLink href="/">
                  <Box
                    py={2}
                    _hover={{
                      color: "#FFB6C1",
                      borderBottom: "2px solid #FFB6C1",
                    }}
                    transition="0.3s"
                  >
                    Home
                  </Box>
                </ChakraLink>
                <ChakraLink href="/about">
                  <Box
                    py={2}
                    _hover={{
                      color: "#FFB6C1",
                      borderBottom: "2px solid #FFB6C1",
                    }}
                    transition="0.3s"
                  >
                    About
                  </Box>
                </ChakraLink>
                <ChakraLink href="/contact">
                  <Box
                    py={2}
                    _hover={{
                      color: "#FFB6C1",
                      borderBottom: "2px solid #FFB6C1",
                    }}
                    transition="0.3s"
                  >
                    Contact
                  </Box>
                </ChakraLink>
                <ChakraLink href="/signin">
                  <Box
                    py={2}
                    _hover={{
                      transform: "scale(1.05)",
                      background: "white",
                      color: "black",
                    }}
                    transition="0.3s"
                    borderRadius="md"
                    cursor="pointer"
                  >
                    Sign In
                  </Box>
                </ChakraLink>
                <ChakraLink href="/signup">
                  <Box
                    py={2}
                    _hover={{
                      transform: "scale(1.05)",
                      background: "white",
                      color: "black",
                    }}
                    transition="0.3s"
                    borderRadius="md"
                    cursor="pointer"
                  >
                    Sign Up
                  </Box>
                </ChakraLink>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
