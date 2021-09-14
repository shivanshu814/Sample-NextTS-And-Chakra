import { Container, Text, Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";

const TurbineDetail = ({ turbine }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "blue.900", dark: "blue.200" };
  return (
    <Container maxW="container.xxl" minH="86vh" centerContent>
      <HStack
        mt="32"
        maxW="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor[colorMode]}
        boxShadow="dark-lg"
      >
        <Image src="/wind_dummy.png" width={800} height={800} alt="logo" />
        <Box p="4" color={textColor[colorMode]}>
          <Text my="1">Manufacturer:{turbine.manufacturer}</Text>
          <Text my="1">Model: {turbine.model}</Text>
          <Text my="1">Location:{turbine.location}</Text>
          <Text my="1">Price:{turbine.price}</Text>
        </Box>
      </HStack>
    </Container>
  );
};

export default TurbineDetail;
