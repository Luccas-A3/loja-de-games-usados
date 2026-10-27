import Image from 'next/image';
import Link from 'next/link';
import { Jogo } from "@/app/data/catalogo";

export default function GameCard({ jogo }: { jogo: Jogo }) {
  return (
    <div className="bg-[#180e25] rounded-2xl border border-purple-900/60 overflow-hidden shadow-2xl hover:border-purple-500/80 transition-all group flex flex-col justify-between">
      
      {/* Exibição da Imagem - Proporção de capa de jogo (vertical) */}
      <div className="relative aspect-[3/4] w-full bg-[#130a1e] flex items-center justify-center p-4">
        <Image
          src={jogo.imagem}
          alt={jogo.titulo}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
        />
      </div>

      <div className="p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex gap-2 flex-wrap mb-2">
            <span className="text-sm font-semibold bg-purple-900/60 text-purple-300 px-3.5 py-1.5 rounded-lg">
              {jogo.plataforma}
            </span>
            <span className="text-sm font-semibold bg-slate-800 text-slate-300 px-3.5 py-1.5 rounded-lg">
              {jogo.estado}
            </span>
          </div>
          
          <h3 className="font-bold text-2xl text-slate-100 mt-4 group-hover:text-purple-300 transition-colors">
            {jogo.titulo}
          </h3>
          <p className="text-sm text-slate-400 mt-2 line-clamp-2">{jogo.detalhes}</p>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-purple-900/40">
          <span className="text-3xl font-extrabold text-emerald-400">
            R$ {jogo.preco.toFixed(2).replace('.', ',')}
          </span>
          
          {/* Link dinâmico para a página de detalhes/compra */}
          <Link 
            href={`/jogo/${jogo.id}`}
            className="bg-purple-600 hover:bg-purple-500 text-white text-base font-semibold px-6 py-3 rounded-xl transition"
          >
            Ver detalhes
          </Link>
        </div>
      </div>

    </div>
  );
}