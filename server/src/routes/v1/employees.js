import { Router } from "express";
import { createEmployee, getAllEmployees } from "../../controllers/index.js";
import { logRequest } from "../../middleware/index.js";

const employeesRouter = Router();

employeesRouter.use(logRequest);

employeesRouter.post("/", createEmployee);
employeesRouter.get("/", getAllEmployees);

export { employeesRouter };
