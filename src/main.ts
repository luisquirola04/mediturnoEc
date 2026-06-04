import 'dotenv/config'; 

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan'; //para ver las peticiones en consola como dev
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  app.useGlobalPipes( //Necesario para las Validaciones de DTOs
    new ValidationPipe({
      whitelist: true, // Limpia datos que no estén en el DTO
      forbidNonWhitelisted: true, // Lanza error si el frontend envía campos que no existen
      transform: true, // Transforma los JSON a instancias reales DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
