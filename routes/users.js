import express from "express";

import { getAllUsers, id, postNewUser } from "../controllers/functions.js";

import { User } from "../models/User.js";
const router = express.Router();

router.get("/users/all", getAllUsers)
router.post("/users/new", postNewUser)
router.get("/userid/:id", id)

export default router;





