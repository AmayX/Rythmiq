import { MongoClient } from "mongodb";
import dontenv from "dotenv";

dontenv.config();

// Create a new MongoClient
const client = new MongoClient("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = await client.connect();
conn.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
export default conn;
 // MERN - Mongo, React, VITE