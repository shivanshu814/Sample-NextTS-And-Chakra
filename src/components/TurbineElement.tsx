import { VStack, Text, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

const TurbineElement = ({ turbine }) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + turbine.id);
  }

  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "blue.900", dark: "blue.200" };

  return (
    <VStack
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor[colorMode]}
      boxShadow="dark-lg"
    >
      <Image src="/wind_dummy.png" width={250} height={250} alt="logo" />
      <Box p="4" maxW="250" color={textColor[colorMode]}>
        <Text my="1">Manufacturer:{turbine.manufacturer}</Text>
        <Text my="1">Model: {turbine.model}</Text>
        <Text my="1">Location: {turbine.location}</Text>
        <Text my="1">Price:{turbine.price}</Text>

        <Button
          colorScheme="green"
          width="100%"
          variant="outline"
          mt="3"
          onClick={showDetailsHandler}
        >
          see details
        </Button>
      </Box>
    </VStack>
  );
};

export default TurbineElement;
