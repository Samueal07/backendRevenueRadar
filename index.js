import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
// make sure to use .js
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";
import KPI from "./models/KPI.js";
import transactionRoutes from "./routes/transaction.js";
import { kpis, products, transactions } from "./data/data.js";
import Transaction from "./models/Transaction.js";
/* configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

console.log("started connection");
/* Fe;caring routes */

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
/* mongoose config */
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT} and connected`);
    });
    // make sure ti empty the database before seeding
    //commented as on restart it would again drop and insert data
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
