const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
// middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
// mongodb

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.z93bc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    // console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
  const datebase = client.db("Shop");
  const collection = datebase.collection("products");

  //   post api
  app.post("/api/products", async (req, res) => {
    const { name, price, description } = req.body;
    const product = { name, price, description };
    const result = await collection.insertOne(product);
    // console.log(result);
    res.json({
      message: "Product added successfully",
      productId: result.insertedId,
    });
  });

  //   get api
  app.get("/api/products", async (req, res) => {
    const products = await collection.find().toArray();
    res.json(products);
  });
}
run().catch(console.dir);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
