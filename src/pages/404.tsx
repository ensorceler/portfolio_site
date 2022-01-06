import {
  Box,
  Text,
  Center,
  Link,
  Container,
  HStack,
  Image,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import monstermusume from "../public/404.gif";
import NextLink from "next/link";

interface LinkItemProps {
  children: React.ReactNode;
  href: string;
}

const LinkItem = ({ href, children }: LinkItemProps) => {
  return (
    <NextLink href={href} passHref>
      <Link textDecoration="underline" textUnderlineOffset="3px">
        {children}
      </Link>
    </NextLink>
  );
};

const NotFound = () => {
  const { colorMode } = useColorMode();

  return (
    <Container marginTop={40}>
      <VStack
        justify="center"
        rounded="lg"
        bgGradient={
          colorMode == "light"
            ? "linear-gradient(to-r,gray.200,pink.100)"
            : "linear-gradient(to-r,purple.500,purple.300)"
        }
        h={80}
        w={80}
        boxShadow="2xl"
      >
        <HStack justify="center">
          <Image
            src="https://i.imgur.com/s7bhCJg.gif"
            alt="404 error"
            rounded="md"
            height="180px"
            width="160px"
          />
        </HStack>
        <HStack justify="center">
          <Text fontSize="xl" fontWeight={600}>
            {" "}
            404 Error !!!
          </Text>
        </HStack>
        <HStack justify="center">
          <Text>
            Go back to the <LinkItem href="/">Home</LinkItem> page
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default NotFound;
