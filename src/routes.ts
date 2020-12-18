import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/upload';
import Clinic from "./controllers/ClinicContollers";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/clinic", Clinic.index);
routes.get("/clinic/:id", Clinic.show);
routes.post("/clinic", upload.array('images'), Clinic.create);

export default routes;
