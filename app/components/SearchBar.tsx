"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Inicializa o input com a busca atual (se houver na URL)
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/catalogo?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/catalogo");
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar jogos, plataformas..."
        className="w-full bg-[#180e25] text-slate-100 placeholder-slate-400 px-4 py-2.5 pl-10 rounded-xl border border-purple-900/60 focus:outline-none focus:border-purple-500 transition"
      />
      <svg
        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
}