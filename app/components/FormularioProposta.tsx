"use client";

import { useState } from "react";

interface FormularioPropostaProps {
  jogoId: string;
  precoOriginal: number;
}

export default function FormularioProposta({
  jogoId,
  precoOriginal,
}: FormularioPropostaProps) {
  const [modalAberto, setModalAberto] = useState(false);
  const [valor, setValor] = useState(precoOriginal.toString());
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    setSucesso(false);

    try {
      const res = await fetch("/api/propostas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jogoId,
          valor: parseFloat(valor),
          mensagem,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Falha ao enviar proposta.");
      }

      setSucesso(true);
      setTimeout(() => {
        setModalAberto(false);
        setSucesso(false);
        setMensagem("");
      }, 2000);
    } catch (err: any) {
      setErro(err.message || "Ocorreu um erro ao enviar sua proposta.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      {/* Botão Principal para abrir o formulário */}
      <button
        onClick={() => setModalAberto(true)}
        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2"
      >
        🤝 Enviar Proposta de Compra
      </button>

      {/* Modal / Pop-up do Formulário */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#180e25] border border-purple-800/80 w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl relative text-slate-100">
            {/* Fechar Modal */}
            <button
              onClick={() => setModalAberto(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-purple-200 mb-2">
              Fazer Proposta
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Insira o valor que deseja oferecer e envie uma mensagem para o vendedor.
            </p>

            {sucesso ? (
              <div className="bg-emerald-900/40 border border-emerald-500/60 text-emerald-300 p-4 rounded-xl text-center font-semibold">
                ✅ Proposta enviada com sucesso!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {erro && (
                  <div className="bg-red-900/40 border border-red-500/60 text-red-300 p-3 rounded-lg text-sm">
                    {erro}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Valor da Proposta (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    required
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    className="w-full bg-[#0d0714] border border-purple-900/60 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Consigo retirar em mãos no fim de semana..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full bg-[#0d0714] border border-purple-900/60 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>

                <div className="flex gap-3 justify-end mt-2">
                  <button
                    type="button"
                    onClick={() => setModalAberto(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={carregando}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 font-semibold text-white transition disabled:opacity-50"
                  >
                    {carregando ? "Enviando..." : "Confirmar Proposta"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}