import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack alignItems="start" backgroundColor="white" borderRadius="10px">
      <Image src={imageSrc} borderRadius="10px" />
      <Text color="black" p={2} fontSize="20pt" fontWeight="bold">
        {title}
      </Text>
      <Text color="gray" p={2}>
        {description}
      </Text>
      <HStack alignItems="center" gap={5} p={2}>
        <Text color="black">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
