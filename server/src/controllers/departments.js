export const createDepartment = (req, res) => {
  res.json({
    success: true,
    message: "POST Departments Route",
  });
};

export const getAllDepartments = (req, res) => {
  res.json({
    success: true,
    message: "GET Departments Route",
  });
};
