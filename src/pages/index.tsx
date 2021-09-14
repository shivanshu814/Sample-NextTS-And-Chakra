import TurbineList from "../components/TurbineList";
import { DUMMY_TURBINES } from "../../data/data";

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      turbines: DUMMY_TURBINES,
    },
  };
}
const Index = (props) => <TurbineList turbines={props.turbines} />;
export default Index;
