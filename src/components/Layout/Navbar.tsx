import Link from "next/link";
import Image from "next/image";
import { Box, HStack, Spacer } from "@chakra-ui/layout";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.500" };
  const textColor = { light: "blue.900", dark: "blue.200" };
  return (
    <HStack p="2">
      <Box bg={bgColor[colorMode]} p="2" borderRadius="3xl">
        <Link href="/">
          <a>
            <Image src="/Nefino_logo.png" width={130} height={35} alt="logo" />
          </a>
        </Link>
      </Box>
      <Spacer />
      <DarkModeSwitch />
      <Link href="/NewTurbine">
        <Button colorScheme="teal" variant="outline">
          Add Turbine
        </Button>
      </Link>
    </HStack>
  );
};

export default Navbar;
