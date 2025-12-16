import { model, Schema } from "mongoose";

// Schema
const modelSchema = new Schema(
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
const Model = model("model", modelSchema);

// Export the Model
export { Model };
