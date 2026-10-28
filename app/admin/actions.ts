"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";

export async function cadastrarJogo(formData: FormData) {
  // 1. Validação de autenticação e permissão de ADMIN
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Não autorizado.");
  }

  const titulo = formData.get("titulo") as string;
  const descricao = formData.get("descricao") as string;
  const preco = parseFloat(formData.get("preco") as string);
  const plataforma = formData.get("plataforma") as string;
  const imagemFile = formData.get("imagem") as File;

  if (!titulo || !preco || !plataforma) {
    throw new Error("Por favor, preencha todos os campos obrigatórios.");
  }

  let imageUrl = "";

  // 2. Se o utilizador enviou um ficheiro de imagem, faz o upload para o Blob Storage
  if (imagemFile && imagemFile.size > 0) {
    const blob = await put(`jogos/${Date.now()}-${imagemFile.name}`, imagemFile, {
      access: "public",
    });
    imageUrl = blob.url;
  }

  // 3. Guarda o novo jogo no Neon com a URL da imagem gerada pelo Blob
  await prisma.jogo.create({
    data: {
      titulo,
      descricao,
      preco,
      plataforma,
      imagem: imageUrl || null,
      userId: session.user.id,
    },
  });

  // 4. Revalida o cache das páginas para os novos jogos aparecerem imediatamente
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/playstation");
  revalidatePath("/xbox");
}