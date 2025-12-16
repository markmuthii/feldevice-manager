import { Router } from "express";
import { createDevice, getAllDevices } from "../../controllers/index.js";

const devicesRouter = Router();

devicesRouter.post("/", createDevice);
devicesRouter.get("/", getAllDevices);

export { devicesRouter };
