// for server side
// no components
// Request comes and this triggered
// --->   /api/new-turbine

const { MongoClient, ObjectId } = require("mongodb");

async function handler(req, res) {
  if (req.method === "PUT") {
    const data = JSON.parse(req.body);

    const uri =
      "mongodb+srv://fahri:asd123@cluster0.9dg1h.mongodb.net/turbines?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);
    const db = client.db();
    const turbinesCollection = db.collection("turbines");

    const result = await turbinesCollection.updateOne(
      { _id: new ObjectId(data.id) },
      {
        $set: {
          manufacturer: data.manufacturer,
          model: data.model,
          location: data.location,
          photoUrl: data.photoUrl,
          price: data.price,
        },
      }
    );
    console.log(result);
    //console.log(typeof data);
    //console.log(typeof JSON.parse(data));
    client.close();
    res.status(201).json({ message: "Turbine updated!" });
  }
}

export default handler;
