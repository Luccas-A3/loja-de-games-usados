import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma"; 
import { auth } from "../../../lib/auth"; 
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    // 1. Verificar a sessão do usuário com o Better Auth
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Você precisa estar logado para enviar uma proposta." },
        { status: 401 }
      );
    }

    // 2. Extrair o corpo da requisição
    const { jogoId, valor, mensagem } = await req.json();

    if (!jogoId || !valor || isNaN(Number(valor))) {
      return NextResponse.json(
        { message: "Dados da proposta inválidos." },
        { status: 400 }
      );
    }

    // 3. Salvar no banco de dados com Prisma
    const novaProposta = await prisma.propostaCompra.create({
      data: {
        jogoId,
        userId: session.user.id,
        valor: parseFloat(valor), // O Prisma converte automaticamente para o campo Decimal
        mensagem: mensagem || "",
        status: "PENDENTE",
      },
    });

    return NextResponse.json(
      {
        message: "Proposta enviada com sucesso!",
        proposta: novaProposta,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar proposta:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor ao processar a proposta." },
      { status: 500 }
    );
  }
}