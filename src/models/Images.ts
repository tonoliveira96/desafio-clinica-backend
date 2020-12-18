import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Clinic from './Clinic';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Clinic, (clinic) => clinic.images)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;
}
