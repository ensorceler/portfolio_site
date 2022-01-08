import React from "react";
import {
  Button,
  Center,
  HStack,
  Container,
  Box,
  Stack,
  Link,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import lightIcon from "../../public/sun.png";
import darkIcon from "../../public/moon.png";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import catIcon from "../../public/coder_kitty.png";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import CoderCat from "./CoderCat";

interface LinkItemProps {
  href: string;
  path?: string;
  _target?: string;
  children: React.ReactNode;
}
const LinkItemColor = {
  darkModeBg: "blue.400",
  darkModeColor: "whiteAlpha.800",
  lightModeBg: "gray.200",
  lightModeColor: "blackAlpha.800",
};
const LinkItem = ({
  href,
  path,
  _target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path == href;
  const { colorMode } = useColorMode();
  const bgCondition =
    colorMode == "light" ? LinkItemColor.lightModeBg : LinkItemColor.darkModeBg;
  const colorCondition =
    colorMode == "light"
      ? LinkItemColor.lightModeColor
      : LinkItemColor.darkModeColor;
  return (
    <NextLink href={href} passHref>
      <Link
        rounded="md"
        py={2}
        px={2}
        bg={active ? bgCondition : undefined}
        color={active ? colorCondition : undefined}
        textUnderlineOffset="5px"
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center>
      <Container
        display="flex"
        justifyContent="space-between"
        bg="blackAlpha.300"
        minWidth="800px"
        h={16}
        rounded="lg"
      >
        <Container maxW="max-content" display="flex">
          <HStack mr={4}>
            <CoderCat />
            <Text
              fontWeight={500}
              width="120px"
              margin="0px"
              fontSize="18px"
              overflow="visible"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/");
              }}
            >
              Shakil Ahmed
            </Text>
          </HStack>

          <HStack>
            <LinkItem href="/projects" path={router.route}>
              Projects
            </LinkItem>
            <LinkItem href="/blogs" path={router.route}>
              Blogs
            </LinkItem>
            <LinkItem href="/work" path={router.route}>
              Work
            </LinkItem>
          </HStack>
        </Container>

        <Container display="flex" alignItems="center" justifyContent="right">
          <HStack>
            <IconButton
              isRound
              size="lg"
              variant="ghost"
              aria-label="github"
              icon={<FaGithub />}
            />
            <IconButton
              isRound
              size="lg"
              variant="ghost"
              aria-label="twitter"
              icon={<FaTwitter />}
            />
            <IconButton
              isRound
              size="lg"
              variant="ghost"
              aria-label="discord"
              icon={<FaDiscord />}
            />
            <Button
              pt="20px"
              pb="20px"
              marginBottom={5}
              onClick={toggleColorMode}
            >
              <Image
                src={colorMode == "dark" ? lightIcon : darkIcon}
                height="30px"
                width="30px"
              />
            </Button>
          </HStack>
        </Container>
      </Container>
    </Center>
  );
};

export default Nav;
