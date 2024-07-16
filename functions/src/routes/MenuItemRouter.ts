import express from "express";
import { getClient } from "../db";
import Item from "../models/Item";

const menuItemRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

// get all Item
menuItemRouter.get("/menu-item", async (_, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<Item>("menuItems").find();
    const results = await cursor.toArray();
    res.status(200).json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

// create new Item
menuItemRouter.post("/menu-item", async (req, res) => {
  try {
    const menuItem: Item = req.body;
    const client = await getClient();
    await client.db().collection<Item>("menuItems").insertOne(menuItem);
    res.status(201).json(menuItem);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default menuItemRouter;
