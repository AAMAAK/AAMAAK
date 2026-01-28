<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>EGCC | Hub de Governança (Página Única)</title>
  <style>
    :root{
      --bg:#0b1220;
      --panel:#0f1a30;
      --card:#101c34;
      --muted:#92a1c6;
      --text:#e8eeff;
      --accent:#7c5cff;
      --accent2:#22c55e;
      --danger:#ef4444;
      --border: rgba(255,255,255,.10);
      --shadow: 0 18px 50px rgba(0,0,0,.35);
      --radius: 18px;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
      --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
    }
    *{ box-sizing:border-box; }
    body{
      margin:0;
      font-family: var(--sans);
      background: radial-gradient(1200px 800px at 20% 10%, rgba(124,92,255,.20), transparent 60%),
                  radial-gradient(1200px 800px at 80% 70%, rgba(34,197,94,.12), transparent 55%),
                  var(--bg);
      color: var(--text);
    }
    a{ color: inherit; }
    .container{
      max-width: 1180px;
      margin: 0 auto;
      padding: 28px 18px 80px;
      display: grid;
      grid-template-columns: 1.1fr .9fr;
      gap: 18px;
    }
    @media (max-width: 980px){
      .container{ grid-template-columns: 1fr; }
    }

    .header{
      grid-column: 1 / -1;
      border: 1px solid var(--border);
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
      border-radius: var(--radius);
      padding: 18px 18px;
      box-shadow: var(--shadow);
      display:flex;
      gap:14px;
      align-items:flex-start;
      justify-content: space-between;
    }
    .brand{
      display:flex;
      gap:12px;
      align-items:center;
    }
    .logo{
      width:44px;height:44px;
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(124,92,255,.9), rgba(34,197,94,.65));
      box-shadow: 0 10px 30px rgba(124,92,255,.20);
      flex: 0 0 auto;
    }
    .title h1{
      font-size: 18px;
      margin: 0 0 6px;
      letter-spacing: .2px;
    }
    .title p{
      margin:0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.35;
      max-width: 820px;
    }
    .pillbar{
      display:flex;
      gap:8px;
      flex-wrap: wrap;
      justify-content:flex-end;
    }
    .pill{
      border: 1px solid var(--border);
      background: rgba(255,255,255,.04);
      padding: 7px 10px;
      border-radius: 999px;
      font-size: 12px;
      color: var(--muted);
      display:flex;
      align-items:center;
      gap:8px;
    }
    .dot{
      width:8px;height:8px;border-radius:99px;background: var(--accent2);
      box-shadow: 0 0 0 4px rgba(34,197,94,.12);
    }

    .card{
      border: 1px solid var(--border);
      background: rgba(255,255,255,.03);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow:hidden;
    }
    .card .hd{
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      background: rgba(255,255,255,.03);
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 10px;
    }
    .card .hd h2{
      margin:0;
      font-size: 14px;
      letter-spacing:.2px;
    }
    .card .hd .small{
      font-size: 12px;
      color: var(--muted);
    }
    .card .bd{ padding: 14px 16px; }

    .grid2{ display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    @media (max-width: 980px){ .grid2{ grid-template-columns: 1fr; } }

    label{
      display:block;
      font-size: 12px;
      color: var(--muted);
      margin-bottom: 6px;
    }
    input, select, textarea{
      width:100%;
      padding: 10px 10px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: rgba(0,0,0,.18);
      color: var(--text);
      outline: none;
    }
    textarea{ min-height: 88px; resize: vertical; }
    input::placeholder, textarea::placeholder{ color: rgba(146,161,198,.55); }

    .row{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
    .btn{
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.05);
      color: var(--text);
      cursor:pointer;
      transition: .15s ease;
      user-select:none;
    }
    .btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.07); }
    .btn.primary{
      background: linear-gradient(135deg, rgba(124,92,255,.95), rgba(124,92,255,.60));
      border-color: rgba(124,92,255,.35);
    }
    .btn.primary:hover{ background: linear-gradient(135deg, rgba(124,92,255,1), rgba(124,92,255,.65)); }
    .btn.good{
      background: linear-gradient(135deg, rgba(34,197,94,.95), rgba(34,197,94,.50));
      border-color: rgba(34,197,94,.30);
    }
    .btn.danger{
      background: rgba(239,68,68,.14);
      border-color: rgba(239,68,68,.35);
      color: #ffd5d5;
    }

    .stagebar{
      display:flex;
      gap:8px;
      flex-wrap:wrap;
    }
    .stage{
      border: 1px solid var(--border);
      background: rgba(255,255,255,.03);
      border-radius: 999px;
      padding: 8px 10px;
      font-size: 12px;
      color: var(--muted);
      display:flex;
      gap:8px;
      align-items:center;
      cursor:pointer;
    }
    .stage strong{ color: var(--text); font-weight: 600; }
    .stage.active{
      border-color: rgba(124,92,255,.55);
      background: rgba(124,92,255,.14);
      color: #dcd4ff;
    }
    .stage.locked{
      opacity:.55;
      cursor:not-allowed;
    }
    .hint{
      color: var(--muted);
      font-size: 12px;
      line-height: 1.4;
      margin-top: 10px;
    }
    .mono{
      font-family: var(--mono);
      font-size: 12px;
      color: rgba(232,238,255,.88);
      background: rgba(0,0,0,.22);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 12px;
      overflow:auto;
      white-space: pre;
    }

    /* Chat */
    .chatWrap{ display:flex; flex-direction:column; height: 560px; }
    @media (max-width:980px){ .chatWrap{ height: 520px; } }
    .chat{
      padding: 14px 14px;
      display:flex;
      flex-direction:column;
      gap: 10px;
      overflow:auto;
      flex:1;
    }
    .msg{
      max-width: 86%;
      padding: 10px 12px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.03);
      line-height: 1.35;
      font-size: 13px;
      white-space: pre-wrap;
    }
    .msg.user{
      margin-left:auto;
      background: rgba(124,92,255,.14);
      border-color: rgba(124,92,255,.28);
    }
    .msg.assistant{
      background: rgba(255,255,255,.03);
    }
    .composer{
      padding: 12px 12px;
      border-top: 1px solid var(--border);
      display:flex;
      gap: 10px;
      align-items:flex-end;
      background: rgba(255,255,255,.02);
    }
    .composer textarea{
      min-height: 44px;
      max-height: 140px;
      resize: none;
    }
    .tiny{
      font-size: 11px;
      color: rgba(146,161,198,.75);
    }
    .toast{
      position: fixed;
      bottom: 14px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,.55);
      border: 1px solid var(--border);
      padding: 10px 12px;
      border-radius: 999px;
      color: var(--text);
      font-size: 12px;
      box-shadow: var(--shadow);
      opacity:0;
      pointer-events:none;
      transition: .25s ease;
    }
    .toast.show{ opacity: 1; }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <div class="title">
          <h1>EGCC | Governança Fundacional (HUB) — Página Única</h1>
          <p>
            Este HUB é a porta de entrada institucional. Ele organiza a jornada por etapas e evita atalhos.
            A IA apoia — não governa. A decisão continua humana.
          </p>
        </div>
      </div>
      <div class="pillbar">
        <div class="pill"><span class="dot"></span> Online (UI)</div>
        <div class="pill">Etapa: <span id="pillStage">1</span></div>
        <div class="pill">Sessão: <span id="pillSession" class="tiny"></span></div>
      </div>
    </div>

    <!-- Configurações -->
    <section class="card">
      <div class="hd">
        <h2>Configurações</h2>
        <span class="small">Tudo que o site precisa para falar com seu endpoint.</span>
      </div>
      <div class="bd">
        <div class="grid2">
          <div>
            <label>Endpoint do seu servidor (Backend)</label>
            <input id="endpoint" placeholder="https://seu-dominio.com/api/chat" />
            <div class="hint">
              O frontend <b>nunca</b> fala direto com a OpenAI. Ele fala com <b>seu</b> endpoint, que aplica as regras do Método EGCC.
            </div>
          </div>
          <div>
            <label>Modo</label>
            <select id="mode">
              <option value="hub">Hub EGCC (recomendado)</option>
              <option value="sandbox">Sandbox (sem travas — não recomendado)</option>
            </select>
            <div class="hint">
              <b>Hub EGCC</b> mantém a progressão e “libera 1 GPT por vez”. Sandbox é apenas para teste técnico.
            </div>
          </div>

          <div>
            <label>Identificação institucional (ex.: nome da organização)</label>
            <input id="orgName" placeholder="Ex.: Grupo XYZ / Família Silva" />
          </div>
          <div>
            <label>Idioma</label>
            <select id="lang">
              <option value="pt-BR">pt-BR</option>
              <option value="en-US">en-US</option>
              <option value="es-ES">es-ES</option>
            </select>
          </div>
        </div>

        <div style="margin-top:12px;">
          <label>Etapas do Método EGCC (liberar apenas uma por vez)</label>
          <div class="stagebar" id="stagebar"></div>
          <div class="hint" id="stageHint"></div>
        </div>

        <div class="row" style="margin-top:12px;">
          <button class="btn good" id="saveBtn">Salvar configurações</button>
          <button class="btn" id="newSessionBtn">Nova sessão</button>
          <button class="btn danger" id="resetBtn">Reset total</button>
        </div>

        <div style="margin-top:14px;">
          <label>Estado atual (debug)</label>
          <div class="mono" id="stateBox"></div>
        </div>
      </div>
    </section>

    <!-- Chat -->
    <section class="card chatWrap">
      <div class="hd">
        <h2>Chat EGCC (HUB)</h2>
        <span class="small">O backend aplica governança de acesso, não o usuário.</span>
      </div>

      <div class="chat" id="chat"></div>

      <div class="composer">
        <textarea id="msg" placeholder="Escreva aqui… (ex.: “não temos conselho; como começar?”)"></textarea>
        <button class="btn primary" id="sendBtn">Enviar</button>
      </div>
      <div class="bd" style="padding-top:8px;">
        <div class="tiny">
          Dica: se o backend estiver offline, o chat exibirá erro. Publique o endpoint <span class="mono" style="display:inline; padding:2px 6px;">/api/chat</span> do bloco “Backend” desta página.
        </div>
      </div>
    </section>

    <!-- Backend (em texto, na mesma página, para copiar/colar) -->
    <section class="card" style="grid-column: 1 / -1;">
      <div class="hd">
        <h2>Backend mínimo (Node/Express) — copie e cole</h2>
        <span class="small">Necessário para proteger a chave e aplicar as regras do HUB.</span>
      </div>
      <div class="bd">
        <div class="hint" style="margin-top:0;">
          1) Crie um arquivo <b>server.js</b> no seu servidor<br/>
          2) Instale dependências: <span class="mono" style="display:inline; padding:2px 6px;">npm i express cors dotenv</span><br/>
          3) Configure <b>.env</b> com sua chave: <span class="mono" style="display:inline; padding:2px 6px;">OPENAI_API_KEY=...</span><br/>
          4) Rode: <span class="mono" style="display:inline; padding:2px 6px;">node server.js</span><br/>
          5) Aponte o endpoint no painel acima.
        </div>

        <div class="mono" id="backendCode"></div>

        <div class="hint">
          Observação institucional: o HUB abaixo faz o “roteamento por etapa” via <b>system prompt</b>.
          Você pode evoluir para banco de dados, autenticação e auditoria de decisões depois — sem quebrar o frontend.
        </div>
      </div>
    </section>
  </div>

  <div class="toast" id="toast"></div>

  <script>
    // =========================
    // Estado & Persistência
    // =========================
    const LS_KEY = "egcc_hub_state_v1";

    const STAGES = [
      { id: 1, name: "Clareza Conceitual", target: "EGCC | Especialista em Governança Corporativa" },
      { id: 2, name: "Consciência de Riscos", target: "EGCC | Diagnóstico Inicial de Governança" },
      { id: 3, name: "Institucionalização", target: "Rito EGCC de Início" },
      { id: 4, name: "Operação", target: "EGCC | Secretaria Executiva" },
    ];

    function newId(){
      // id simples (suficiente para sessão client-side)
      return "sess_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16);
    }

    const defaultState = {
      endpoint: "",
      mode: "hub",
      orgName: "",
      lang: "pt-BR",
      sessionId: newId(),
      stage: 1,
      maxUnlockedStage: 1, // trava institucional: só libera 1 por vez
      messages: [
        {
          role: "assistant",
          content:
`Bem-vindo à EGCC.

Aqui você não acessa ferramentas isoladas.
Você acessa uma estrutura institucional de governança, organizada por método e por etapas.

Para começarmos: descreva, em 2–3 linhas, como vocês decidem hoje (há atas? conselho? decisões registradas?).`
        }
      ]
    };

    function loadState(){
      try{
        const raw = localStorage.getItem(LS_KEY);
        if(!raw) return structuredClone(defaultState);
        const st = JSON.parse(raw);
        // sane defaults
        return { ...structuredClone(defaultState), ...st };
      }catch{
        return structuredClone(defaultState);
      }
    }

    function saveState(){
      localStorage.setItem(LS_KEY, JSON.stringify(state));
      renderState();
    }

    let state = loadState();

    // =========================
    // UI Helpers
    // =========================
    const $ = (id) => document.getElementById(id);

    function toast(msg){
      const t = $("toast");
      t.textContent = msg;
      t.classList.add("show");
      setTimeout(()=> t.classList.remove("show"), 2200);
    }

    function escapeHtml(str){
      return str.replace(/[&<>"']/g, (m) => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
      }[m]));
    }

    function renderPills(){
      $("pillStage").textContent = String(state.stage);
      $("pillSession").textContent = state.sessionId.slice(0, 18) + "…";
    }

    function renderStagebar(){
      const bar = $("stagebar");
      bar.innerHTML = "";
      STAGES.forEach(s=>{
        const btn = document.createElement("div");
        const locked = (state.mode === "hub") && (s.id > state.maxUnlockedStage);
        btn.className = "stage" + (s.id === state.stage ? " active" : "") + (locked ? " locked" : "");
        btn.innerHTML = `<strong>ETAPA ${s.id}</strong> · ${escapeHtml(s.name)}`;
        btn.onclick = ()=>{
          if(locked){
            toast("Etapa bloqueada pelo método. Libere sequencialmente.");
            return;
          }
          state.stage = s.id;
          saveState();
          renderPills();
          renderStageHint();
        };
        bar.appendChild(btn);
      });
    }

    function renderStageHint(){
      const st = STAGES.find(x=>x.id===state.stage);
      const lockedNote = (state.mode==="hub")
        ? `No modo HUB, você libera apenas uma etapa por vez. Atualmente liberado até ETAPA ${state.maxUnlockedStage}.`
        : `Modo Sandbox: sem travas (somente para teste técnico).`;
      $("stageHint").innerHTML =
        `Etapa atual direciona para: <b>${escapeHtml(st.target)}</b><br/>${escapeHtml(lockedNote)}`;
    }

    function renderChat(){
      const chat = $("chat");
      chat.innerHTML = "";
      state.messages.forEach(m=>{
        const el = document.createElement("div");
        el.className = "msg " + (m.role === "user" ? "user" : "assistant");
        el.textContent = m.content;
        chat.appendChild(el);
      });
      chat.scrollTop = chat.scrollHeight;
    }

    function renderState(){
      $("endpoint").value = state.endpoint;
      $("mode").value = state.mode;
      $("orgName").value = state.orgName;
      $("lang").value = state.lang;

      const debug = {
        endpoint: state.endpoint,
        mode: state.mode,
        orgName: state.orgName,
        lang: state.lang,
        sessionId: state.sessionId,
        stage: state.stage,
        maxUnlockedStage: state.maxUnlockedStage,
        messagesCount: state.messages.length
      };
      $("stateBox").textContent = JSON.stringify(debug, null, 2);

      renderPills();
      renderStagebar();
      renderStageHint();
      renderChat();
    }

    // =========================
    // Prompt (o backend aplica, mas mandamos contexto)
    // =========================
    function buildClientContext(){
      const st = STAGES.find(x=>x.id===state.stage);
      return {
        orgName: state.orgName || null,
        lang: state.lang,
        stage: state.stage,
        stageName: st.name,
        stageTarget: st.target,
        mode: state.mode,
        methodRules: [
          "Você é o EGCC | Governança Fundacional (HUB).",
          "Você organiza o acesso à governança; não executa governança.",
          "Faça no máximo 3 perguntas simples para entender o estágio.",
          "Não permita pular etapas; libere apenas um GPT por vez.",
          "Tom institucional, calmo e seguro.",
          "Frase essencial: 'A EGCC não vende tecnologia. Vende institucionalização.'"
        ]
      };
    }

    // =========================
    // Chamada ao backend
    // =========================
    async function sendMessage(){
      const text = $("msg").value.trim();
      if(!text) return;

      state.messages.push({ role:"user", content: text });
      $("msg").value = "";
      saveState();

      // placeholder de "digitando"
      state.messages.push({ role:"assistant", content:"(processando…)" });
      renderChat();

      if(!state.endpoint){
        // remove placeholder
        state.messages.pop();
        state.messages.push({
          role:"assistant",
          content:"Para funcionar, configure o endpoint do seu servidor em “Configurações”. Ex.: https://seu-dominio.com/api/chat"
        });
        saveState();
        return;
      }

      try{
        const payload = {
          sessionId: state.sessionId,
          message: text,
          context: buildClientContext(),
          // enviamos um histórico curto; o backend pode resumir e guardar
          history: state.messages.slice(-12).filter(m => m.content !== "(processando…)"),
        };

        const res = await fetch(state.endpoint, {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body: JSON.stringify(payload)
        });

        if(!res.ok){
          const errText = await res.text().catch(()=> "");
          throw new Error(`HTTP ${res.status} — ${errText || "Falha no servidor"}`);
        }

        const data = await res.json();
        const reply = String(data.reply || "").trim() || "(sem resposta)";

        // remove placeholder
        state.messages.pop();
        state.messages.push({ role:"assistant", content: reply });

        // Se o backend informar liberação de etapa (progressão institucional)
        if(typeof data.maxUnlockedStage === "number" && state.mode === "hub"){
          state.maxUnlockedStage = Math.max(state.maxUnlockedStage, data.maxUnlockedStage);
          // também pode avançar etapa se fizer sentido:
          if(typeof data.stage === "number"){
            state.stage = Math.min(data.stage, state.maxUnlockedStage);
          }
          toast(`Atualização: liberado até ETAPA ${state.maxUnlockedStage}`);
        }

        saveState();
      }catch(e){
        // remove placeholder
        state.messages.pop();
        state.messages.push({
          role:"assistant",
          content:
`Não consegui falar com o endpoint.
Verifique:
- URL do endpoint
- CORS habilitado
- servidor online

Detalhe técnico: ${String(e.message || e)}`
        });
        saveState();
      }
    }

    // =========================
    // Eventos
    // =========================
    $("sendBtn").onclick = sendMessage;
    $("msg").addEventListener("keydown", (e)=>{
      if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        sendMessage();
      }
    });

    $("saveBtn").onclick = ()=>{
      state.endpoint = $("endpoint").value.trim();
      state.mode = $("mode").value;
      state.orgName = $("orgName").value.trim();
      state.lang = $("lang").value;

      // se trocar modo, ajusta travas
      if(state.mode === "hub"){
        state.stage = Math.min(state.stage, state.maxUnlockedStage);
      }
      saveState();
      toast("Configurações salvas.");
    };

    $("newSessionBtn").onclick = ()=>{
      state.sessionId = newId();
      state.messages = structuredClone(defaultState.messages);
      saveState();
      toast("Nova sessão iniciada.");
    };

    $("resetBtn").onclick = ()=>{
      localStorage.removeItem(LS_KEY);
      state = structuredClone(defaultState);
      renderState();
      toast("Reset total concluído.");
    };

    // =========================
    // Backend Code (texto na página)
    // =========================
    const backend = `/**
 * server.js — Backend mínimo EGCC HUB (Node + Express)
 * - Protege a chave OPENAI_API_KEY (NUNCA vai para o frontend)
 * - Aplica regras do Método EGCC no system prompt
 * - Exemplo simples sem banco; em produção use DB para auditoria e histórico
 */
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors({ origin: true }));        // ajuste origin em produção
app.use(express.json({ limit: "1mb" }));

// ====== AJUSTE AQUI ======
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if(!OPENAI_API_KEY){
  console.error("Faltou OPENAI_API_KEY no .env");
  process.exit(1);
}

// Chamador HTTP simples (sem SDK) para evitar dependências extras:
async function callOpenAI({ messages, model = "gpt-4.1-mini" }){
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization": \`Bearer \${OPENAI_API_KEY}\`
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.4
    })
  });

  if(!r.ok){
    const t = await r.text().catch(()=> "");
    throw new Error(\`OpenAI HTTP \${r.status}: \${t}\`);
  }
  const data = await r.json();
  const reply = data?.choices?.[0]?.message?.content ?? "";
  return String(reply).trim();
}

function buildSystemPrompt(ctx){
  // ctx vem do frontend (context), mas quem manda é o backend.
  const org = ctx?.orgName ? \`Organização: \${ctx.orgName}\\n\` : "";
  const stage = ctx?.stage ? \`Etapa atual: ETAPA \${ctx.stage} — \${ctx.stageName}\\nDirecionamento: \${ctx.stageTarget}\\n\` : "";

  return \`Você é o EGCC | Governança Fundacional (HUB).

ABERTURA PADRÃO:
“Bem-vindo à EGCC.
Aqui você não acessa ferramentas isoladas.
Você acessa uma estrutura institucional de governança, organizada por método e por etapas.”

PRINCÍPIOS:
- Você organiza o acesso à governança; você não executa governança.
- Tom institucional, calmo e seguro.
- Faça no máximo 3 perguntas simples para identificar estágio.
- Não permita pular etapas.
- Libere apenas um GPT por vez.
- Frase essencial: “A EGCC não vende tecnologia. Vende institucionalização.”
- Se o usuário pedir atalhos, recuse educadamente e explique.

${org}${stage}

Sua tarefa:
1) responder ao usuário com clareza institucional;
2) quando fizer sentido, orientar qual é o próximo passo correto (ETAPA 1, 2, 3 ou 4);
3) manter a coerência do método.\`;
}

app.post("/api/chat", async (req, res) => {
  try{
    const { message, history = [], context = {}, sessionId } = req.body || {};
    if(!message || typeof message !== "string"){
      return res.status(400).json({ error: "message é obrigatório" });
    }

    // Trava institucional simples (exemplo):
    // - Se o frontend estiver em HUB, só libera a etapa atual por sequência.
    // Em produção, isso deve ficar no banco por usuário/sessão.
    const mode = context?.mode || "hub";
    const stage = Number(context?.stage || 1);
    const maxUnlockedStage = Number(context?.maxUnlockedStage || 1);

    const sys = buildSystemPrompt(context);

    // Monta mensagens (curto). Em produção, use resumo e armazenamento.
    const msgs = [
      { role: "system", content: sys },
      ...history
        .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .slice(-10),
      { role: "user", content: message }
    ];

    const reply = await callOpenAI({ messages: msgs });

    // Exemplo de progressão:
    // se o reply indicar que etapa 1 concluída, você poderia liberar a 2.
    // Aqui vamos deixar um gatilho simples: se o usuário escrever "concluí etapa 1"
    // (ajuste como quiser).
    let newMax = maxUnlockedStage;
    let newStage = stage;

    if(mode === "hub"){
      const m = message.toLowerCase();
      if(m.includes("concluí etapa 1") || m.includes("conclui etapa 1")){
        newMax = Math.max(newMax, 2);
        newStage = 2;
      }
      if(m.includes("concluí etapa 2") || m.includes("conclui etapa 2")){
        newMax = Math.max(newMax, 3);
        newStage = 3;
      }
      if(m.includes("concluí etapa 3") || m.includes("conclui etapa 3")){
        newMax = Math.max(newMax, 4);
        newStage = 4;
      }
    }

    return res.json({
      sessionId,
      reply,
      stage: newStage,
      maxUnlockedStage: newMax
    });
  }catch(err){
    return res.status(500).json({ error: String(err?.message || err) });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("EGCC HUB backend on port", PORT));`;

    $("backendCode").textContent = backend;

    // Boot
    renderState();
  </script>
</body>
</html>
