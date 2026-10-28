import Link from "next/link";
import Image from "next/image"; 
import AuthButtons from "@/app/components/AuthButtons"; 
import SearchBar from "@/app/components/SearchBar";

export default function Header() {
    return (
      <header className="w-full bg-[#180e25] border-b border-purple-900/50 shadow-md">
        
        <div className="max-w-[110rem] mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-purple-300 tracking-wide hover:text-purple-200 transition-colors cursor-pointer">
              Douglas Games
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full md:w-auto">
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 w-full md:w-auto">
              <SearchBar />
              <AuthButtons />

              <button className="text-sm sm:text-base font-medium text-slate-300 hover:text-purple-300 px-3 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-purple-900/40 transition">
                Opções
              </button>
            </div>

            <div className="hidden sm:flex items-center justify-center w-14 h-14 bg-purple-900/50 border-2 border-purple-700/60 rounded-full overflow-hidden text-purple-300 shadow-inner relative flex-shrink-0">
    <Image
      src="https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/image-removebg-preview%20%281%29.png"
      alt="Logo Douglas Games"
      width={56} 
      height={56} 
      className="object-cover w-full h-full"
    />
  </div>

          </div>
        </div>

        {/* PARTE DE BAIXO DO HEADER: Navegação adaptada para mobile */}
        <nav className="bg-[#130b1e] border-t border-purple-900/30 overflow-x-auto">
          <div className="max-w-[110rem] mx-auto px-4 sm:px-8 py-3 flex items-center gap-6 sm:gap-12 text-base sm:text-lg font-medium text-purple-200/80 whitespace-nowrap">
            <Link href="/" className="hover:text-purple-300 transition-colors">Início</Link>
            <Link href="/playstation" className="hover:text-purple-300 transition-colors">PlayStation</Link>
            <Link href="/xbox" className="hover:text-purple-300 transition-colors">Xbox</Link>
            <Link href="/nintendo" className="hover:text-purple-300 transition-colors">Nintendo</Link>
            <Link href="/pc" className="hover:text-purple-300 transition-colors">PC</Link>
          </div>
        </nav>

      </header>
    );
}