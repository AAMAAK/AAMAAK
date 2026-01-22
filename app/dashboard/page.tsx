import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = supabaseServer();

  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    redirect("/login");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <p>Você está logado ✅</p>
      <p><b>Email:</b> {user.email}</p>

      <p>Agora podemos criar organização via API.</p>
    </main>
  );
}
