import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import http from "node:http";
import { extractCookie } from "./middleware/extractCookie";

const app = express();
const PORT = 5000;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());
app.use(extractCookie());

const server = http.createServer(app);
server.listen(PORT, (err) => {
  if (err) throw Error(err);
  else console.log(`Listening on port ${PORT} over http`);
});
