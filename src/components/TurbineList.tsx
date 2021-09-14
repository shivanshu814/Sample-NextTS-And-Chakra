import { Container, VStack, Text, Box, HStack, Wrap } from "@chakra-ui/react";
import TurbineElement from "./TurbineElement";

const TurbineList = ({ turbines }) => (
  <Container maxW="container.xxl" centerContent minH="85vh">
    <Wrap my="4" spacing="12">
      {turbines.map((turbine, index) => (
        <TurbineElement key={index} turbine={turbine} />
      ))}
    </Wrap>
  </Container>
);

export default TurbineList;
