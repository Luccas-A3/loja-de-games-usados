"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";

// Função auxiliar para validar se o usuário é ADMIN
async function verificarAdmin() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Não autorizado.");
  }
  return session.user;
}

export async function cadastrarJogo(formData: FormData) {
  const session = await verificarAdmin();

  const titulo = formData.get("titulo") as string;
  const descricao = formData.get("descricao") as string;
  const preco = parseFloat(formData.get("preco") as string);
  const plataforma = formData.get("plataforma") as string;
  const imagemFile = formData.get("imagem") as File;

  if (!titulo || !preco || !plataforma) {
    throw new Error("Por favor, preencha todos os campos obrigatórios.");
  }

  let imageUrl = "";

  if (imagemFile && imagemFile.size > 0) {
    const blob = await put(`jogos/${Date.now()}-${imagemFile.name}`, imagemFile, {
      access: "public",
    });
    imageUrl = blob.url;
  }

  await prisma.jogo.create({
    data: {
      titulo,
      descricao,
      preco,
      plataforma,
      imagem: imageUrl || null,
      userId: session.id,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/playstation");
  revalidatePath("/xbox");
  revalidatePath("/nintendo");
  revalidatePath("/pc");
}

export async function aceitarProposta(propostaId: string) {
  await verificarAdmin();

  await prisma.propostaCompra.update({
    where: { id: propostaId },
    data: { status: "ACEITA" },
  });

  revalidatePath("/admin");
}

export async function recusarProposta(propostaId: string) {
  await verificarAdmin();

  await prisma.propostaCompra.update({
    where: { id: propostaId },
    data: { status: "RECUSADA" },
  });

  revalidatePath("/admin");
}