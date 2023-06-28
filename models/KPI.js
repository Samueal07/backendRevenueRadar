import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
  {
    // below is for daily data oject content mentioned in modelchart
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
  },
  // this is to use the get function property
  { toJSON: { getters: true } }
);
const monthSchema = new Schema(
  {
    // below is for daily data oject content mentioned in modelchart
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
  },
  // this is to use the get function property
  { toJSON: { getters: true } }
);
const KPISchema = new Schema(
  {
    totalProfit: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    totalRevenue: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    totalExpenses: {
      // the .currency mulitplies currency by 100 therfoe in get we divide again
      // to get original value
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    // this is an oject mongoose define object by map
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "INR",
        get: (v) => v / 100,
      },
    },

    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { toJSON: { getters: true }, timestamps: true }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
