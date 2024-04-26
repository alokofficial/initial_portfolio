import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Alok Kumar !!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React JS !";  
const LandingSection = () => (


  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >

    <VStack spacing={5} alignItems="center">
      <Avatar
        
        width="300px"
        height="300px"
        name="Alok Kumar"
        borderRadius="50%"
        borderColor="green.200"
        borderWidth="5px"
        
        src="https://avatars.githubusercontent.com/u/22686351?v=4"
      />
      <Heading size="xl">{greeting}</Heading>
      <Heading size="4xl">{bio1}</Heading>
      <Heading size="3xl">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
