import NewTurbineForm from "../components/NewTurbineForm";

function NewTurbine() {
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
  }

  return <NewTurbineForm onAddTurbine={onAddTurbine} />;
}

export default NewTurbine;
