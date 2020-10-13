import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/upload';
import Orphanage from "./controllers/OrphanageContollers";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", Orphanage.index);
routes.get("/orphanages/:id", Orphanage.show);
routes.post("/orphanages", upload.array('images'), Orphanage.create);

export default routes;
