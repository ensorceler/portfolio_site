import React from "react";
import {
  Center,
  Circle,
  Container,
  Box,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import Intro from "./Intro";
import Techstack from "./Techstack";

const Bio = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container minWidth="inherit">
      <HStack
        //border="1px solid black"
        justify="space-between"
      >
        <Box>
          <Text fontSize="4xl" fontWeight="500">
            Shakil Ahmed
          </Text>
          <Text fontSize="lg" fontWeight={400}>
            Fullstack Developer (Blockchain Enthusiast)
          </Text>
        </Box>

        <Center pr={8}>
          <Circle
            marginTop={10}
            w="150px"
            h="150px"
            bg={colorMode == "light" ? "gray.500" : "gray.200"}
            boxShadow="2xl"
            marginBottom={10}
          ></Circle>
        </Center>
      </HStack>

      <Intro />
      <Techstack />

      <VStack marginTop={10}>
        <Heading
          alignSelf="flex-start"
          fontSize="lg"
          pb="2px"
          borderBottom={
            colorMode == "light" ? "3px solid black" : "3px solid white"
          }
        >
          I {colorMode == "light" ? "🖤" : "💙"}
        </Heading>
        <Text alignSelf="flex-start">
          &ensp; Watching Anime , Reading Manga, Music , Drawing , Playing
          Guitar
        </Text>
      </VStack>
    </Container>
  );
};
export default Bio;
