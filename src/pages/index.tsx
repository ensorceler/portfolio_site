import type { NextPage } from "next";
import Head from "next/head";
import { Container, Box, Button, useColorMode } from "@chakra-ui/react";
import Nav from "../components/Nav";
import lightIcon from "../public/sun.png";
import darkIcon from "../public/moon.png";
import catIcon from "../public/coder_kitty.png";
import Image from "next/image";
import Bio from "../components/Bio";

const Home: NextPage = () => {
  return (
    <Container minWidth="600px" marginTop={10}>
      <Bio />
    </Container>
  );
};

export default Home;
