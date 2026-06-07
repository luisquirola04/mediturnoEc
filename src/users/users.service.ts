import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { CreateUserDoctorDto } from './dto/create-user-doctor.dto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}
    //se usarán metodos separados para dividir de mejor manera la lógica
    async createUserDoctor(data: CreateUserDoctorDto) {
    
}
}