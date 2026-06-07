import { Exclude, Expose } from 'class-transformer';

export class DoctorDto {
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  userId: number;

  @Expose()
  licence: string;

  @Expose()
  description: string;

  @Expose()
  experienceTime: string;

  @Expose()
  score: number;

  @Expose()
  totalScores: number;

  @Expose()
  stateDoctor: any;
  price: number;

  //revisar
  // asi se debe hacer para las relaciones, se pueden crear dto para cada una de las relaciones y luego importarlos aqui, pero por ahora se deja asi  ya que no existen
  /*@Expose() 
  @Type(() => AdminDto)
  admin?: AdminDto;
  */

  @Expose()
  address?: any;

  @Expose()
  specialities?: any[];

  @Expose()
  appointments?: any[];

  @Expose()
  scores?: any[];

  @Expose()
  formRegistries?: any[];

  @Expose()
  user?: any;
}
