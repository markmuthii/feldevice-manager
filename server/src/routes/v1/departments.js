import { Router } from "express";
import {
  createDepartment,
  getAllDepartments,
} from "../../controllers/index.js";

const departmentsRouter = Router();

departmentsRouter.post("/", createDepartment);
departmentsRouter.get("/", getAllDepartments);

export { departmentsRouter };
