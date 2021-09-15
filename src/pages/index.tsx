import TurbineList from "../components/TurbineList";
import { DUMMY_TURBINES } from "../../data/data";

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      turbines: DUMMY_TURBINES,
    },
    revalidate: 60, // Update Page every minute
  };
}

// Real Time Update Page

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from api for one turbine with id
//   return {
//     props: {
//       turbines: DUMMY_TURBINES,
//     },
//   };
// };

const Index = (props) => <TurbineList turbines={props.turbines} />;
export default Index;
