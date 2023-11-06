import bodyParser from "body-parser";
import express from "express";
import userRoutes from "./routes/users.js";
const app = express();
// app.use(bodyParser, urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("hello home page");
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
