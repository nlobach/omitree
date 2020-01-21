"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const jayson_1 = __importDefault(require("jayson"));
// initialize configuration
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// tslint:disable-next-line:no-console
console.log(">>> " + __dirname);
app.use(express_1.default.static(__dirname + "/dist/client"));
// // define a route handler for the default home page
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
const dogs = {
    speak: (_args, callback) => callback(null, "woof")
};
app.post("/dogs", new jayson_1.default.Server(dogs).middleware());
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map