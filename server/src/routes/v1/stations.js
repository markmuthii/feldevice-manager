import { Router } from "express";
import { createStation, getAllStations } from "../../controllers/index.js";

const stationsRouter = Router();

stationsRouter.post("/", createStation);
stationsRouter.get("/", getAllStations);

export { stationsRouter };
