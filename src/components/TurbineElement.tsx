import { VStack, Text, Box, Button, Image, Badge } from "@chakra-ui/react";
import Link from "next/link";
//import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LinkBox, LinkOverlay, AspectRatio } from "@chakra-ui/react";

const TurbineElement = ({ turbine }) => {
  //console.log(turbine);
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + turbine.id);
  }

  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "blue.900", dark: "blue.200" };

  return (
    <LinkBox cursor="pointer" className="my-box">
      <VStack
        w={["80vw", "45vw", "25vw", "18vw"]}
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor[colorMode]}
        boxShadow="dark-lg"
        _hover={{
          transform: "scale3d(1.05, 1.05, 1)",
          transition: "0.5s",
        }}
      >
        {/* <Image
        loader={() => turbine.photoUrl}
        unoptimized
        src={turbine.photoUrl}
        width={250}
        height={250}
        alt="Windturbine"
      /> */}

        <Image
          //boxSize={["350px", "400px", "350px", "300px"]}
          boxSize={["80vw", "45vw", "25vw", "25vw"]}
          objectFit="cover"
          src={turbine.photoUrl}
          fallbackSrc="/wind_dummy.png"
        />

        <Box
          p="4"
          maxW="250"
          color={textColor[colorMode]}
          // sx={{
          //   ".my-box:hover &": {
          //     color: "red.600",
          //   },
          // }}
        >
          {/* <Badge colorScheme="red" position="absolute" top="6" right="4"> 
            New
          </Badge>*/}
          <Text my="1">Manufacturer:{turbine.manufacturer}</Text>
          <Text my="1">Model: {turbine.model}</Text>
          <Text my="1">Location: {turbine.location}</Text>
          <Text my="1">Price:{turbine.price}</Text>
          <Link href={"/" + turbine.id}>
            <LinkOverlay>
              <Button
                colorScheme="green"
                width="100%"
                variant="outline"
                mt="3"
                //onClick={showDetailsHandler} // Anstatt Link zu benutzen kann mann useRoute()
              >
                see details
              </Button>
            </LinkOverlay>
          </Link>
        </Box>
      </VStack>
    </LinkBox>
  );
};

export default TurbineElement;
