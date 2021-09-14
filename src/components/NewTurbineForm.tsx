import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Container, chakra } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { useRef } from "react";
import { useRouter } from "next/router";

function NewTurbineForm(props) {
  const manifacturerInputRef = useRef<null | HTMLInputElement>(null);
  const modelInputRef = useRef<null | HTMLInputElement>(null);
  const locationInputRef = useRef<null | HTMLInputElement>(null);
  const priceInputRef = useRef<null | HTMLTextAreaElement>(null);

  const router = useRouter();

  function submitHandler(event) {
    event.preventDefault();

    const enteredManifacturer = manifacturerInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const turbineData = {
      manifacturer: enteredManifacturer,
      model: enteredModel,
      location: enteredLocation,
      price: enteredPrice,
    };

    props.onAddTurbine(turbineData);
    router.push("/");
  }

  return (
    <Container minH="85vh">
      <chakra.form
        onSubmit={submitHandler}
        boxShadow="2xl"
        p="8"
        borderRadius="xl"
      >
        <div>
          <label htmlFor="manifacturer">Manifacturer</label>
          <Input
            type="text"
            required
            id="manifacturer"
            ref={manifacturerInputRef}
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input type="text" required id="model" ref={modelInputRef} />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Input type="text" required id="location" ref={locationInputRef} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Textarea id="price" required ref={priceInputRef}></Textarea>
        </div>
        <div>
          <Button type="submit" w="100%" my="2">
            Add Turbine
          </Button>
        </div>
      </chakra.form>
    </Container>
  );
}

export default NewTurbineForm;
