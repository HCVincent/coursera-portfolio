import React from "react";
import { Avatar, Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack alignItems="center">
      <Image src="https://i.pravatar.cc/150?img=7" borderRadius="full" />
      <Text mt={3} fontSize="15pt" fontWeight="bold">
        {greeting}
      </Text>
      <Text fontSize="60pt" fontWeight="bold" mt={10}>
        {bio1}
      </Text>
      <Text fontSize="60pt" fontWeight="bold">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
