import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnection.js";
import router from "./routes/userRoutes.js";

const app = express();
//middleware
dotenv.config();
app.use(cors());
app.use(express.json());

//rest api
app.get("/", (req, res) => {
  res.send("server running");
});
app.use("/api/v1/user", router);

//conect server
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});

//database
dbConnect();
