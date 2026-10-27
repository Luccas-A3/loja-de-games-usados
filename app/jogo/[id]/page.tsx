import Image from "next/image";
import Link from "next/link";
import { catalogoJogos } from "@/app/data/catalogo";
import { notFound } from "next/navigation";
import FormularioProposta from "@/app/components/FormularioProposta";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetalhesJogoPage({ params }: PageProps) {
  // Aguarda os parâmetros da rota dinâmica (Next.js 15+)
  const { id } = await params;

  // Busca o jogo correspondente no catálogo pelo ID
  const jogo = catalogoJogos.find((j) => j.id === id);

  // Se o jogo não existir, retorna a página 404 padrão do Next.js
  if (!jogo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 p-6 md:p-16">
      
      {/* Botão de Voltar */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition"
        >
          ← Voltar para o catálogo
        </Link>
      </div>

      {/* Container Principal */}
      <div className="max-w-6xl mx-auto bg-[#180e25] border border-purple-900/60 rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Imagem em Destaque */}
        <div className="relative aspect-[3/4] w-full bg-[#130a1e] rounded-2xl overflow-hidden border border-purple-950 flex items-center justify-center p-6 shadow-inner">
          <Image
            src={jogo.imagem}
            alt={jogo.titulo}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        {/* Lado Direito: Informações e Ação de Compra */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex gap-3 flex-wrap mb-4">
              <span className="text-sm font-semibold bg-purple-900/60 text-purple-300 px-4 py-1.5 rounded-lg border border-purple-700/40">
                {jogo.plataforma}
              </span>
              <span className="text-sm font-semibold bg-slate-800 text-slate-300 px-4 py-1.5 rounded-lg border border-slate-700">
                Estado: {jogo.estado}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              {jogo.titulo}
            </h1>

            <div className="my-6">
              <span className="text-4xl md:text-5xl font-extrabold text-emerald-400">
                R$ {jogo.preco.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="border-t border-purple-900/40 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Sobre este jogo</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {jogo.detalhes}
              </p>
            </div>
          </div>

          {/* Área de Botões / Compra */}
          <div className="mt-10 pt-6 border-t border-purple-900/40 flex flex-col gap-4">
          <div className="mt-10 pt-6 border-t border-purple-900/40 flex flex-col gap-4">
            <FormularioProposta 
                jogoId={jogo.id} 
                precoOriginal={jogo.preco} 
            />
            </div>
            <button className="w-full bg-purple-700/60 hover:bg-purple-700 text-purple-200 font-semibold text-base py-3 rounded-xl transition duration-200 border border-purple-600/50">
              Adicionar ao Carrinho
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}