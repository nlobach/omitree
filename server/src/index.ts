import dotenv from "dotenv";
import express from "express";
import jayson from "jayson";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(__dirname + "/dist/client"));

const dogs = {
  speak: (_args: any, callback: any) => callback(null, "woof")
};

app.post("/dogs", new jayson.Server(dogs).middleware());

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
