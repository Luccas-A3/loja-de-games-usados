import GameCard from "@/app/components/GameCard";
import { catalogoJogos } from "@/app/data/catalogo";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function CatalogoPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const termoBusca = q?.toLowerCase().trim() || "";

  // Filtra por título, plataforma ou detalhes
  const jogosFiltrados = catalogoJogos.filter((jogo) => {
    if (!termoBusca) return true;
    return (
      jogo.titulo.toLowerCase().includes(termoBusca) ||
      jogo.plataforma.toLowerCase().includes(termoBusca) ||
      jogo.detalhes.toLowerCase().includes(termoBusca)
    );
  });

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 p-8 md:p-16">
      <div className="max-w-[100rem] mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-200 mb-4 border-l-8 border-purple-500 pl-4">
          {termoBusca ? `Resultados para "${q}"` : "Catálogo de Jogos"}
        </h1>

        <p className="text-slate-400 mb-10">
          {jogosFiltrados.length === 1
            ? "1 jogo encontrado"
            : `${jogosFiltrados.length} jogos encontrados`}
        </p>

        {jogosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jogosFiltrados.map((jogo) => (
              <GameCard key={jogo.id} jogo={jogo} />
            ))}
          </div>
        ) : (
          <div className="bg-[#180e25] border border-purple-900/60 rounded-2xl p-12 text-center max-w-lg mx-auto mt-10">
            <p className="text-2xl font-semibold text-purple-300 mb-2">
              Nenhum jogo encontrado 🔍
            </p>
            <p className="text-slate-400 text-sm">
              Tente buscar por outro termo ou navegue pelas categorias.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}