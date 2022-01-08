import reactLogo from "../public/atom.png";
import typescriptLogo from "../public/typescript.png";
import nodejsLogo from "../public/nodejs .png";
import pythonLogo from "../public/python.png";
import rustLogo from "../public/rust_lang.png";
import dockerLogo from "../public/docker.png";
import cssLogo from "../public/css.png";
import javascriptLogo from "../public/javascript.png";
import nextjsLogo from "../public/nextJS.svg";
import linuxLogo from "../public/linux_cool.png";
import cppLogo from "../public/cpp.png";
import postgresLogo from "../public/postgre.png";
import solidityLogo from "../public/solidity_svg.svg";
import redisLogo from "../public/redis.png";
import { useColorMode } from "@chakra-ui/react";
import NextImage from "next/image";

interface TechItemProps {
  logo: StaticImageData;
  label: string;
  svg?: boolean;
}
const techItems: Array<TechItemProps> = [
  {
    logo: reactLogo,
    label: "React",
  },
  {
    logo: typescriptLogo,
    label: "Typescript",
  },
  {
    logo: nextjsLogo as any,
    label: "NextJs",
    svg: true,
  },
  {
    logo: nodejsLogo,
    label: "NodeJs",
  },
  {
    logo: postgresLogo,
    label: "PostgreSQL",
  },
  {
    logo: javascriptLogo,
    label: "Javascript",
  },
  {
    logo: dockerLogo,
    label: "Docker",
  },
  {
    logo: redisLogo,
    label: "Redis",
  },
  {
    logo: pythonLogo,
    label: "Python",
  },
  {
    logo: solidityLogo,
    label: "Solidity",
  },
  {
    logo: rustLogo,
    label: "Rust Lang",
  },
  {
    logo: cppLogo,
    label: "C++",
  },
  {
    logo: linuxLogo,
    label: "Linux",
  },
];

export default techItems;
