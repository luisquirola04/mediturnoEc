import { Exclude, Expose } from 'class-transformer';

export class SpecialityDto {
  
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  icon?: string;

  @Expose()
  state: boolean;

  // --- RELACIONES ---
  // Se mostrará solo si incluyes los doctores (la tabla intermedia) en Prisma
  //revisar
  @Expose()
  doctors?: any[]; 
}