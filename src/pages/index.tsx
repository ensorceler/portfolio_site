import type { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import Bio from "../components/Bio";

const Home: NextPage = () => {
  return (
    <Container minWidth="600px" marginTop={10}>
      <Bio />
    </Container>
  );
};

export default Home;
