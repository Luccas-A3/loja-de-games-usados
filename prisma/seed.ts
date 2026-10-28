import { config } from "dotenv";
config(); // Carrega as variáveis do arquivo .env para o process.env

import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { catalogoJogos } from "../app/data/catalogo";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("❌ ERRO: A variável DATABASE_URL não foi encontrada!");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 A iniciar o processo de seed...");

  const usuarioPadrao = await prisma.user.findFirst();

  if (!usuarioPadrao) {
    console.error("❌ ERRO: Nenhum usuário encontrado no banco de dados!");
    console.error("👉 Por favor, cadastre um usuário no site primeiro antes de rodar o seed.");
    process.exit(1);
  }

  console.log(`👤 Jogos serão associados ao usuário: ${usuarioPadrao.email}`);

  for (const jogo of catalogoJogos) {
    await prisma.jogo.upsert({
      where: { id: jogo.id },
      update: {
        titulo: jogo.titulo,
        plataforma: jogo.plataforma,
        preco: jogo.preco,
        descricao: `${jogo.estado} - ${jogo.detalhes}`,
        imagemUrl: jogo.imagem,
      },
      create: {
        id: jogo.id,
        titulo: jogo.titulo,
        plataforma: jogo.plataforma,
        preco: jogo.preco,
        descricao: `${jogo.estado} - ${jogo.detalhes}`,
        imagemUrl: jogo.imagem,
        userId: usuarioPadrao.id,
      },
    });
  }

  console.log("✅ Catálogo de jogos inserido com sucesso no Neon!");
}

main()
  .catch((e) => {
    console.error("❌ Erro ao executar o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });