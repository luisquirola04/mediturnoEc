import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';
//'Authorization': `Bearer ${token}`
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService // <-- Inyectamos el servicio JWT
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Obtenemos los roles que exige la ruta (ej. 'admin')
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // La ruta no exige roles, la dejamos pasar
    }

    // 2. Extraemos el token directamente de las cabeceras
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      // 3. Validamos la firma del token y extraemos el payload directamente
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JW_SECRET, // Asegúrate de que esto coincida con tu configuración
      });

      // 4. Verificamos si el rol DENTRO DEL TOKEN está permitido
      const hasRole = requiredRoles.includes(payload.rol);

      if (!hasRole) {
        throw new ForbiddenException('No tienes el rol necesario para esta acción');
      }

      
    } catch {
      // Si el token fue modificado, expiró o no tiene firma válida, caerá aquí
      throw new UnauthorizedException('Token inválido o expirado');
    }

    return true;
  }

  // Función auxiliar para separar la palabra "Bearer" del token
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}