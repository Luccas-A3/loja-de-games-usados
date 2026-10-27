import { catalogoJogos } from "@/app/data/catalogo";
import GameCard from "@/app/components/GameCard";

export default function PCPage() {
  const jogosPC = catalogoJogos.filter((jogo) => jogo.categoria === "PC");

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 p-8 md:p-16">
      
      {/* Título da Página */}
      <h1 className="text-4xl font-extrabold text-purple-300 mb-10 border-l-8 border-purple-500 pl-4">
        Jogos de PC
      </h1>

      {/* Grid de Jogos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jogosPC.map((jogo) => (
          <GameCard key={jogo.id} jogo={jogo} />
        ))}
      </div>

    </div>
  );
}