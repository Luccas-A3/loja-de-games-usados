import Image from "next/image";
import AuthButtons from "@/app/components/AuthButtons"; // <--- Importando o componente

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 flex flex-col font-sans">
      
      <header className="w-full bg-[#180e25] border-b border-purple-900/50 shadow-md">
        
        <div className="max-w-[110rem] mx-auto px-8 h-28 flex items-center justify-between">
          
          <div className="flex items-center">
            <h1 className="text-4xl font-extrabold text-purple-300 tracking-wide hover:text-purple-200 transition-colors cursor-pointer">
              Douglas Games
            </h1>
          </div>

          <div className="flex items-center gap-8">
            
            <div className="flex items-center gap-6">

              <div className="relative">
                <input
                  type="text"
                  placeholder="Procurar jogo..."
                  className="bg-[#241537] text-base text-slate-200 placeholder-purple-300/50 px-6 py-3 rounded-xl border border-purple-800/60 focus:outline-none focus:border-purple-500 w-64 sm:w-80 transition-all"
                />
              </div>

              <AuthButtons />

              {/* Botão de Opções (+40% de tamanho) */}
              <button className="text-base font-medium text-slate-300 hover:text-purple-300 px-5 py-3 rounded-xl hover:bg-purple-900/40 transition">
                Opções
              </button>
            </div>

            {/* Espaço para o Logo ampliado (w-16 h-16) */}
            <div className="flex items-center justify-center w-16 h-16 bg-purple-900/50 border-2 border-purple-700/60 rounded-full overflow-hidden text-purple-300 shadow-inner">
              <span className="text-xs text-center font-bold">LOGO</span>
            </div>

          </div>
        </div>

        {/* PARTE DE BAIXO DO HEADER: Linha de navegação com textos maiores (text-lg) */}
        <nav className="bg-[#130b1e] border-t border-purple-900/30">
          <div className="max-w-[110rem] mx-auto px-8 py-3.5 flex items-center gap-12 text-lg font-medium text-purple-200/80">
            <a href="#" className="hover:text-purple-300 transition-colors">Início</a>
            <a href="#" className="hover:text-purple-300 transition-colors">PlayStation</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Xbox</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Nintendo</a>
            <a href="#" className="hover:text-purple-300 transition-colors">PC</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Anunciar Jogo</a>
          </div>
        </nav>

      </header>

      {/* CONTEÚDO PRINCIPAL (Espaçamentos e dimensões ajustados +40%) */}
      <main className="flex-1 max-w-[100rem] mx-auto px-8 pt-16 pb-24 flex flex-col items-center w-full">
        
        {/* Título da seção (+40%: text-4xl) */}
        <h2 className="text-4xl font-bold text-purple-200 mb-12 self-start border-l-8 border-purple-500 pl-4">
          Jogos em Destaque
        </h2>

        {/* TRÊS CARDS ALINHADOS HORIZONTALMENTE (Ampliados) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          

          <div className="bg-[#180e25] rounded-2xl border border-purple-900/60 overflow-hidden shadow-2xl hover:border-purple-500/80 transition-all group cursor-pointer">
            <div className="h-64 bg-[#241537] flex items-center justify-center text-purple-300/60 text-lg font-medium">
              [ Capa do Jogo 1 ]
            </div>
            <div className="p-7">
              <span className="text-sm font-semibold bg-purple-900/60 text-purple-300 px-3.5 py-1.5 rounded-lg">
                PS5 • Seminovo
              </span>
              <h3 className="font-bold text-2xl text-slate-100 mt-4 group-hover:text-purple-300 transition-colors">
                God of War Ragnarök
              </h3>
              <p className="text-sm text-slate-400 mt-2">Completo com caixa original</p>
              <div className="flex justify-between items-center mt-8">
                <span className="text-3xl font-extrabold text-emerald-400">R$ 180,00</span>
                <button className="bg-purple-600 hover:bg-purple-500 text-white text-base font-semibold px-6 py-3 rounded-xl transition">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>


          <div className="bg-[#180e25] rounded-2xl border border-purple-900/60 overflow-hidden shadow-2xl hover:border-purple-500/80 transition-all group cursor-pointer">
            <div className="h-64 bg-[#241537] flex items-center justify-center text-purple-300/60 text-lg font-medium">
              [ Capa do Jogo 2 ]
            </div>
            <div className="p-7">
              <span className="text-sm font-semibold bg-purple-900/60 text-purple-300 px-3.5 py-1.5 rounded-lg">
                Xbox Series • Usado
              </span>
              <h3 className="font-bold text-2xl text-slate-100 mt-4 group-hover:text-purple-300 transition-colors">
                Elden Ring
              </h3>
              <p className="text-sm text-slate-400 mt-2">Disco em perfeito estado</p>
              <div className="flex justify-between items-center mt-8">
                <span className="text-3xl font-extrabold text-emerald-400">R$ 160,00</span>
                <button className="bg-purple-600 hover:bg-purple-500 text-white text-base font-semibold px-6 py-3 rounded-xl transition">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>


          <div className="bg-[#180e25] rounded-2xl border border-purple-900/60 overflow-hidden shadow-2xl hover:border-purple-500/80 transition-all group cursor-pointer">
            <div className="h-64 bg-[#241537] flex items-center justify-center text-purple-300/60 text-lg font-medium">
              [ Capa do Jogo 3 ]
            </div>
            <div className="p-7">
              <span className="text-sm font-semibold bg-purple-900/60 text-purple-300 px-3.5 py-1.5 rounded-lg">
                Switch • Seminovo
              </span>
              <h3 className="font-bold text-2xl text-slate-100 mt-4 group-hover:text-purple-300 transition-colors">
                Zelda: Tears of the Kingdom
              </h3>
              <p className="text-sm text-slate-400 mt-2">Cartucho impecável</p>
              <div className="flex justify-between items-center mt-8">
                <span className="text-3xl font-extrabold text-emerald-400">R$ 250,00</span>
                <button className="bg-purple-600 hover:bg-purple-500 text-white text-base font-semibold px-6 py-3 rounded-xl transition">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}