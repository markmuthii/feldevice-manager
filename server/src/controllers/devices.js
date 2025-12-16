export const createDevice = (req, res) => {
  res.json({
    success: true,
    message: "POST Devices Route",
  });
};

export const getAllDevices = (req, res) => {
  res.json({
    success: true,
    message: "GET Devices Route",
  });
};
