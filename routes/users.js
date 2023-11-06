import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
import { createUser, deleteUser, getUser, updateDetails, updateUser } from "../controllers/users.js";

const users = [
  {
    firstName: "ripty",
    lastName: "Singla",
    age: "30",
    id: 1,
  },
  {
    firstName: "ripty",
    lastName: "Singla",
    age: "30",
    id: 2,
  },
];

// get request
router.get("/", (req, res) => {
  console.log("hello to routes");
  res.send(users);
});

// post request
router.post("/", createUser);
// get by id request
router.get("/:id", getUser);
// delete request
router.delete("/:id", deleteUser);
// patch request
router.patch("/:id", updateDetails);
// put request
router.put("/:id", updateUser);
export default router;
