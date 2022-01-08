import React from "react";
import { Box, Container, Center } from "@chakra-ui/react";
import catImage from "../../public/coder_kitty.png";
import catInvertedImage from "../../public/coder_kitty_inverted.png";
import Image from "next/image";

const CoderCat = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 100, y: 0 });
  return (
    <Center
      onMouseMove={(e: any) => {
        console.log(
          `offsetX : ${e.nativeEvent.offsetX}  offsetY: ${e.nativeEvent.offsetY}`
        );

        setMousePosition({
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        });
      }}
      rounded="lg"
      h="58px"
      w="66px"
    >
      {mousePosition.x >= 33 ? (
        <Image src={catImage} width={50} height={50} />
      ) : (
        <Image src={catInvertedImage} width={50} height={50} />
      )}
    </Center>
  );
};

export default CoderCat;
