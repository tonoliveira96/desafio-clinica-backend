import { Request, response, Response } from "express";

import { getRepository } from "typeorm";
import Clinic from "../models/Clinic";
import * as Yup from 'yup';

import clinicView from '../views/Clinic_views';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Clinic);

    const orphanages = await orphanagesRepository.find({
      relations:['images']
    });

    return response.json(clinicView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Clinic);

    const orphanages = await orphanagesRepository.findOneOrFail(id,{
      relations:['images']
    });

    return response.json(clinicView.render(orphanages));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      phone,
      cep,
      adress,
      services,
      about
    } = request.body;

    const orphanagesRepository = getRepository(Clinic);

    const requestImages = request.files as Express.Multer.File[];

    // const images = requestImages.map((image) => {
    //   return { path: image.filename };
    // });

    const data = {
      name,
      email,
      phone,
      cep,
      adress,
      services,
      about,
      // images,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      phone: Yup.string().required(),
      cep: Yup.string().required(),
      adress: Yup.string().required(),
      services: Yup.string().required(),
      about: Yup.string().required().max(400),

      images: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      }))
    })

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanages = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanages);

    return response.status(201).json(orphanages);
  },
};
