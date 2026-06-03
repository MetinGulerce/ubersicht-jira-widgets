export const refreshFrequency = 7200000; // 2 saat (120 dakika)

export const className = `
  display: block;
  box-sizing: border-box;
  width: 340px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #f0f0f0;
  position: fixed;
  top: 5px;
  right: 375px;

  .radar-wrap {
    width: 100%;
    background: linear-gradient(180deg, rgba(7,11,24,.55), rgba(12,14,18,.55));
    border: 1px solid rgba(120,156,255,0.15);
    border-radius: 12px;
    padding: 10px;
    backdrop-filter: blur(10px) saturate(120%);
    box-shadow: 0 6px 16px rgba(0,0,0,0.22);
    max-height: calc(100vh - 12px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .radar-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px dashed rgba(150,180,255,0.18);
    padding-bottom: 6px; margin-bottom: 8px;
    font-size: 12px; font-weight: 700; color: #eaf1ff;
    letter-spacing: .02em;
  }
  .radar-time { font-size: 10px; color: #a9b7d9; }

  .alerts {
    display: grid; gap: 6px; margin-bottom: 8px;
    background: linear-gradient(180deg, rgba(35,20,20,.35), rgba(35,20,20,.15));
    border: 1px solid rgba(255,100,120,.25);
    border-radius: 10px; padding: 8px;
    position: relative;
  }
  
  /* RFP yok ise yeşil tema */
  .alerts.no-rfp {
    background: linear-gradient(180deg, rgba(20,35,20,.35), rgba(20,35,20,.15));
    border-color: rgba(100,255,120,.25);
  }

  .alerts-title { font-size: 11px; color: #ffc9cf; font-weight: 700; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }

  .chip {
    font-size: 10px; line-height: 1;
    padding: 3px 8px; border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.06);
    color: #e9f2ff; text-decoration: none;
    transition: all 0.3s ease;
  }
  .chip:hover { 
    background: rgba(255,255,255,0.10);
    transform: translateY(-1px);
  }

  /* RFP Badge Styling - Kırmızı ve dikkat çekici */
  .chip-rfp {
    background: linear-gradient(135deg, #ff4757, #ff3838, #c44569);
    border: 1px solid #ff6b7a;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
    animation: rfpPulse 2s ease-in-out infinite;
    position: relative;
    overflow: hidden;
  }
  
  .chip-rfp::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: rfpShine 3s ease-in-out infinite;
  }
  
  .chip-rfp:hover {
    background: linear-gradient(135deg, #ff3838, #ff2d2d, #b33755);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 71, 87, 0.6);
    animation: rfpPulseHover 0.8s ease-in-out infinite;
  }

  /* Animasyonlar */
  @keyframes rfpPulse {
    0%, 100% { 
      opacity: 1; 
      box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
    }
    50% { 
      opacity: 0.85; 
      box-shadow: 0 6px 16px rgba(255, 71, 87, 0.6);
    }
  }
  
  @keyframes rfpPulseHover {
    0%, 100% { 
      transform: translateY(-2px) scale(1.05);
    }
    50% { 
      transform: translateY(-3px) scale(1.08);
    }
  }
  
  @keyframes rfpShine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  /* RFP var ise alerts containerına glow efekti */
  .alerts.has-rfp {
    border-color: rgba(255, 100, 120, 0.5);
    box-shadow: 0 0 20px rgba(255, 71, 87, 0.3);
    animation: alertsGlow 3s ease-in-out infinite;
  }
  
  @keyframes alertsGlow {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(255, 71, 87, 0.3);
    }
    50% { 
      box-shadow: 0 0 30px rgba(255, 71, 87, 0.5);
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding-right: 4px;
  }
  .team-grid::-webkit-scrollbar { width: 6px; }
  .team-grid::-webkit-scrollbar-thumb {
    background: rgba(120,156,255,0.28);
    border-radius: 999px;
  }

  .card {
    background: linear-gradient(180deg, rgba(18,20,28,.4), rgba(12,14,18,.35));
    border: 1px solid rgba(120,156,255,0.14);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .card[open] {
    border-color: rgba(120,156,255,0.26);
    box-shadow: 0 10px 24px rgba(0,0,0,0.18);
  }
  .card summary {
    list-style: none;
  }
  .card summary::-webkit-details-marker {
    display: none;
  }
  .card-summary {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 8px;
    cursor: pointer;
  }
  .card-summary:hover {
    background: rgba(255,255,255,0.04);
  }
  .card-main {
    min-width: 0;
  }
  .card-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .card-counts {
    font-size: 12px;
    font-weight: 800;
    color: #eaf1ff;
    white-space: nowrap;
  }
  .card-expand {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    color: #9fb0d9;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .card-expand::before {
    content: '▾';
    transition: transform 0.2s ease;
  }
  .card[open] .card-expand::before {
    transform: rotate(180deg);
  }
  .card-body {
    padding: 0 8px 10px 8px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .avatar {
    width: 58px; height: 58px; border-radius: 12px;
    background: radial-gradient(120px at 30% 30%, #4c83ff33, transparent 60%),
                radial-gradient(120px at 70% 70%, #52c41a33, transparent 60%),
                #101622;
    border: 1px solid rgba(100,140,255,0.2);
    display: grid; place-items: center; color: #cfe1ff; font-weight: 800; letter-spacing: .04em;
  }
  .name { font-size: 12px; font-weight: 700; color: #eaf1ff; }
  .meta { font-size: 10px; color: #9fb0d9; }

  .ring {
    --p: 0;
    width: 58px; height: 58px; border-radius: 50%;
    background:
      conic-gradient(#52c41a var(--p), rgba(255,255,255,0.08) 0);
    display: grid; place-items: center;
  }
  .ring-inner {
    width: 48px; height: 48px; border-radius: 50%;
    background: rgba(6,10,18,.85);
    border: 1px solid rgba(120,156,255,0.18);
    display: grid; place-items: center;
    color: #cfe1ff; font-size: 12px; font-weight: 800;
  }

  .bars { display: grid; gap: 5px; margin-top: 6px; }
  .bar-row { display: grid; grid-template-columns: 50px 1fr 20px; gap: 6px; align-items: center; }
  .bar-label { font-size: 10px; color: #9fb0d9; text-align: right; }
  .bar {
    height: 6px; border-radius: 999px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    overflow: hidden;
  }
  .fill { height: 100%; background: linear-gradient(90deg, #4c83ff, #52c41a); width: 0%; }

  .empty { color: #a9b7d9; font-size: 11px; opacity: .9; }

  .bar-row {
    display: grid; grid-template-columns: 50px 1fr 20px; gap: 6px; align-items: center;
    cursor: pointer;
    border-radius: 4px;
    padding: 2px;
    transition: background-color 0.2s ease;
  }
  .bar-row:hover {
    background: rgba(255,255,255,0.05);
  }

  /* Detay görünümü */
  .task-detail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(6,10,18,.95);
    border-radius: 10px;
    padding: 12px;
    z-index: 10;
    display: flex;
    flex-direction: column;
  }
  
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .detail-title {
    font-size: 11px;
    font-weight: 700;
    color: #eaf1ff;
  }
  
  .close-btn {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 9px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .close-btn:hover {
    background: rgba(255,255,255,0.2);
  }
  
  .task-list {
    flex: 1;
    overflow-y: auto;
    max-height: 120px;
  }
  
  .task-item {
    padding: 4px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 9px;
    color: #cfe1ff;
    line-height: 1.3;
  }
  .task-item:last-child {
    border-bottom: none;
  }
  
  .task-key {
    font-weight: 700;
    color: #4c83ff;
  }
`;

export const command = `
#!/bin/bash
set -e

# Ortam dosyaları
for f in \\
  "$HOME/.jira_env" \\
  "$HOME/.config/ubersicht/jira_env" \\
  "$HOME/Library/Application Support/Übersicht/widgets/JiraTasks.widget/.env" \\
  "$HOME/Library/Application Support/Übersicht/widgets/JiraTeamRadar.widget/.env"
do
  [ -f "$f" ] && . "$f"
done

BASE_URL="\${JIRA_BASE_URL}"
EMAIL="\${JIRA_EMAIL}"
TOKEN="\${JIRA_API_TOKEN}"
TEAM_IDS="\${JIRA_TEAM_ACCOUNT_IDS}"

if [ -z "\${BASE_URL}" ] || [ -z "\${EMAIL}" ] || [ -z "\${TOKEN}" ]; then
  printf '{"ok":false,"error":"Jira kimlik bilgileri eksik"}\\n'
  exit 0
fi

URL="\${BASE_URL}/rest/api/3/search/jql"
URL_V2="\${BASE_URL}/rest/api/2/search"
FIELDS="summary,priority,status,updated,duedate,assignee,issuetype,project"

# Takım üyelerinin account ID'lerini JQL için hazırla
if [ -n "\${TEAM_IDS}" ]; then
  # Boş elemanları ve sondaki virgülleri temizle; paylaşımda env dosyaları daha toleranslı olsun
  CLEAN_IDS=$(printf '%s' "\${TEAM_IDS}" | tr ',' '\n' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -v '^$' || true)
  if [ -n "\${CLEAN_IDS}" ]; then
    FORMATTED_IDS=$(printf '%s\n' "\${CLEAN_IDS}" | sed 's/"/\\"/g; s/.*/"&"/' | paste -sd, -)
    ASSIGNEE_FILTER="assignee in (\${FORMATTED_IDS})"
  else
    ASSIGNEE_FILTER="assignee = currentUser()"
  fi
else
  # Fallback: sadece current user
  ASSIGNEE_FILTER="assignee = currentUser()"
fi

# Takım üyelerine odaklı JQL: aktif sprint ile
JQL="\${ASSIGNEE_FILTER} AND sprint in openSprints() ORDER BY assignee, updated DESC"

TMP=$(mktemp)
# Modern Jira Cloud API çağrısı - YENİ v3 search/jql endpoint ile (POST)
# JSON string'i dosyaya yazarak güvenli hale getir - JQL'deki çift tırnak escape et
JQL_ESCAPED="\$(echo \"\${JQL}\" | sed 's/\"/\\\\\"/g')"
cat > "\${TMP}.json" << EOF
{
  "jql": "\${JQL_ESCAPED}",
  "maxResults": 200,
  "fields": ["summary","priority","status","updated","duedate","assignee","issuetype","project"]
}
EOF

HTTP=$(curl -sS --max-time 10 -X POST -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -H "User-Agent: Ubersicht-JiraTeamRadar/1.0" \\
  -d @"\${TMP}.json" \\
  -u "\${EMAIL}:\${TOKEN}" "\${URL}" -o "\${TMP}" -w "%{http_code}")

rm -f "\${TMP}.json"

if [ "\${HTTP}" = "400" ]; then
  # Fallback: aktif sprint filtresi olmadan ama sadece son 30 güne odaklan
  JQL="\${ASSIGNEE_FILTER} AND updated >= -30d AND status not in (Done, Closed, Resolved) ORDER BY assignee, updated DESC"
  cat > "\${TMP}.json" << EOF
{
  "jql": "\${JQL}",
  "maxResults": 100,
  "fields": ["summary","priority","status","updated","duedate","assignee","issuetype","project"]
}
EOF
  HTTP=$(curl -sS --max-time 10 -X POST -H "Accept: application/json" \\
    -H "Content-Type: application/json" \\
    -H "User-Agent: Ubersicht-JiraTeamRadar/1.0" \\
    -d @"\${TMP}.json" \\
    -u "\${EMAIL}:\${TOKEN}" "\${URL}" -o "\${TMP}" -w "%{http_code}")
  rm -f "\${TMP}.json"
fi

# Eğer yeni endpoint 410/404 dönerse eski v2 endpoint'ine geri dön (GET ile)
if [ "\${HTTP}" = "410" ] || [ "\${HTTP}" = "404" ]; then
  HTTP=$(curl -sS --max-time 10 -G -H "Accept: application/json" \\
    -H "User-Agent: Ubersicht-JiraTeamRadar/1.0" \\
    --data-urlencode "jql=\${JQL}" \\
    --data-urlencode "maxResults=200" \\
    --data-urlencode "fields=\${FIELDS}" \\
    -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")

  if [ "\${HTTP}" = "400" ]; then
    # v2 ile de gerekirse gevşek JQL
    JQL="\${ASSIGNEE_FILTER} AND updated >= -30d AND status not in (Done, Closed, Resolved) ORDER BY assignee, updated DESC"
    HTTP=$(curl -sS --max-time 10 -G -H "Accept: application/json" \\
      -H "User-Agent: Ubersicht-JiraTeamRadar/1.0" \\
      --data-urlencode "jql=\${JQL}" \\
      --data-urlencode "maxResults=100" \\
      --data-urlencode "fields=\${FIELDS}" \\
      -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")
  fi
  
  # v2 ile de 410/404 dönerse son çare: sprint filtresi olmadan, minimum JQL
  if [ "\${HTTP}" = "410" ] || [ "\${HTTP}" = "404" ]; then
    JQL_LAST="\${ASSIGNEE_FILTER} AND updated >= -30d ORDER BY assignee, updated DESC"
    HTTP=$(curl -sS --max-time 10 -G -H "Accept: application/json" \\
      -H "User-Agent: Ubersicht-JiraTeamRadar/1.0" \\
      --data-urlencode "jql=\${JQL_LAST}" \\
      --data-urlencode "maxResults=50" \\
      --data-urlencode "fields=\${FIELDS}" \\
      -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")
      
    # Hala 410 alıyorsak, belki de sadece currentUser() çalışıyordur
    if [ "\${HTTP}" = "410" ] || [ "\${HTTP}" = "404" ]; then
      JQL_BASIC="assignee = currentUser() AND updated >= -30d ORDER BY updated DESC"
      HTTP=$(curl -sS --max-time 10 -G -H "Accept: application/json" \\
        -H "User-Agent: Ubersicht-JiraTeamRadar/1.0" \\
        --data-urlencode "jql=\${JQL_BASIC}" \\
        --data-urlencode "maxResults=30" \\
        --data-urlencode "fields=\${FIELDS}" \\
        -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")
    fi
  fi
fi

TEAM_BODY=$(cat "\${TMP}")
rm -f "\${TMP}"

# RFP uyarıları için - takım üyelerinin RFP statüsündeki işlerini bul
# Önce takım issue'larından RFP olanları filtrele
RFP_BODY='{"issues":[]}'
if [ "\${HTTP}" = "200" ]; then
  RFP_BODY="\${TEAM_BODY}"
fi

NOW=$(date -u +"%FT%TZ")

if [ "\${HTTP}" = "200" ]; then
  printf '{"ok":true,"baseUrl":"%s","teamIssues":%s,"rfpIssues":%s,"lastChecked":"%s"}\\n' \\
    "\${BASE_URL}" "\${TEAM_BODY}" "\${RFP_BODY}" "\${NOW}"
else
  # Hata koduna göre daha açıklayıcı mesajlar
  case "\${HTTP}" in
    "401") ERROR_MSG="Kimlik doğrulama hatası - API token'ınızı kontrol edin" ;;
    "403") ERROR_MSG="Yetki hatası - API token'ınızın Jira erişim izinleri kontrol edin" ;;
    "410") ERROR_MSG="API endpoint kullanımdan kaldırılmış - API versiyonunu güncelleyin" ;;
    "404") ERROR_MSG="API endpoint bulunamadı - Base URL'yi kontrol edin" ;;
    "400") ERROR_MSG="Geçersiz JQL sorgusu veya parametreler" ;;
    "429") ERROR_MSG="Rate limit aşıldı - Çok fazla istek gönderiyorsunuz" ;;
    "500"|"502"|"503") ERROR_MSG="Jira server hatası - Daha sonra tekrar deneyin" ;;
    *) ERROR_MSG="Bilinmeyen Jira API hatası" ;;
  esac
  
  printf '{"ok":false,"status":"%s","error":"%s","lastChecked":"%s"}\\n' \\
    "\${HTTP}" "\${ERROR_MSG}" "\${NOW}"
fi
`;

const normalize = (s) => (s || '')
  .toString()
  .toLowerCase()
  .replace(/[ığüşöç]/g, c => ({'ı':'i','ğ':'g','ü':'u','ş':'s','ö':'o','ç':'c'}[c]))
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/['’`"]/g, '')
  .replace(/[\s_-]+/g, ' ')
  .trim();

// RFP/detaylı done sınıflaması
const detail = (raw) => {
  const n = normalize(raw);
  if (['ready for test','ready test','ready 4 test','rft','teste hazir','test hazir'].some(t=>n.includes(t))) return 'rft';
  if (['in test','test','qa','testte','test asamasinda'].some(t=>n.includes(t))) return 'it';
  if (['ready for uat','ready 4 uat','r4u','uat a hazir','uata hazir'].some(t=>n.includes(t))) return 'rfu';
  if (['uat','user acceptance','kullanici kabul'].some(t=>n.includes(t))) return 'uat';
  if ([
    'ready prod','ready for prod','ready for production','production ready',
    'ready to deploy','release to prod','prd','prod ready'
  ].some(t=>n.includes(t))) return 'rfp';
  if ([
    'done','closed','resolved','completed','complete','bitti','bitirildi','yayinda','deployed','tamamlandi','tamam'
  ].some(t=>n.includes(t))) return 'done';
  // Reddedilen işleri filtrele
  if ([
    'rejected','reddedildi','reddedilen','red','cancel','cancelled','iptal','iptal edildi','declined'
  ].some(t=>n.includes(t))) return 'rejected';
  return null;
};

const cat = (raw) => {
  const n = normalize(raw);
  if (['todo','to do','yapilacak','selected for development','open','new','plan','planned','analysis','backlog']
    .some(t=>n.includes(t))) return 'todo';
  if (['in progress','progress','devam','doing','wip','development','implement','coding','review','design']
    .some(t=>n.includes(t))) return 'inprogress';
  const d = detail(raw);
  // Reddedilen işleri tamamen görmezden gel
  if (d === 'rejected') return null;
  return (d ? 'done' : 'inprogress');
};

const percent = (num, den) => (den ? Math.round((num/den)*100) : 0);

const toIssueUrl = (host, key) => (host && key ? `${host}/browse/${key}` : '');

export const render = ({ output, error }) => {
  if (error) return <div className="radar-wrap">Hata: {String(error)}</div>;

  let data = {};
  try { data = JSON.parse(output || '{}'); } catch(e) { 
    return (
      <div className="radar-wrap">
        <div className="radar-header"><span>Takım Radarı</span><span className="radar-time">Parse Hatası</span></div>
        <div className="empty">JSON Parse Hatası: {e.message}</div>
      </div>
    );
  }
  
  if (!data.ok) {
    return (
      <div className="radar-wrap">
        <div className="radar-header"><span>Takım Radarı</span><span className="radar-time">Hata</span></div>
        <div className="empty">
          Jira verisi alınamadı.
          {data.error && (<span><br/>Hata: {data.error}</span>)}
          {data.status && (<span><br/>HTTP Status: {data.status}</span>)}
        </div>
      </div>
    );
  }

  const baseUrl = data.baseUrl || '';
  const teamIssues = data.teamIssues?.issues || [];
  
  // RFP issue'larını takım issue'larından filtrele
  const rfpIssues = teamIssues.filter(it => {
    const status = it.fields?.status?.name || '';
    const detailStatus = detail(status);
    return detailStatus === 'rfp';
  });
  
  const lastChecked = data.lastChecked;

  // Üyelere göre grupla
  const members = {};
  const push = (accId, name, issue) => {
    if (!members[accId]) members[accId] = { name, issues: [] };
    members[accId].issues.push(issue);
  };

  teamIssues.forEach(it => {
    const f = it.fields || {};
    const asg = f.assignee || {};
    const id = asg.accountId || 'unknown';
    const name = asg.displayName || 'Bilinmiyor';
    
    // Reddedilen işleri tamamen filtrele
    const s = it.fields?.status?.name || '';
    const c = cat(s);
    if (c !== null) {  // null olan (reddedilen) işleri dahil etme
      push(id, name, it);
    }
  });

  const memberCards = Object.entries(members)
    .sort(([, memberA], [, memberB]) => memberA.name.localeCompare(memberB.name, 'tr-TR'))
    .map(([accId, m]) => {
    const counts = { todo:0, inprogress:0, rft:0, it:0, rfu:0, uat:0, rfp:0, done:0 };
    const tasksByStatus = { todo:[], inprogress:[], rft:[], it:[], rfu:[], uat:[], rfp:[], done:[] };
    
    m.issues.forEach(it => {
      const s = it.fields?.status?.name || '';
      const c = cat(s);
      
      // Reddedilen işleri atla
      if (c === null) return;
      
      if (c === 'todo') {
        counts.todo++;
        tasksByStatus.todo.push(it);
      } else if (c === 'inprogress') {
        counts.inprogress++;
        tasksByStatus.inprogress.push(it);
      } else {
        const d = detail(s) || 'done';
        if (d !== 'rejected') {  // Rejected olanları burada da filtrele
          counts[d] = (counts[d] || 0) + 1;
          tasksByStatus[d] = tasksByStatus[d] || [];
          tasksByStatus[d].push(it);
        }
      }
    });
    
    const total = Object.values(counts).reduce((a,b)=>a+b,0);
    const doneAll = counts.rft + counts.it + counts.rfu + counts.uat + counts.rfp + counts.done;
    const p = percent(doneAll, total);
    const compactTotal = `${doneAll}/${total || 0}`;

    const handleStatusClick = (status, e) => {
      e.stopPropagation();
      // DOM manipülasyonu ile detay gösterimi
      const cardElement = e.target.closest('.card');
      if (cardElement) {
        showTaskDetail(cardElement, m.name, status, tasksByStatus[status] || []);
      }
    };

    const Bar = ({ label, val, color, status }) => (
      <div className="bar-row" onClick={(e) => val > 0 && handleStatusClick(status, e)}>
        <span className="bar-label">{label}</span>
        <div className="bar"><div className="fill" style={{ width: `${percent(val, total)}%`, background: color }} /></div>
        <span className="bar-label">{val}</span>
      </div>
    );

    return (
      <details key={accId} className="card">
        <summary className="card-summary">
          <div className="avatar">
            <div className="ring" style={{ ['--p']: `${p*3.6}deg` }}>
              <div className="ring-inner">{p}%</div>
            </div>
          </div>
          <div className="card-main">
            <div className="card-topline">
              <div className="name">{m.name}</div>
              <div className="card-counts">{compactTotal}</div>
            </div>
            <div className="meta">{doneAll} tamamlanan / {total} iş</div>
          </div>
          <div className="card-expand">Detay</div>
        </summary>
        <div className="card-body">
          <div className="meta" style={{ marginTop: 8 }}>{total} iş • {doneAll} tamamlanan</div>
          <div className="bars">
            <Bar label="TODO"     val={counts.todo}       color="linear-gradient(90deg,#8899aa,#aabccc)" status="todo" />
            <Bar label="Devam"    val={counts.inprogress} color="linear-gradient(90deg,#4c83ff,#6ea2ff)" status="inprogress" />
            <Bar label="RFT"      val={counts.rft}        color="linear-gradient(90deg,#00c2a8,#00e1c5)" status="rft" />
            <Bar label="TEST"     val={counts.it}         color="linear-gradient(90deg,#13c2c2,#36cfc9)" status="it" />
            <Bar label="R-UAT"    val={counts.rfu}        color="linear-gradient(90deg,#9254de,#b37feb)" status="rfu" />
            <Bar label="UAT"      val={counts.uat}        color="linear-gradient(90deg,#722ed1,#9254de)" status="uat" />
            <Bar label="R-Prod"   val={counts.rfp}        color="linear-gradient(90deg,#fa8c16,#faad14)" status="rfp" />
            <Bar label="Done"     val={counts.done}       color="linear-gradient(90deg,#52c41a,#95de64)" status="done" />
          </div>
        </div>
      </details>
    );
  });

  // Detay gösterme fonksiyonu
  const showTaskDetail = (cardElement, memberName, status, tasks) => {
    const statusLabels = {
      todo: 'TODO',
      inprogress: 'Devam Eden',
      rft: 'Ready for Test',
      it: 'Test Aşamasında',
      rfu: 'Ready for UAT',
      uat: 'UAT Aşamasında',
      rfp: 'Ready for Prod',
      done: 'Tamamlanan'
    };

    const detailHTML = `
      <div class="task-detail">
        <div class="detail-header">
          <div class="detail-title">${memberName} - ${statusLabels[status]} (${tasks.length})</div>
          <button class="close-btn" onclick="this.parentElement.parentElement.remove()">✕ Kapat</button>
        </div>
        <div class="task-list">
          ${tasks.map(task => `
            <div class="task-item">
              <span class="task-key">${task.key}</span> - ${task.fields?.summary || 'No summary'}
            </div>
          `).join('')}
          ${tasks.length === 0 ? '<div class="task-item">Bu statüde görev yok</div>' : ''}
        </div>
      </div>
    `;

    // Mevcut detayı kaldır
    const existingDetail = cardElement.querySelector('.task-detail');
    if (existingDetail) {
      existingDetail.remove();
    } else {
      // Yeni detay ekle
      cardElement.insertAdjacentHTML('beforeend', detailHTML);
    }
  };

  // Debug: Tüm status'leri göster
  const allStatuses = teamIssues.map(it => it.fields?.status?.name).filter(Boolean);
  const uniqueStatuses = [...new Set(allStatuses)];

  // Jira URL'ini gösterme fonksiyonu - basit yaklaşım
  const openJiraIssue = (url) => {
    console.log('URL gösteriliyor:', url);
    
    // Önce clipboard'a kopyala
    try {
      navigator.clipboard.writeText(url).then(() => {
        // Başarılı kopyalama sonrası alert
        alert(`🚨 RFP Issue URL kopyalandı!\n\nTıklayın OK, sonra tarayıcınızda Cmd+V ile yapıştırın:\n\n${url}`);
      }).catch(() => {
        // Clipboard başarısız olursa prompt
        prompt('🚨 RFP Issue URL (kopyalayın ve tarayıcıda açın):', url);
      });
    } catch (e) {
      // Modern API desteklenmiyorsa prompt
      prompt('🚨 RFP Issue URL (kopyalayın ve tarayıcıda açın):', url);
    }
  };

  const alertChips = rfpIssues.map(it => {
    const key = it.key;
    const sum = it.fields?.summary || '';
    const status = it.fields?.status?.name || '';
    const url = toIssueUrl(baseUrl, key);
    return (
      <div
        key={key} 
        className="chip chip-rfp" 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('RFP chip tıklandı:', key);
          openJiraIssue(url);
        }}
        style={{ cursor: 'pointer' }}
        title={`🚨 URGENT: ${sum} (${status}) - Tıklayın açmak için`}
      >
        🚨 {key}
      </div>
    );
  });

  return (
    <div className="radar-wrap">
      <div className="radar-header">
        <span>Takım Radarı (Aktif Sprint)</span>
        <span className="radar-time">{lastChecked ? new Date(lastChecked).toLocaleTimeString('tr-TR') : ''}</span>
      </div>

      <div className={`alerts ${rfpIssues.length > 0 ? 'has-rfp' : 'no-rfp'}`}>
        <div className="alerts-title">
          {rfpIssues.length > 0 ? '🚨' : '✅'} RFP Uyarıları ({rfpIssues.length})
          {rfpIssues.length > 0 && <span style={{ marginLeft: 8, fontSize: 9, opacity: 0.8 }}>URGENT!</span>}
          {rfpIssues.length === 0 && <span style={{ marginLeft: 8, fontSize: 9, opacity: 0.8, color: '#90EE90' }}>ALL CLEAR</span>}
        </div>
        <div className="chips">
          {alertChips.length ? alertChips : (
            <div style={{ fontSize: 10, color: '#90EE90', fontWeight: 600 }}>
              🎉 Tüm işler kontrol altında!
            </div>
          )}
        </div>
      </div>

      {memberCards.length ? (
        <div className="team-grid">{memberCards}</div>
      ) : (
        <div className="empty">Takım işi bulunamadı.</div>
      )}
    </div>
  );
};
