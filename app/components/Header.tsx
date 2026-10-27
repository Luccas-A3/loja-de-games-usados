import Link from "next/link";
import AuthButtons from "@/app/components/AuthButtons"; 
import SearchBar from "@/app/components/SearchBar";

export default function Header() {
    return (
<header className="w-full bg-[#180e25] border-b border-purple-900/50 shadow-md">
        
        <div className="max-w-[110rem] mx-auto px-8 h-28 flex items-center justify-between">
          
          <div className="flex items-center">
            <h1 className="text-4xl font-extrabold text-purple-300 tracking-wide hover:text-purple-200 transition-colors cursor-pointer">
              Douglas Games
            </h1>
          </div>

          <div className="flex items-center gap-8">
            
            <div className="flex items-center gap-6">

            <SearchBar />

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
          <Link href="/" className="hover:text-purple-300 transition-colors">
              Início
            </Link>
            
            <Link href="/playstation" className="hover:text-purple-300 transition-colors">
              PlayStation
            </Link>
            
            <Link href="/xbox" className="hover:text-purple-300 transition-colors">
              Xbox
            </Link>
            
            <Link href="/nintendo" className="hover:text-purple-300 transition-colors">
              Nintendo
            </Link>
            
            <Link href="/pc" className="hover:text-purple-300 transition-colors">
              PC
            </Link>

          </div>
        </nav>

      </header>
);
}