import { data } from "../db/data.js";

export const getuser = (req, res) => {
  console.log(req);
  res.send(data);
};

export const addUser = (req, res) => {
  data.push(req.body);
  res.send(`Successful`);
};

export const delName = (req, res) => {
  console.log(req.path == "/Bob");
  res.send("aa");
};
