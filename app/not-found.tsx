import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-2">Página não encontrada</h2>
      <p className="text-gray-400 mb-6">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}