import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma.service';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  public async login(credentials: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
      include: {
        admin: true,
        doctor: true,
        patient: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const match = await bcrypt.compare(credentials.password, user.password);

    if (!match) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const role = this.determinarRol(user);
    if (role == 'doctor' && user?.doctor?.stateDoctor !== 'Approved') {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    
    const payload = {
      sub: user.uuid,
      rol: role,
      name: user.firstnames,
      lastname: user.lastnames,
    };

    const token = await this.jwtService.signAsync(payload);

    return { accessToken: token };
  }

  public determinarRol(user: any): string | null {
    if (user.admin) return 'admin';
    if (user.doctor) return 'doctor';
    if (user.patient) return 'patient';

    return null;
  }
}
