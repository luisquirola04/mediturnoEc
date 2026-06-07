import { Exclude, Expose, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/user.dto';

export class PatientDto {
  
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Exclude()
  userId: number;

  @Expose()
  bloodType: any; // Aquí puedes tiparlo con tu Enum 'BloodType' si lo tienes exportado

  @Expose()
  allergies?: string;

  @Expose()
  diseases?: string;

  @Expose()
  medicines?: string;

  // --- RELACIONES ---
  // Se mostrarán solo si incluyes estas relaciones en tu consulta de Prisma (con 'include')
  //revisar

  

  @Expose()
  @Type(() => UserDto)
  user?: UserDto; 

  @Expose()
  appointments?: any[];

  @Expose()
  scores?: any[];
}