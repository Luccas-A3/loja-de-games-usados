export const dynamic = "force-dynamic";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import GameCard from "@/app/components/GameCard";

export default async function HomePage() {
  // 1. Verifica a sessão e se o usuário logado é ADMINISTRADOR
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  let isAdmin = false;
  if (session?.user?.id) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });
    isAdmin = user?.role === "ADMIN";
  }

  // 2. Busca os primeiros jogos diretamente do banco de dados para o destaque
  const jogosDestaque = await prisma.jogo.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 flex flex-col font-sans">
      
      {/* CABEÇALHO / NAVBAR */}
      <header className="w-full max-w-[100rem] mx-auto px-8 py-6 flex justify-between items-center border-b border-purple-900/40">
        <h1 className="text-2xl font-extrabold text-purple-400 tracking-wider">
          Douglas Games
        </h1>

        {/* Botão do Admin (só aparece se for ADMIN) */}
        {isAdmin && (
          <Link
            href="/admin"
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-md flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Painel Admin
          </Link>
        )}
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-[100rem] mx-auto px-8 pt-12 pb-24 flex flex-col items-center w-full">
        
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-purple-200 mb-12 self-start border-l-8 border-purple-500 pl-4">
          Jogos em Destaque
        </h2>

        {jogosDestaque.length === 0 ? (
          <p className="text-slate-400 self-start">Nenhum jogo em destaque no momento.</p>
        ) : (
          /* TRÊS CARDS ALINHADOS HORIZONTALMENTE VIA .MAP() */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {jogosDestaque.map((jogo) => (
              <GameCard key={jogo.id} jogo={jogo} />
            ))}
          </div>
        )}

      </main>

    </div>
  );
}