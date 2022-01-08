import React from "react";

import {
  Center,
  Circle,
  Box,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextImage from "next/image";
import whiteCat from "../public/white_cat_transparent.png";
import brownCat from "../public/brown_cat.png";
import grayCat from "../public/gray_cat.png";

const Header = () => {
  return (
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
          bg="transparent"
          marginBottom={10}
        >
          <NextImage src={whiteCat} width="150px" height="150px" />
        </Circle>
      </Center>
    </HStack>
  );
};

export default Header;
