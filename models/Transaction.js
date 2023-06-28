import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
  {
    buyer: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: String,
      required: true,
    },
    productIds: [
      {
        // its an array of objects
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    amount: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
  },

  { toJSON: { getters: true }, timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
