import TurbineDetail from "../components/TurbineDetail";
import { DUMMY_TURBINES } from "../../data/data";
import { MongoClient, ObjectId } from "mongodb";

export const getStaticPaths = async () => {
  //fetch data from api for the id's
  const client = await MongoClient.connect(
    "mongodb+srv://fahri:asd123@cluster0.9dg1h.mongodb.net/turbines?retryWrites=true&w=majority"
  );
  const db = client.db();
  const turbinesCollection = db.collection("turbines");
  const turbines = await turbinesCollection.find().toArray();

  client.close();

  const paths = turbines.map((turbine) => {
    return {
      params: {
        id: turbine._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false, // we can pregenerate only some of our pages, especialy popular pages.
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  //fetch data from api for one turbine with id

  const client = await MongoClient.connect(
    "mongodb+srv://fahri:asd123@cluster0.9dg1h.mongodb.net/turbines?retryWrites=true&w=majority"
  );
  const db = client.db();
  const turbinesCollection = db.collection("turbines");
  const turbine = await turbinesCollection.findOne({ _id: new ObjectId(id) });

  client.close();
  return {
    props: {
      //turbine: DUMMY_TURBINES[parseInt(id)],
      turbine: {
        manufacturer: turbine.manufacturer,
        model: turbine.model,
        location: turbine.location,
        photoUrl: turbine.photoUrl,
        price: turbine.price,
        id: turbine._id.toString(),
      },
      revalidate: 1,
    },
  };
};

const Detail = ({ turbine }) => {
  return <TurbineDetail turbine={turbine} />;
};

export default Detail;
