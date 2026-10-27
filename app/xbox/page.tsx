import { catalogoJogos } from "@/app/data/catalogo";
import GameCard from "@/app/components/GameCard";

export default function XboxPage() {
  const jogosXbox = catalogoJogos.filter((jogo) => jogo.categoria === "Xbox");

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 p-8 md:p-16">
      
      <h1 className="text-4xl font-extrabold text-purple-300 mb-10 border-l-8 border-purple-500 pl-4">
        Jogos de Xbox
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jogosXbox.map((jogo) => (
          <GameCard key={jogo.id} jogo={jogo} />
        ))}
      </div>

    </div>
  );
}