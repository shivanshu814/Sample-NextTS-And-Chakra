import {
  chakra,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  useBreakpointValue,
  Heading,
  Text,
  VStack,
  Input,
  Button,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";

function Form(props) {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const color = useColorModeValue("gray.900", "gray.700");
  return (
    <VStack w="full" h="full" p="10" alignItems="strech" spacing="16">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Turbine Details</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
      </VStack>
      <chakra.form
        onSubmit={props.submitHandler}
        //boxShadow="2xl"
        p="0"
        mt="16"
        borderRadius="xl"
      >
        <Grid
          templateColumns="repeat(2, 1fr)"
          columnGap={3}
          rowGap={6}
          w="full"
        >
          <GridItem colSpan={colSpan}>
            <FormControl id="manufacturer" isRequired>
              <FormLabel htmlFor="manifacturer">Manifacturer</FormLabel>
              <Input
                type="text"
                ref={props.manufacturerInputRef}
                defaultValue={props.turbine ? props.turbine.manufacturer : " "}
                onChange={(e) => props.setPrewManufacturer(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl id="model" isRequired>
              <FormLabel htmlFor="model">Model</FormLabel>
              <Input
                type="text"
                ref={props.modelInputRef}
                defaultValue={props.turbine ? props.turbine.model : ""}
                onChange={(e) => props.setPrewModel(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl id="location" isRequired>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                type="text"
                ref={props.locationInputRef}
                defaultValue={props.turbine ? props.turbine.location : ""}
                onChange={(e) => props.setPrewLocation(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl id="price" isRequired>
              <FormLabel htmlFor="price">Price</FormLabel>
              <Input
                type="text"
                ref={props.priceInputRef}
                defaultValue={props.turbine ? props.turbine.price : ""}
                onChange={(e) => props.setPrewPrice(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl id="photoUrl">
              <FormLabel htmlFor="photoUrl">Photo Url</FormLabel>
              <Input
                type="text"
                ref={props.photoInputRef}
                defaultValue={props.turbine ? props.turbine.photoUrl : ""}
                onChange={(e) => props.setPrewPhotoUrl(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <Checkbox> I have controlled the Preview</Checkbox>
          <GridItem colSpan={2}>
            <div>
              <Button
                type="submit"
                w="100%"
                my="2"
                //colorScheme="brand"
                variant="primary"
                borderRadius="0"
                //_focus={{ ring: 8 }}
              >
                {props.buttonLabel}
              </Button>
            </div>
          </GridItem>
        </Grid>
      </chakra.form>
    </VStack>
  );
}

export default Form;
