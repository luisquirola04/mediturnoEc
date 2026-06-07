import { Exclude, Expose, Type } from 'class-transformer';
import { DoctorDto } from 'src/doctor/dto/doctor.dto';

export class AddressResponseDto {
  
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  longitude: number;

  @Expose()
  latitude: number;

  @Expose()
  indications?: string;

  @Expose()
  country: string;

  @Expose()
  province: string;

  @Expose()
  canton: string;

  @Expose()
  city: string;

  @Exclude()
  doctorId: number;

  // --- RELACIONES ---
  @Type(() => DoctorDto)
  @Expose()
  doctor?: DoctorDto; 
}