import { Container, Flex } from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import Form from "./Form";
import Prew from "./Prew";

function FormGenerator(props) {
  const manufacturerInputRef = useRef<null | HTMLInputElement>(null);
  const modelInputRef = useRef<null | HTMLInputElement>(null);
  const locationInputRef = useRef<null | HTMLInputElement>(null);
  const photoInputRef = useRef<null | HTMLInputElement>(null);
  const priceInputRef = useRef<null | HTMLInputElement>(null);

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
    props.onSubmit(turbineData);
  }

  const [prewManufacturer, setPrewManufacturer] = useState(
    props.turbine ? props.turbine.manufacturer : ""
  );
  const [prewModel, setPrewModel] = useState(
    props.turbine ? props.turbine.model : ""
  );
  const [prewLocation, setPrewLocation] = useState(
    props.turbine ? props.turbine.location : ""
  );
  const [prewPrice, setPrewPrice] = useState(
    props.turbine ? props.turbine.price : ""
  );
  const [prewPhotoUrl, setPrewPhotoUrl] = useState(
    props.turbine ? props.turbine.photoUrl : ""
  );

  return (
    <Container minW="95vw" p={["0", "4", "8", "10"]}>
      <Flex
        h={["auto", "auto", "80vh"]}
        direction={["column-reverse", "column-reverse", "row", "row"]}
      >
        <Form
          submitHandler={submitHandler}
          manufacturerInputRef={manufacturerInputRef}
          modelInputRef={modelInputRef}
          locationInputRef={locationInputRef}
          priceInputRef={priceInputRef}
          photoInputRef={photoInputRef}
          turbine={props.turbine}
          setPrewManufacturer={setPrewManufacturer}
          setPrewModel={setPrewModel}
          setPrewLocation={setPrewLocation}
          setPrewPrice={setPrewPrice}
          setPrewPhotoUrl={setPrewPhotoUrl}
          buttonLabel={props.task}
        />
        <Prew
          prewManufacturer={prewManufacturer}
          prewModel={prewModel}
          prewLocation={prewLocation}
          prewPrice={prewPrice}
          prewPhotoUrl={prewPhotoUrl}
        />
      </Flex>
    </Container>
  );
}

export default FormGenerator;
