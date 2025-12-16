export const createBuilding = (req, res) => {
  res.json({
    success: true,
    message: "POST Buildings Route",
  });
};

export const getAllBuildings = (req, res) => {
  res.json({
    success: true,
    message: "GET Buildings Route",
  });
};
