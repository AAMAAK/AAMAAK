import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { assertEgccAllowlisted } from "@/lib/allowlist";

export async function POST(req: Request) {
  const supabase = supabaseServer();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "UNAUTH" }, { status: 401 });

  assertEgccAllowlisted(auth.user.email);

  const body = await req.json();
  const name = String(body?.name ?? "").trim();
  if (!name) return NextResponse.json({ error: "NAME_REQUIRED" }, { status: 400 });

  const admin = supabaseAdmin();

  const { data: org, error: orgErr } = await admin
    .from("organizations")
    .insert({ name })
    .select("id,name")
    .single();

  if (orgErr || !org) return NextResponse.json({ error: "ORG_CREATE_FAILED" }, { status: 400 });

  await admin.from("org_members").insert({
    org_id: org.id,
    user_id: auth.user.id,
    role: "egcc_admin",
  });

  await admin.from("org_stage_state").insert({
    org_id: org.id,
    current_stage_id: 1,
  });

  await admin.from("audit_log").insert({
    org_id: org.id,
    actor_user_id: auth.user.id,
    event_type: "org_created",
    entity_type: "organizations",
    entity_id: org.id,
    after_json: { name: org.name, stage: 1 },
  });

  return NextResponse.json({ org });
}
