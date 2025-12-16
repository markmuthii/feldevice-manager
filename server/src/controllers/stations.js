import { Station } from "../db/models/index.js";

export const createStation = (req, res) => {
  res.json({
    success: true,
    message: "POST Stations Route",
  });
};

export const getAllStations = (req, res) => {
  res.json({
    success: true,
    message: "GET Stations Route",
  });
};
