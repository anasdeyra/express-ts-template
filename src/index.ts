import express, { Application } from "express";
import dotenv from "dotenv";
import { PORT } from "./const";

dotenv.config();

const app: Application = express();

app.get("/", (_req, res) => {
  res.send("Server is running!");
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//logger
app.use((req, _res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

//server start
app.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}`);
});
