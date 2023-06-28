import express from "express";
// getting the model
import Transaction from "../models/Transaction.js";
const router = express.Router();
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    // grabbing the data using find and sending it to frontend
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
