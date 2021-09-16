import TurbineList from "../components/TurbineList";
//import { DUMMY_TURBINES } from "../../data/data";
import { MongoClient } from "mongodb";
import { divide } from "lodash";

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://fahri:asd123@cluster0.9dg1h.mongodb.net/turbines?retryWrites=true&w=majority"
  );
  const db = client.db();
  const turbinesCollection = db.collection("turbines");
  const turbines = await turbinesCollection.find().toArray();
  client.close();
  return {
    props: {
      turbines: turbines.map((turbine) => ({
        manufacturer: turbine.manufacturer,
        model: turbine.model,
        location: turbine.location,
        photoUrl: turbine.photoUrl,
        price: turbine.price,
        id: turbine._id.toString(),
      })),
    },
    revalidate: 1, // Update Page every minute
  };
}

const Index = ({ turbines }) => {
  return <TurbineList turbines={turbines} />;
};
export default Index;

/////////// For Real Time Update Page
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
