import { Module } from '@nestjs/common';
import { ScoreDoctorController } from './score-doctor.controller';
import { ScoreDoctorService } from './score-doctor.service';

@Module({
  controllers: [ScoreDoctorController],
  providers: [ScoreDoctorService]
})
export class ScoreDoctorModule {}
