import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { cadastrarJogo } from "./actions";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const requestHeaders = await headers();

  // 1. Obter a sessão básica do Better Auth
  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  // Se não houver utilizador logado, manda para a home
  if (!session || !session.user) {
    redirect("/");
  }

  // 2. Consulta direta ao banco de dados para garantir o cargo real do usuário
  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, name: true, email: true },
  });

  // 3. Se o utilizador não existir ou não for ADMIN, bloqueia o acesso
  if (!dbUser || dbUser.role !== "ADMIN") {
    redirect("/");
  }

  // 4. Buscar dados para o painel (já sabendo que é admin)
  const totalJogos = await prisma.jogo.count();
  const propostasPendentes = await prisma.propostaCompra.findMany({
    where: { status: "PENDENTE" },
    include: {
      jogo: true,
      user: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-gray-400">
              Bem-vindo de volta, <span className="text-white font-medium">{dbUser.name}</span>.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
          >
            Voltar para a Loja
          </a>
        </header>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-gray-400 text-sm font-medium">Jogos no Catálogo</h2>
            <p className="text-3xl font-bold mt-2">{totalJogos}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-gray-400 text-sm font-medium">Propostas Pendentes</h2>
            <p className="text-3xl font-bold mt-2 text-yellow-400">{propostasPendentes.length}</p>
          </div>
        </div>

        {/* Secção de Propostas de Compra */}
        <section className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Propostas de Compra Recebidas</h2>
          
          {propostasPendentes.length === 0 ? (
            <p className="text-gray-400 text-sm">Não há propostas pendentes no momento.</p>
          ) : (
            <div className="space-y-4">
              {propostasPendentes.map((proposta) => (
                <div 
                  key={proposta.id} 
                  className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div>
                    <h3 className="font-medium text-lg">{proposta.jogo.titulo}</h3>
                    <p className="text-sm text-gray-400">
                      Proposta de: <span className="text-white">{proposta.user.name}</span> ({proposta.user.email})
                    </p>
                    <p className="text-sm text-gray-300 mt-1">
                      Mensagem: &quot;{proposta.mensagem}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-green-400">
                      R$ {Number(proposta.valor).toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-500 text-xs rounded transition font-medium">
                        Aceitar
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-red-500 text-xs rounded transition font-medium">
                        Recusar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
  <h2 className="text-xl font-semibold mb-4">Adicionar Novo Jogo ao Catálogo</h2>
  
  <form action={cadastrarJogo} className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm text-gray-400 mb-1">Título do Jogo *</label>
      <input
        type="text"
        name="titulo"
        required
        placeholder="Ex: God of War Ragnarök"
        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-400 mb-1">Plataforma *</label>
      <select
        name="plataforma"
        required
        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-indigo-500"
      >
        <option value="">Selecione a plataforma</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="PC">PC</option>
      </select>
    </div>

    <div>
      <label className="block text-sm text-gray-400 mb-1">Preço (R$) *</label>
      <input
        type="number"
        step="0.01"
        name="preco"
        required
        placeholder="199.90"
        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="block text-sm text-gray-400 mb-1">Imagem do Jogo (Ficheiro)</label>
      <input
        type="file"
        name="imagem"
        accept="image/*"
        required
        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
      />
    </div>

    <div className="md:col-span-2">
      <label className="block text-sm text-gray-400 mb-1">Descrição</label>
      <textarea
        name="descricao"
        rows={3}
        placeholder="Breve descrição do estado do jogo ou da história..."
        className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-indigo-500"
      ></textarea>
    </div>

    <div className="md:col-span-2">
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2.5 rounded-lg transition"
      >
        Cadastrar Jogo e Fazer Upload da Imagem
      </button>
    </div>
  </form>
</section>
      </div>
      
    </div>
    
  );
}