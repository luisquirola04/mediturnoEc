import { Exclude, Expose, Type } from 'class-transformer';
import { DoctorDto } from 'src/doctor/dto/doctor.dto';
import { SpecialityDto } from 'src/speciality/dto/speciality.dto';

export class SpecialityDoctorDto {
  
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Exclude()
  doctorId: number;

  @Exclude()
  specialityId: number;

  // --- RELACIONES ---

  @Type(() => DoctorDto)
  @Expose()
  doctor?: DoctorDto; 

  @Type(() => SpecialityDto)
  @Expose()
  speciality?: SpecialityDto; 
}