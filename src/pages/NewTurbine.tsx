import NewTurbineForm from "../components/NewTurbineForm";
import { useRouter } from "next/router";

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

  return <NewTurbineForm onAddTurbine={onAddTurbine} />;
}

export default NewTurbine;
