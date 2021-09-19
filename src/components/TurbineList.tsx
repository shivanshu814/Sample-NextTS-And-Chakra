import { Container, SimpleGrid, Text, Center, Badge } from "@chakra-ui/react";

import TurbineElement from "./TurbineElement";

const TurbineList = ({ turbines, suchWort }) => {
  //console.log(turbines);
  var result = 0;
  const renderedTurbinen = turbines.map((turbine, index) => {
    if (turbine.manufacturer.toLowerCase().includes(suchWort.toLowerCase())) {
      result = result + 1;
      console.log(result);
      return (
        <Center>
          <TurbineElement key={index} turbine={turbine} />
        </Center>
      );
    } else {
      return null;
    }
  });
  return (
    <>
      <Badge
        colorScheme="blue"
        mt="4"
        p="2"
        w={["85vw", "96", "96", "96"]}
        borderRadius="md"
      >
        <Center>
          {result} {result > 1 ? "Turbinen" : "Turbine"}
        </Center>
      </Badge>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing={10}
        mx={["0", "2", "8", "12"]}
        my={["16", "16", "16", "16"]}
      >
        {renderedTurbinen}
      </SimpleGrid>
    </>
  );
};

export default TurbineList;
