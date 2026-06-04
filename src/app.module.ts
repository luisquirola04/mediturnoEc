import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'prisma.service';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/utils/roles.guard';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AddressModule } from './address/address.module';
import { SpecialityModule } from './speciality/speciality.module';
import { SpecialityDoctorModule } from './speciality-doctor/speciality-doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ScoreDoctorModule } from './score-doctor/score-doctor.module';
import { FormRegistryModule } from './form-registry/form-registry.module';
import { NotificationModule } from './notification/notification.module';



@Module({
  imports: [JwtModule.register({
        secret: process.env.JW_SECRET,
        signOptions: { expiresIn: '1h' },
      }),ConfigModule.forRoot({
      isGlobal: true,
    }),AuthModule, UsersModule, DoctorModule, PatientModule, AddressModule, SpecialityModule, SpecialityDoctorModule, AppointmentModule, ScoreDoctorModule, FormRegistryModule, NotificationModule],
  providers: [PrismaService, {provide: APP_GUARD, useClass: RolesGuard}],
})
export class AppModule {}
