// components/HeroSection.js

import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }} // Stack on small screens, row on medium and larger screens
      bg={`url("/path/to/your/custom-bg-image.png")`}
      bgSize="cover"
      bgPosition="center"
      color="white"
      py={{ base: 10, md: 20 }} // Adjust padding for different screen sizes
      px={5}
      minHeight={{ base: "auto", md: "80vh" }} // Adjust height for different screen sizes
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1"
      />
      <Box
        flex="1"
        textAlign={{ base: "center", md: "left" }} // Center on small screens, left on medium and larger screens
        bg="rgba(255, 255, 255, 0.2)" // Translucent background color
        borderRadius="20px" // Adjust the border radius as needed
        p={{ base: 4, md: 8 }} // Adjust padding for different screen sizes
        zIndex="1" // Ensure content is above the gradient overlay
      >
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
          Your Personalized Support AI
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} mb={{ base: 6, md: 8 }}>
          Experience unparalleled personalized support with our advanced AI
          system. Our chatbot is designed to cater to your unique needs,
          providing intelligent assistance 24/7.
        </Text>
        <Link href="/chat">
          <Button colorScheme="purple" size={{ base: "md", md: "lg" }}>
            Chat Now
          </Button>
        </Link>
        {/* Add more content or components as needed */}
      </Box>
      <Box flex="1" textAlign="center" mt={{ base: 4, md: 0 }}>
        <Image
          src="https://www.lg.com/us/content/img/support/customer-care-portfolio/Illust-TelePresence3.png" // Replace with the actual path
          alt="Hero Image"
          maxH={{ base: "200px", md: "400px" }} // Adjust max height for different screen sizes
          mx="auto" // Center the image on small screens
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
