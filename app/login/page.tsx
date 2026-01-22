"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = supabaseBrowser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setLoading(false);

    if (error) {
      setMsg("Erro no login: " + error.message);
      return;
    }

    // Vai para o dashboard depois de logar
    window.location.href = "/dashboard";
  }

  async function onRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    setLoading(false);

    if (error) {
      setMsg("Erro no cadastro: " + error.message);
      return;
    }

    setMsg("Cadastro feito! Agora faça login (ou verifique seu e-mail se o Supabase exigir confirmação).");
  }

  return (
    <main style={{ padding: 24, maxWidth: 420 }}>
      <h1>Login</h1>

      <form onSubmit={onLogin} style={{ display: "grid", gap: 10 }}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <label>
          Senha
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <button disabled={loading} style={{ padding: 12 }}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <button type="button" disabled={loading} onClick={onRegister} style={{ padding: 12 }}>
          {loading ? "Criando..." : "Criar conta"}
        </button>

        {msg && <p style={{ color: "#b00" }}>{msg}</p>}
      </form>
    </main>
  );
            }
