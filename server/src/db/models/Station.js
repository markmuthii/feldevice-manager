import { model, Schema } from "mongoose";

// Schema
const stationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Station = model("station", stationSchema);

// Export the Model
export { Station };
