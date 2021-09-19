import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Container, chakra } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { useRef } from "react";

function NewTurbineForm(props) {
  const manufacturerInputRef = useRef<null | HTMLInputElement>(null);
  const modelInputRef = useRef<null | HTMLInputElement>(null);
  const locationInputRef = useRef<null | HTMLInputElement>(null);
  const photoInputRef = useRef<null | HTMLInputElement>(null);
  const priceInputRef = useRef<null | HTMLTextAreaElement>(null);

  function submitHandler(event) {
    event.preventDefault();

    const enteredManufacturer = manufacturerInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredPhotoUrl = photoInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const turbineData = {
      manufacturer: enteredManufacturer,
      model: enteredModel,
      location: enteredLocation,
      photoUrl: enteredPhotoUrl,
      price: enteredPrice,
    };

    props.onAddTurbine(turbineData);
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
            id="manufacturer"
            ref={manufacturerInputRef}
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
          <label htmlFor="photoUrl">Photo Url</label>
          <Input type="text" required id="photoUrl" ref={photoInputRef} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Textarea id="price" required ref={priceInputRef}></Textarea>
        </div>
        <div>
          <Button type="submit" w="100%" my="2" colorScheme="blue">
            Add
          </Button>
        </div>
      </chakra.form>
    </Container>
  );
}

export default NewTurbineForm;
