import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    transactions: [
      {
        // its an array of objects
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    expense: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    // this is an oject mongoose define object by map
  },
  { toJSON: { getters: true }, timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
