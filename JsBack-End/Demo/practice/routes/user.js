import express from "express";
import { getuser, addUser, delName } from "../controllers/user.js";
const router = express.Router();

router.get("/", getuser);

router.post("/", addUser);

router.delete("/:name", delName);

export default router;
