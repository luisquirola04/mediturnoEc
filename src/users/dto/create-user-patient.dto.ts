import { Type } from 'class-transformer';
import { IsDateString, IsEmail, IsEnum, IsNumber, IsString, Max, MaxLength, MinLength } from 'class-validator';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';

export class CreateUserPatientDto {
  @IsString( { message: 'El DNI debe ser una cadena de texto' })
  dni: string;

  @IsString( { message: 'El nombre debe ser una cadena de texto' })
  fistName: string;

  @IsString( { message: 'El apellido debe ser una cadena de texto' })
  lastName: string;

  @IsEmail({}, { message: 'El email debe ser una dirección de correo válida' })
  email: string;


  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;
  

  @IsNumber()
  @MinLength(10, { message: 'El número de celular debe tener al menos 10 dígitos' })
  @MaxLength(10, { message: 'El número de celular no puede tener más de 10 dígitos'})
  cellphone: number;


  @IsString()
  photo?: string;

  @IsDateString() //recibe la fecha en formato AAAA-MM-DD
  @IsString()
  birthDate: string;


  @Type(() => CreatePatientDto)
  patient: CreatePatientDto;
}
