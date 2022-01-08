import React from "react";
import {
  Container,
  Heading,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import Intro from "./Intro";
import Techstack from "./Techstack";
import NextImage from "next/image";
import whiteCat from "../public/white_cat_transparent.png";
import brownCat from "../public/brown_cat.png";
import grayCat from "../public/gray_cat.png";
import Header from "./Header";

const Bio = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container minWidth="inherit">
      <Header />
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
