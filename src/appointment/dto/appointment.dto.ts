import { Exclude, Expose, Type } from 'class-transformer';
import { PatientDto } from 'src/patient/dto/patient.dto';
import { DoctorDto } from 'src/doctor/dto/doctor.dto';
import { ScoreDoctorDto } from 'src/score-doctor/dto/score-doctor.dto';

export class AppointmentDto {
  
  @Exclude()
  id: number;

  @Expose()
  uuid: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date;

  @Expose()
  observationPatient?: string;

  @Expose()
  rejectionReason?: string;

  @Expose()
  stateAppointment: any; 

  @Exclude()
  doctorId: number;

  @Exclude()
  patientId: number;

  // --- RELACIONES ---
  
  @Type(() => DoctorDto)
  @Expose()
  doctor?: DoctorDto; 

  @Type(() => PatientDto)
  @Expose()
  patient?: PatientDto; 

  @Type(() => ScoreDoctorDto)
  @Expose()
  score?: ScoreDoctorDto; 
}