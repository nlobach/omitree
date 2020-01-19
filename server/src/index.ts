import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import jayson from "jayson";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

const dogs = {
  speak: (_args: any, callback: any) => callback(null, "woof")
};

app.post("/dogs", new jayson.Server(dogs).middleware());

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
