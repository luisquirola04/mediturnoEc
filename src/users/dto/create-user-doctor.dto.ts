import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    dni: string;
    @IsString()
    fistName: string;
    @IsString()
    lastName: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
    cellphone: string;
    phone?:string;
    birthDate: Date;
}
