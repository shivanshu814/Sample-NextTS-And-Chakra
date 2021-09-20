import {
  Container,
  Text,
  Heading,
  Box,
  HStack,
  Button,
  Image,
  VStack,
  Stack,
} from "@chakra-ui/react";
//import Image from "next/image";
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
      <Stack
        mt="16"
        mb="8"
        w={["85vw", "85vw", "85vw", "85vw", "85vw"]}
        //borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        //bg={bgColor[colorMode]}
        boxShadow="dark-lg"
        direction={["column", "row", "row", "row", "row"]}
      >
        {/* <Image
          //src="/wind_dummy.png"
          loader={() => turbine.photoUrl}
          unoptimized
          src={turbine.photoUrl}
          width={800}
          height={800}
          alt="logo"
        /> */}
        <Image
          boxSize={["85vw", "45vw", "45vw", "45vw", "45vw"]}
          objectFit="cover"
          src={turbine.photoUrl}
          fallbackSrc="/wind_dummy.png"
          //display={["none", "block", "block", "block"]}
        />
        <VStack
          p="4"
          color={textColor[colorMode]}
          //w={["80vw", "60vw", "50vw", "40vw"]}
          w="100%"
          textAlign="center"
          justifyContent="center"
          spacing="4"
        >
          <Text>Manufacturer:{turbine.manufacturer}</Text>
          <Text>Model: {turbine.model}</Text>
          <Text>Location:{turbine.location}</Text>
          <Text>Price:{turbine.price}</Text>
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
        </VStack>
      </Stack>
      <VStack alignItems="flex-start" px={["8", "16", "32", "32"]} mb="32">
        <Heading>Lorem ipsum dolor sit.</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          impedit reprehenderit veritatis exercitationem architecto accusantium
          voluptatibus, nemo natus sed sequi officiis at. Delectus nam quae
          asperiores eos velit, blanditiis aperiam, dolorem fugit soluta rerum
          repellendus voluptatum voluptate numquam? Fugit, expedita minus cum
          exercitationem architecto dignissimos nemo sapiente? Explicabo autem
          porro quam, repudiandae nihil necessitatibus voluptates dignissimos
          exercitationem dolores natus sapiente accusantium eaque. Cumque, sunt
          earum? Accusantium, porro.
        </Text>
        <Text>
          Amet odio, eos, sapiente magni ipsum perferendis laboriosam soluta
          ipsam cum debitis optio cupiditate ipsa facilis ullam. Ab itaque
          labore sequi facilis perspiciatis explicabo ut consectetur ullam
          deleniti assumenda deserunt quasi qui excepturi minus, atque
          doloremque officiis doloribus! Saepe voluptatibus totam, possimus et
          ea error adipisci quas vel officia voluptatem facilis, consequuntur
          qui, ullam consectetur est hic dolorum corrupti vero dicta doloribus
          eaque? Laboriosam repellat assumenda cupiditate recusandae ducimus
          obcaecati voluptatum iusto est.
        </Text>
        <Heading>Lorem ipsum dolor sit.</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          impedit reprehenderit veritatis exercitationem architecto accusantium
          voluptatibus, nemo natus sed sequi officiis at. Delectus nam quae
          asperiores eos velit, blanditiis aperiam, dolorem fugit soluta rerum
          repellendus voluptatum voluptate numquam? Fugit, expedita minus cum
          exercitationem architecto dignissimos nemo sapiente? Explicabo autem
          porro quam, repudiandae nihil necessitatibus voluptates dignissimos
          exercitationem dolores natus sapiente accusantium eaque. Cumque, sunt
          earum? Accusantium, porro. Amet odio, eos, sapiente magni ipsum
          perferendis laboriosam soluta ipsam cum debitis optio cupiditate ipsa
          facilis ullam. Ab itaque labore sequi facilis perspiciatis explicabo
          ut consectetur ullam deleniti assumenda deserunt quasi qui excepturi
          minus, atque doloremque officiis doloribus! Saepe voluptatibus totam,
          possimus et ea error adipisci quas vel officia voluptatem facilis,
          consequuntur qui, ullam consectetur est hic dolorum corrupti vero
          dicta doloribus eaque? Laboriosam repellat assumenda cupiditate
          recusandae ducimus obcaecati voluptatum iusto est.
        </Text>
      </VStack>
    </Container>
  );
};

export default TurbineDetail;
