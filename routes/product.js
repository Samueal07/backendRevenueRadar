import express from "express";
// getting the model
import Product from "../models/Product.js";
const router = express.Router();
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    // grabbing the data using find and sending it to frontend
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
