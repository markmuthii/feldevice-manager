import { Router } from "express";
import { createBuilding, getAllBuildings } from "../../controllers/index.js";

const buildingsRouter = Router();

buildingsRouter.post("/", createBuilding);
buildingsRouter.get("/", getAllBuildings);

export { buildingsRouter };
