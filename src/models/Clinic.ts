import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Images";

@Entity("clinics")
export default class Orphange {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  cep: string;

  @Column()
  adress: string;

  @Column()
  services: string;

  @Column()
  about: string;


  @OneToMany(() => Image, (image) => image.clinic, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "clinic_id" })
  images: Image[];
}
