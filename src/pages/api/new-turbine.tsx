// for server side
// no components
// Request comes and this triggered
// --->   /api/new-turbine
// POST request is handled in /api/new-turbine

const { MongoClient } = require("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://fahri:asd123@cluster0.9dg1h.mongodb.net/turbines?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);
    const db = client.db();
    const turbinesCollection = db.collection("turbines");

    const result = await turbinesCollection.insertOne(JSON.parse(data));
    console.log(result);
    //console.log(typeof data);
    //console.log(typeof JSON.parse(data));
    client.close();
    res.status(201).json({ message: "Turbine inserted!" });
  }
}

export default handler;
