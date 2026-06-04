import { Module } from '@nestjs/common';
import { SpecialityDoctorService } from './speciality-doctor.service';
import { SpecialityDoctorController } from './speciality-doctor.controller';

@Module({
  providers: [SpecialityDoctorService],
  controllers: [SpecialityDoctorController]
})
export class SpecialityDoctorModule {}
