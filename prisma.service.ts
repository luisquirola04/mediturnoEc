import * as dotenv from 'dotenv';
dotenv.config();

import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    dotenv.config();
    const url = process.env.DATABASE_URL;
    const adapter = new PrismaMariaDb(url as string);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}