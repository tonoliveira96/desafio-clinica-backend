import Clinic from "../models/Clinic";
import imagesView from './images_view';

export default {
  render(clinic: Clinic) {
    return {
      id: clinic.id,
      name: clinic.name,
      email: clinic.email,
      phone: clinic.phone,
      cep: clinic.cep,
      adress: clinic.adress,
      services: clinic.services,
      about: clinic.about,

      images: imagesView.renderMany(clinic.images),
    };
  },

  renderMany(clinic: Clinic[]){
    return clinic.map(clinic => this.render(clinic));
  }
};
