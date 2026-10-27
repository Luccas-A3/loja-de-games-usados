"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isRegistering) {
      // Registrar conta
      const { error } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        setError(error.message || "Erro ao criar conta");
      } else {
        router.push("/");
      }
    } else {
      // Fazer login
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setError(error.message || "Credenciais inválidas");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0714] text-slate-100 flex flex-col justify-center items-center font-sans px-6">
      
      {/* Container do Card de Autenticação */}
      <div className="w-full max-w-md bg-[#180e25] rounded-2xl border border-purple-900/60 p-8 shadow-2xl">
        
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-purple-300 tracking-wide">
            Douglas Games
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            {isRegistering ? "Crie sua nova conta" : "Entre na sua conta"}
          </p>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="mb-6 p-3 bg-red-950/60 border border-red-700/50 rounded-xl text-red-300 text-sm text-center">
            {error}
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {isRegistering && (
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">Nome de Usuário</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                className="w-full bg-[#241537] text-base text-slate-200 placeholder-purple-300/40 px-5 py-3 rounded-xl border border-purple-800/60 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full bg-[#241537] text-base text-slate-200 placeholder-purple-300/40 px-5 py-3 rounded-xl border border-purple-800/60 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-[#241537] text-base text-slate-200 placeholder-purple-300/40 px-5 py-3 rounded-xl border border-purple-800/60 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3.5 rounded-xl transition shadow-lg text-base"
          >
            {isRegistering ? "Cadastrar Conta" : "Entrar"}
          </button>
        </form>

        {/* Alternar entre Login e Registro */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-sm text-purple-300 hover:text-purple-200 transition-colors underline"
          >
            {isRegistering
              ? "Já tem uma conta? Faça login"
              : "Não tem conta? Cadastre-se"}
          </button>
        </div>

      </div>
    </div>
  );
}