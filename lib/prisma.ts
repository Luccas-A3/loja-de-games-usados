import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg"; // <-- Alterado para o pacote padrão 'pg'
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("❌ ERRO CRÍTICO: A variável DATABASE_URL não foi encontrada!");
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Cria o pool com o driver padrão do Postgres
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}