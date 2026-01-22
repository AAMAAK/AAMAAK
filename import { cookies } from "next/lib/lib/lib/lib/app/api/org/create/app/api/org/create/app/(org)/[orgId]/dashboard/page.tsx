import { supabaseServer } from "@/lib/supabase-server";

export default async function Dashboard({ params }: { params: { orgId: string } }) {
  const supabase = supabaseServer();
  const orgId = params.orgId;

  const { data: stage } = await supabase
    .from("org_stage_state")
    .select("current_stage_id, locked_reason")
    .eq("org_id", orgId)
    .single();

  const { data: org } = await supabase
    .from("organizations")
    .select("id, name")
    .eq("id", orgId)
    .single();

  return (
    <div style={{ padding: 24 }}>
      <h1>{org?.name ?? "Organização"}</h1>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Etapa atual</h2>
        <p><b>{stage?.current_stage_id ?? 1}</b></p>
        {stage?.locked_reason ? (
          <p style={{ color: "crimson" }}>Travado: {stage.locked_reason}</p>
        ) : (
          <p>Somente esta etapa está disponível. Etapas futuras permanecem bloqueadas.</p>
        )}
      </div>
    </div>
  );
}
