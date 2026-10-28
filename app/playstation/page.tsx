export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma"; // <-- 1. Import do Prisma obrigatório
import GameCard from "@/app/components/GameCard";

export default async function PlataformaPage() {
  const jogos = await prisma.jogo.findMany({
    where: {
      plataforma: {
        contains: "PS", // Ex: Nintendo, PC, PlayStation, Xbox
        mode: "insensitive",
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 p-8 md:p-16">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-10 border-l-8 border-purple-500 pl-4">
        Jogos
      </h1>

      {jogos.length === 0 ? (
        <p className="text-slate-400">Nenhum jogo cadastrado no momento.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jogos.map((jogo: any) => ( // <-- 2. Tipagem explícita para evitar o erro 'any'
            <GameCard key={jogo.id} jogo={jogo} />
          ))}
        </div>
      )}
    </div>
  );
}