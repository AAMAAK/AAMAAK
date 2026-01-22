import { supabaseServer } from "./supabase-server";

export async function assertOrgMember(orgId: string) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("org_members")
    .select("role")
    .eq("org_id", orgId)
    .single();

  if (error || !data) throw new Error("NOT_MEMBER");
  return data.role as string;
}

export async function assertStageGate(orgId: string, expectedStageId: number) {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("org_stage_state")
    .select("current_stage_id, locked_reason")
    .eq("org_id", orgId)
    .single();

  if (error || !data) throw new Error("NO_STAGE_STATE");
  if (data.locked_reason) throw new Error("ORG_LOCKED");
  if (data.current_stage_id !== expectedStageId) throw new Error("STAGE_BLOCKED");
}

export async function audit(orgId: string, event: {
  event_type: string;
  entity_type: string;
  entity_id?: string | null;
  before_json?: any;
  after_json?: any;
}) {
  const supabase = supabaseServer();
  const { data: auth } = await supabase.auth.getUser();
  const actor = auth.user?.id ?? null;

  const { error } = await supabase.from("audit_log").insert({
    org_id: orgId,
    actor_user_id: actor,
    ...event,
  });

  if (error) throw new Error("AUDIT_FAILED");
}
