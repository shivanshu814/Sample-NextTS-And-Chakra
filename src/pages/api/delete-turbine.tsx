// for server side
// no components
// Request comes and this triggered
// --->   /api/new-turbine

const { MongoClient, ObjectId } = require("mongodb");

async function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.body;

    const uri =
      "mongodb+srv://fahri:asd123@cluster0.9dg1h.mongodb.net/turbines?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);
    const db = client.db();
    const turbinesCollection = db.collection("turbines");

    const result = await turbinesCollection.deleteOne({
      _id: new ObjectId(id),
    });
    console.log(result);
    //console.log(typeof data);
    //console.log(typeof JSON.parse(data));
    client.close();
    res.status(201).json({ message: "Turbine deleted!" });
  }
}

export default handler;
