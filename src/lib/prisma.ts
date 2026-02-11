// src/lib/prisma.ts

import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

declare global {
  var prisma: PrismaClient | undefined;
}

// Singleton Prisma Client
const prismaClientSingleton = () => {
  const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL || 'file:./dev.db',
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

const prisma = global.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;