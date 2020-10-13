import express from "express";
import { getRepository } from "typeorm";
import Orphange from "./models/Orphanage";

import "./database/conection";

const app = express();

app.use(express.json());

app.post("/orphanages", async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphange);

  const orphanages = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanages);

  return response.json({ message: "Hello World" });
});

app.listen(3333);
