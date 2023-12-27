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
  Divider,
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
        backgroundRepeat: "no-repeat",
        color: "white",
        margin: 0,
        padding: 0,
      },
    },
  },
});

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ChakraProvider theme={theme} margin="0">
      <CSSReset />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={4}
        color="white"
        bg="transparent"
        // maxW="100vw"
        mx={0}
        // height={navbarHeight}
        flexDirection="row"
        width="100%"
      >
        <Box mb={{ base: "4", md: "0" }}>
          <ChakraLink href="/" _hover={{ borderBottom: "none" }}>
            <Image src="/logo.png" alt="Logo" width={200} height={50} />
          </ChakraLink>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          fontSize="md"
        >
          <ChakraLink href="/" _hover={{ borderBottom: "none" }}>
            <Box
              mx={4}
              _hover={{ color: "#FFB6C1", borderBottom: "2px solid #FFB6C1" }}
              transition="0.3s"
            >
              Home
            </Box>
          </ChakraLink>
          <ChakraLink href="/about" _hover={{ borderBottom: "none" }}>
            <Box
              mx={4}
              _hover={{ color: "#FFB6C1", borderBottom: "2px solid #FFB6C1" }}
              transition="0.3s"
            >
              About
            </Box>
          </ChakraLink>
          <ChakraLink href="/contact" _hover={{ borderBottom: "none" }}>
            <Box
              mx={4}
              _hover={{ color: "#FFB6C1", borderBottom: "2px solid #FFB6C1" }}
              transition="0.3s"
            >
              Contact
            </Box>
          </ChakraLink>
          <ChakraLink href="/signin" _hover={{ borderBottom: "none" }}>
            <Box
              mx={4}
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
          <ChakraLink href="/signup" _hover={{ borderBottom: "none" }}>
            <Box
              mx={4}
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
        </Box>
        {/* Hamburger icon for mobile view */}
        <Box
          display={{ base: "block", md: "none" }}
          marginBottom={{ base: "4", md: "0" }}
        >
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            onClick={handleDrawerOpen}
            variant="ghost"
            color="white"
            fontSize="24px"
            _hover={{ backgroundColor: "black", color: "white" }}
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
                <ChakraLink href="/" _hover={{ borderBottom: "none" }}>
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
        <Divider opacity="0.3" marginTop="0.5rem" />
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
