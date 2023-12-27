import React from "react";
import { Box, Image, Text, Button, HStack } from "@chakra-ui/react";

const AboutCard = () => {
  return (
    <Box
      p={4}
      boxShadow="lg"
      borderRadius="md"
      width="17em"
      height="22.5em"
      background="#171717"
      transition="1s ease-in-out"
      clipPath="polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px)"
      borderTopRightRadius="20px"
      borderBottomLeftRadius="20px"
      display="flex"
      flexDirection="column"
    >
      <Image
        src=""
        alt="Profile Image"
        borderRadius="full"
        boxSize="4.8em"
        mb={4}
      />

      <Text
        fontSize="xl"
        fontWeight="bold"
        mb={2}
        color="white"
        textAlign="center"
      >
        About Me
      </Text>

      <Text
        mb={4}
        fontWeight="400"
        color="white"
        textAlign="center"
        fontSize="0.72em"
        margin="1em"
      >
        Hi there! I'm Walter, a versatile designer passionate about visually
        narrating stories. My expertise lies in crafting responsive websites and
        intuitive user interfaces.
      </Text>

      <HStack
        spacing={4}
        mb={4}
        marginTop="1em"
        display="flex"
        justifyContent="center"
      >
        {/* Add other social media links as needed */}
        <a
          href=""
          color="white"
          transition="0.4s ease-in-out"
          _hover={{ color: "red" }}
        >
          <Box as="svg" height="16px" width="16px" fill="currentColor">
            {/* GitHub SVG path */}
          </Box>
        </a>
      </HStack>

      <Button
        colorScheme="teal"
        variant="solid"
        padding="0.8em 1.7em"
        borderRadius="25px"
        fontWeight="bold"
        background="#ffffff"
        color="rgb(0, 0, 0)"
        transition="0.4s ease-in-out"
        display="block"
        margin="auto"
        _hover={{ background: "red", color: "white", cursor: "pointer" }}
      >
        View Portfolio
      </Button>
    </Box>
  );
};

export default AboutCard;
