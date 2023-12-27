// components/Footer.js
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <Flex
      as="footer"
      bgColor="rgb(0,0,0,0.95)"
      color="white"
      pt={4}
      pl={4}
      pr={4}
      textAlign="center"
      direction="column"
      alignItems="center"
      justify="center"
      width="100vw"
    >
      <Box>
        <Link href="/">
          <Image src="/icon.png" alt="Logo" width={50} height={50}/>
        </Link>
      </Box>

      <Flex alignItems="center" mt={4}>
        <Link href="https://www.facebook.com/" target="_blank" mr={4}>
          <FaFacebook size="1.5em" color="white" />
        </Link>
        <Link href="https://twitter.com/" target="_blank" mr={4}>
          <FaTwitter size="1.5em" color="white" />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagram size="1.5em" color="white" _hover="bgColor: pink"/>
        </Link>
      </Flex>

      <Flex direction="column" mt={4}>
        <Link href="/" mb={2} color="white">
          Home
        </Link>
        <Link href="/about" mb={2} color="white">
          About
        </Link>
        <Link href="/contact" color="white">
          Contact
        </Link>
      </Flex>

      <Text fontSize="sm" mt={4} bgColor="black" w="100vw" p="5px 0px">
        © {new Date().getFullYear()} ACNS. All rights reserved. | Designed by{" "}
        <Link
          href="https://acodernamedsubhro.web.app/"
          target="_blank"
          color="teal.300"
        >
          ACNS
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
