import { Exclude, Expose, Type } from 'class-transformer';
import { AppointmentDto} from 'src/appointment/dto/appointment.dto';
import { DoctorDto } from 'src/doctor/dto/doctor.dto';
import { PatientDto } from 'src/patient/dto/patient.dto';

export class ScoreDoctorDto {
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  score: number;

  @Expose()
  comment?: string;

  @Exclude()
  doctorId: number;

  @Exclude()
  appointmentId: number;

  @Exclude()
  patientId: number;

  // --- RELACIONES ---
//revisar
  @Type(() => DoctorDto)
  @Expose()
  doctor?: DoctorDto;


 @Type(() => AppointmentDto)
  @Expose()
  appointment?: AppointmentDto;


  @Type(() => PatientDto)
  @Expose()
  patient?: PatientDto;
}
