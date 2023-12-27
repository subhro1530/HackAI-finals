// components/HeroSection.js

import { Box, Heading, Text, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      display="flex"
      bg={`url("/path/to/your/custom-bg-image.png")`}
      bgSize="cover"
      bgPosition="center"
      color="white"
      py={20}
      px={10}
    >
      <Box flex="1" textAlign="left">
        <Heading as="h1" size="2xl" mb={6}>
          Your Personalized Support AI
        </Heading>
        <Text fontSize="xl" mb={8}>
          Empowering you with personalized assistance and intelligent support.
        </Text>
        {/* Add more content or components as needed */}
      </Box>
      <Box flex="1" textAlign="right">
        <Image
          src="/hero-image.png" // Replace with the actual path
          alt="Hero Image"
          maxH="400px" // Adjust the max height as needed
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
