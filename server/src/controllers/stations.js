import { Station } from "../db/models/index.js";

export const createStation = async (req, res) => {
  try {
    const { name } = req.body;
    //save data
    const station = await Station.create({ name });
    res.json({
      success: true,
      message: "POST Stations Route",
      data: station,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getAllStations = (req, res) => {
  res.json({
    success: true,
    message: "GET Stations Route",
  });
};
