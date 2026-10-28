"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [termo, setTermo] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (termo.trim()) {
      router.push(`/pesquisa?q=${encodeURIComponent(termo)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full sm:w-auto flex items-center">
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Pesquisar jogos..."
        className="w-full sm:w-64 bg-[#130b1e] text-slate-100 placeholder-slate-400 text-sm px-4 py-2.5 rounded-xl border border-purple-900/60 focus:outline-none focus:border-purple-500 transition-all shadow-inner"
      />
      <button
        type="submit"
        aria-label="Pesquisar"
        className="absolute right-2.5 text-slate-400 hover:text-purple-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
}