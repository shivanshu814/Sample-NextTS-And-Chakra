import { useRef } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";

const Search = ({ handleSuche }) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const onSuche = () => {
    handleSuche(inputRef.current.value);
  };
  return (
    <InputGroup w={["85vw", "96", "96", "96"]} mt="8">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Vestas.."
        ref={inputRef}
        onChange={onSuche}
      />
    </InputGroup>
  );
};

export default Search;
