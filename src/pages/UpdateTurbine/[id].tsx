import UpdateTurbineForm from "../../components/UpdateTurbineForm";
import { useRouter } from "next/router";
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

const Update = ({ turbine }) => {
  const router = useRouter();
  async function onUpdateTurbine(enteredTurbineData) {
    enteredTurbineData.id = turbine.id;

    const response = await fetch("/api/update-turbine", {
      method: "PUT",
      body: JSON.stringify(enteredTurbineData),
      headers: {
        "Content-type": "aplication/json",
      },
    });
    const data = await response.json();

    router.push(`/${turbine.id}`);
  }

  return (
    <UpdateTurbineForm onUpdateTurbine={onUpdateTurbine} turbine={turbine} />
  );
};

export default Update;
