import { Router } from "express";
import { createOffice, getAllOffices } from "../../controllers/index.js";

const officesRouter = Router();

officesRouter.post("/", createOffice);
officesRouter.get("/", getAllOffices);

export { officesRouter };
