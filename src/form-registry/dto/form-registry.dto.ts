import { Exclude, Expose } from 'class-transformer';

export class FormRegistryDto {
  
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  cv: string;

  // Al tener el signo de interrogación en Prisma (String?), 
  // le ponemos el opcional (?) en TypeScript
  @Expose()
  observation?: string; 

  // ⛔ OCULTAMOS los IDs foráneos. Exponer cómo se relacionan tus tablas 
  // a nivel de base de datos es un riesgo de seguridad innecesario.
  @Exclude()
  adminId: number;

  @Exclude()
  doctorId: number;

  // --- RELACIONES ---
  //revisar
  // Igual que antes, esto solo se mostrará si haces el 'include' en Prisma
  @Expose()
  admin?: any; 

  @Expose()
  doctor?: any; 
}