import express from "express";
import bodyParser from "body-parser";
import usersRouts from "./routes/user.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRouts);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
