import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import menuItemRouter from "./routes/MenuItemRouter";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/menu-items", menuItemRouter);

export const api = functions.https.onRequest(app);
