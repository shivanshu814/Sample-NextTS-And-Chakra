import { useRouter } from "next/router";
import FormGenerator from "../components/FormComponents/FormGenerator";

function NewTurbine() {
  const router = useRouter();
  async function onAddTurbine(enteredTurbineData) {
    const response = await fetch("/api/new-turbine", {
      method: "POST",
      body: JSON.stringify(enteredTurbineData),
      headers: {
        "Content-type": "aplication/json",
      },
    });
    const data = await response.json();
    console.log("data: in New Turbine", data);
    router.push("/");
  }

  return <FormGenerator onSubmit={onAddTurbine} task="Add New Turbine" />;
}

export default NewTurbine;
