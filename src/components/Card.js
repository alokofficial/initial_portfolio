import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <VStack
      align="stretch"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      bg={isHovered ? "gray.300" : "white"}
      color={isHovered ? "black" : "gray.700"}
      transition="background-color 0.1s ease"
      // cursor="pointer"
      onClick={() => window.open(link, "_blank")}
      _hover={{ bg: "gray.300" }}
      as="a"
      role="group"
      spacing={4}
      w="full"
      h="full"
      textAlign="left"
      p={8}
      borderWidth="1px"
      rounded="lg"
      shadow="md"
    >
      <Image src={imageSrc} alt={title} />
      <Heading as="h3" size="md">
        {title}
        <br />
      </Heading>

      <Text>{description}</Text>

      <HStack justify="flex-end">
        <FontAwesomeIcon
          icon={faArrowRight}
          color={isHovered ? "black" : "gray.700"}
          size="1x"
          transition="color 0.3s ease"
          cursor="pointer"
          
          _hover={{ color: "black" }}
          />
        <Text color={isHovered ? "blue" : "gray.700"} cursor="pointer" onClick={() => window.open("www.google.com", "_blank")}>View Project</Text>
          
      </HStack>
    </VStack>
  );
};

export default Card;
