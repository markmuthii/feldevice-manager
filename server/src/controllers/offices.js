export const createOffice = (req, res) => {
  res.json({
    success: true,
    message: "POST Offices Route",
  });
};

export const getAllOffices = (req, res) => {
  res.json({
    success: true,
    message: "GET Offices Route",
  });
};
