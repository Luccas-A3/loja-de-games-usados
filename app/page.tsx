export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 p-6 rounded-lg border border-slate-700 text-center shadow-xl">
        <h1 className="text-3xl font-extrabold text-indigo-400 mb-2">
          GameSwap Store 🎮
        </h1>
        <p className="text-slate-300 text-sm">
          Sua plataforma de compra e troca de jogos usados entre parceiros.
        </p>
      </div>
    </main>
  );
}