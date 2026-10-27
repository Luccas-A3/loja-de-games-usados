export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "@/app/components/AuthButtons";
import { catalogoJogos } from "@/app/data/catalogo"; // Importa o catálogo centralizado
import GameCard from "@/app/components/GameCard";   //[cite: 1] Importa o componente automatizado de card

export default function HomePage() {
  // Seleciona os primeiros 3 jogos do catálogo para exibir como destaque (ou você pode filtrar se tiver uma propriedade 'destaque')
  const jogosDestaque = catalogoJogos.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 flex flex-col font-sans">
      
      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-[100rem] mx-auto px-8 pt-16 pb-24 flex flex-col items-center w-full">
        
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-purple-200 mb-12 self-start border-l-8 border-purple-500 pl-4">
          Jogos em Destaque
        </h2>

        {/* TRÊS CARDS ALINHADOS HORIZONTALMENTE VIA .MAP() */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {jogosDestaque.map((jogo) => (
            <GameCard key={jogo.id} jogo={jogo} />
          ))}
        </div>

      </main>

    </div>
  );
}