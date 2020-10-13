import { Router } from "express";
import Orphanage from "./controllers/OrphanageContollers";

const routes = Router();

routes.get("/orphanages", Orphanage.index);
routes.get("/orphanages/:id", Orphanage.show);
routes.post("/orphanages", Orphanage.create);

export default routes;
