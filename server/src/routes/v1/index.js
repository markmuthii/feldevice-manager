import { Router } from "express";
import { employeesRouter } from "./employees.js";
import { stationsRouter } from "./stations.js";
import { devicesRouter } from "./devices.js";
import { officesRouter } from "./offices.js";
import { departmentsRouter } from "./departments.js";
import { buildingsRouter } from "./buildings.js";

const v1Router = Router();

v1Router.use("/employees", employeesRouter);
v1Router.use("/stations", stationsRouter);
v1Router.use("/devices", devicesRouter);
v1Router.use("/offices", officesRouter);
v1Router.use("/departments", departmentsRouter);
v1Router.use("/buildings", buildingsRouter);

export { v1Router };
