export class UserDto {
  id: number;
  uuid: string;
  dni: string;
  firstnames: string;
  lastnames: string;
  email: string;
  cellphone: string;
  photo: string;
  state: boolean; //cambiarbd

  createdAt: Date;
  updatedAt: Date;
}

/*
@Expose()
  @Type(() => AdminDto)
  admin?: AdminDto;
   */
