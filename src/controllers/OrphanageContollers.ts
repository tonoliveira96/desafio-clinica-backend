import { Request, response, Response } from "express";

import { getRepository } from "typeorm";
import Orphange from "../models/Orphanage";

import orphangeView from '../views/Orphanage_views';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphange);

    const orphanages = await orphanagesRepository.find({
      relations:['images']
    });

    return response.json(orphangeView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphange);

    const orphanages = await orphanagesRepository.findOneOrFail(id,{
      relations:['images']
    });

    return response.json(orphangeView.render(orphanages));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphange);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const orphanages = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanagesRepository.save(orphanages);

    return response.status(201).json(orphanages);
  },
};
