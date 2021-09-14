import NewTurbineForm from "../components/NewTurbineForm";

function NewTurbine() {
  function onAddTurbine(enteredTurbineData) {
    console.log("page:", enteredTurbineData);
  }
  return <NewTurbineForm onAddTurbine={onAddTurbine} />;
}

export default NewTurbine;
