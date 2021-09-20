import {
  VStack,
  useColorMode,
  useColorModeValue,
  Heading,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

const Prew = (props) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const bgColorCard = useColorModeValue("gray.200", "gray.700");
  const textColorCard = useColorModeValue("blue.900", "blue.200");
  return (
    <VStack
      w="full"
      h="full"
      p="10"
      alignItems="flex-start"
      bg={bgColor}
      spacing="8"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Preview</Heading>
        <Text>
          If Data-Fields are ok,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            check the Dark Theme.
          </Button>
        </Text>
      </VStack>
      <VStack
        w={["60vw", "30vw", "25vw", "18vw"]}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="dark-lg"
        _hover={{
          transform: "scale3d(1.05, 1.05, 1)",
          transition: "0.5s",
        }}
        alignSelf="center"
        bg={bgColorCard}
        color={textColorCard}
      >
        <Image
          boxSize={["60vw", "30vw", "25vw", "18vw"]}
          objectFit="cover"
          src={props.prewPhotoUrl}
          fallbackSrc="/wind_dummy.png"
        />
        <Box p="4" maxW="250">
          <Text my="1">Manufacturer:{props.prewManufacturer}</Text>
          <Text my="1">Model: {props.prewModel}</Text>
          <Text my="1">Location: {props.prewLocation}</Text>
          <Text my="1">Price:{props.prewPrice}</Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Prew;
