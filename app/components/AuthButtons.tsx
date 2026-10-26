"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  // Função para deslogar
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
  };

  // Enquanto o Better Auth verifica a sessão
  if (isPending) {
    return <div className="text-sm text-purple-300/50">Carregando...</div>;
  }

  // SE O USUÁRIO ESTIVER LOGADO
  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-base font-medium text-purple-200">
          Olá, {session.user.name}
        </span>
        <button
          onClick={handleSignOut}
          className="text-base font-medium text-red-400 hover:text-red-300 px-5 py-3 rounded-xl hover:bg-red-950/40 transition"
        >
          Sair
        </button>
      </div>
    );
  }

  // SE O USUÁRIO NÃO ESTIVER LOGADO (Substitui o botão "Minha Conta")
  return (
    <Link
      href="/login"
      className="bg-purple-600 hover:bg-purple-500 text-white text-base font-semibold px-6 py-3 rounded-xl transition shadow-lg inline-flex items-center justify-center"
    >
      Entrar / Registrar
    </Link>
  );
}