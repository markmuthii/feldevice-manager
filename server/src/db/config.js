import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);

    console.log("Database connection established successfully");
  } catch (e) {
    console.log("Database connection error", e);

    process.exit(1);
  }
};
