import React from "react";
import { VStack, Heading, Button, Text, useColorMode } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

const Intro = () => {
  const { colorMode } = useColorMode();
  return (
    <React.Fragment>
      <VStack>
        <Heading
          alignSelf="flex-start"
          fontSize="lg"
          pb="2px"
          borderBottom={
            colorMode == "light" ? "3px solid black" : "3px solid white"
          }
        >
          Intro
        </Heading>
        <Text>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called Inkdrop.
        </Text>

        <Button colorScheme="teal" rightIcon={<IoIosArrowForward />}>
          My Portfolio
        </Button>
      </VStack>
    </React.Fragment>
  );
};

export default Intro;
