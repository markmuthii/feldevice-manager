import { Router } from "express";
import { createEmployee, getAllEmployees } from "../../controllers/index.js";

const employeesRouter = Router();

employeesRouter.post("/", createEmployee);
employeesRouter.get("/", getAllEmployees);

export { employeesRouter };
