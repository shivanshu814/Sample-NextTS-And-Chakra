import { Container, SimpleGrid } from "@chakra-ui/react";
import TurbineElement from "./TurbineElement";

const TurbineList = ({ turbines }) => (
  <Container maxW="container.xxl" centerContent minH="85vh">
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      spacing={10}
      mx={["0", "2", "8", "12"]}
      my={["16", "16", "16", "16"]}
    >
      {turbines.map((turbine, index) => (
        <TurbineElement key={index} turbine={turbine} />
      ))}
    </SimpleGrid>
  </Container>
);

export default TurbineList;
