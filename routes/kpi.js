import express from "express";
// getting the model
import KPI from "../models/KPI.js";
const router = express.Router();
router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    // grabbing the data using find and sending it to frontend
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
