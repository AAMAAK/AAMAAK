import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  // 1) Confere se está logado
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  // 2) Lê o body (JSON)
  const body = await req.json().catch(() => ({}));
  const name = String(body?.name ?? "").trim();

  if (!name) {
    return NextResponse.json({ error: "Faltou 'name' no body" }, { status: 400 });
  }

  // 3) Insere no Supabase (admin / service role)
  const admin = supabaseAdmin();

  const { data: org, error } = await admin
    .from("organizations")
    .insert({ name })
    .select("id,name")
    .single();

  if (error || !org) {
    return NextResponse.json({ error: error?.message ?? "Erro ao criar org" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, org });
}
