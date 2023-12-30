import cors from "cors";
import express from "express";
import path from "path";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain/port
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (if your fetch requests include credentials)
  }),
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api", (req, res) => {
  res.send(JSON.stringify({ message: "Hello from the server" }));
});

app.listen(6969, () => {
  console.log("Server listening on port 6969");
});
