import { Employee } from "../db/models/index.js";

export const createEmployee = (req, res) => {
  res.json({
    success: true,
    message: "POST Employees Route",
  });
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate("station");

    res.json({
      success: true,
      data: employees,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const updateEmployee = async (req, res) => {
  res.json({
    success: true,
    message: "Update endpoint",
  });
};

export const deleteEmployee = async (req, res) => {
  res.json({
    success: true,
    message: "Delete endpoint",
  });
};
