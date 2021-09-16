import { Container, Text, Box, HStack, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const TurbineDetail = ({ turbine }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "blue.900", dark: "blue.200" };

  const router = useRouter();
  async function deleteTurbine(id) {
    const response = await fetch("/api/delete-turbine", {
      method: "DELETE",
      body: id,
      headers: {
        "Content-type": "aplication/json",
      },
    });
    const data = await response.json();
    console.log("data: in New Turbine", data);
    router.push("/");
  }

  return (
    <Container maxW="container.xxl" minH="86vh" centerContent>
      <HStack
        mt="32"
        maxW="xl"
        //borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        //bg={bgColor[colorMode]}
        boxShadow="dark-lg"
      >
        <Image
          //src="/wind_dummy.png"
          loader={() => turbine.photoUrl}
          unoptimized
          src={turbine.photoUrl}
          width={800}
          height={800}
          alt="logo"
        />
        <Box p="4" color={textColor[colorMode]}>
          <Text my="2">Manufacturer:{turbine.manufacturer}</Text>
          <Text my="2">Model: {turbine.model}</Text>
          <Text my="2">Location:{turbine.location}</Text>
          <Text my="2">Price:{turbine.price}</Text>
          <Button
            colorScheme="red"
            width="100%"
            variant="outline"
            mt="3"
            onClick={() => deleteTurbine(turbine.id)}
          >
            delete
          </Button>

          <Link href={"/UpdateTurbine/" + turbine.id}>
            <Button colorScheme="blue" width="100%" variant="outline" mt="3">
              update
            </Button>
          </Link>
        </Box>
      </HStack>
    </Container>
  );
};

export default TurbineDetail;
