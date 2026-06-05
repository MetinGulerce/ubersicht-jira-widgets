export const refreshFrequency = 3600000; // 1 saat (60 dakika)

export const className = `
  display: block;
  box-sizing: border-box;
  width: 320px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #f0f0f0;
  position: fixed;
  top: 5px;
  right: 30px;

  .jira-container {
    width: 100%;
    background: linear-gradient(135deg, rgba(9,30,66,0.85), rgba(23,43,77,0.85));
    border: 1px solid rgba(0,101,255,0.2);
    border-radius: 12px;
    padding: 12px;
    backdrop-filter: blur(12px) saturate(130%);
    box-shadow: 0 8px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,101,255,0.1);
  }
  .jira-header {
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    border-bottom: 1px solid rgba(0,101,255,0.25);
    padding-bottom: 8px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.3px;
  }
  .jira-toolbar {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 10px;
  }
  .jira-toolbar.is-single {
    grid-template-columns: 1fr;
  }
  .jira-filter {
    position: relative;
    min-width: 0;
    overflow: visible;
  }
  .jira-filter-summary {
    appearance: none;
    width: 100%;
    border: 1px solid rgba(0,101,255,0.22);
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 7px 10px;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(23,43,77,0.5), rgba(9,30,66,0.5));
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  .jira-filter.is-open .jira-filter-summary {
    border-color: rgba(0,101,255,0.38);
    box-shadow: 0 0 0 1px rgba(0,101,255,0.12);
  }
  .jira-filter-label {
    font-size: 9px;
    color: #9fb7dc;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 700;
  }
  .jira-filter-value {
    margin-top: 3px;
    font-size: 10px;
    color: #ffffff;
    line-height: 1.35;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .jira-filter-chevron {
    color: #9fb7dc;
    font-size: 12px;
    font-weight: 700;
    transition: transform .2s ease;
  }
  .jira-filter.is-open .jira-filter-chevron {
    transform: rotate(180deg);
  }
  .jira-filter-menu {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    width: 100%;
    min-width: 190px;
    z-index: 12;
    display: grid;
    gap: 8px;
    padding: 8px;
    border: 1px solid rgba(0,101,255,0.24);
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(7,11,24,.98), rgba(14,23,43,.98));
    box-shadow: 0 14px 28px rgba(0,0,0,0.28);
  }
  .jira-filter-actions {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
  }
  .jira-filter-action {
    appearance: none;
    border: 1px solid rgba(0,101,255,0.24);
    background: rgba(9,30,66,0.72);
    color: #b3d4ff;
    border-radius: 999px;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
  }
  .jira-filter-action:disabled {
    opacity: 0.45;
    cursor: default;
  }
  .jira-filter-options {
    display: grid;
    gap: 4px;
    max-height: 180px;
    overflow-y: auto;
  }
  .jira-filter-option {
    display: grid;
    grid-template-columns: 14px 1fr auto;
    gap: 8px;
    align-items: center;
    padding: 6px 8px;
    border-radius: 7px;
    color: #ffffff;
    font-size: 11px;
    cursor: pointer;
  }
  .jira-filter-option-simple {
    grid-template-columns: 14px 1fr;
  }
  .jira-filter-option:hover {
    background: rgba(0,101,255,0.12);
  }
  .jira-filter-option input {
    margin: 0;
    accent-color: #4c9aff;
  }
  .jira-filter-option input[type="radio"] {
    accent-color: #36b37e;
  }
  .jira-filter-option-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .jira-filter-option-count {
    font-size: 10px;
    color: #9fb7dc;
  }
  .jira-list { display: grid; gap: 8px; }
  .jira-list {
    max-height: min(58vh, 620px);
    overflow-y: auto;
    padding-right: 2px;
  }
  .jira-list::-webkit-scrollbar {
    width: 6px;
  }
  .jira-list::-webkit-scrollbar-thumb {
    background: rgba(76,154,255,0.3);
    border-radius: 999px;
  }

  .jira-group {
    background: linear-gradient(135deg, rgba(23,43,77,0.45), rgba(9,30,66,0.45));
    border: 1px solid rgba(0,101,255,0.16);
    border-radius: 10px;
    overflow: visible;
  }
  .jira-group[open] {
    border-color: rgba(0,101,255,0.3);
    box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  }
  .jira-group-summary {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
  }
  .jira-group-summary::-webkit-details-marker { display: none; }
  .jira-group-title {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }
  .jira-group-meta {
    margin-top: 4px;
    font-size: 10px;
    color: #9fb7dc;
    line-height: 1.4;
  }
  .jira-group-chevron {
    color: #9fb7dc;
    font-size: 12px;
    font-weight: 700;
    transition: transform .2s ease;
  }
  .jira-group[open] .jira-group-chevron {
    transform: rotate(180deg);
  }
  .jira-group-body {
    display: grid;
    gap: 8px;
    padding: 0 12px 12px;
    border-top: 1px solid rgba(0,101,255,0.12);
    overflow: visible;
  }

  .jira-item {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 6px;
    align-items: start;
    background: linear-gradient(135deg, rgba(23,43,77,0.6), rgba(9,30,66,0.6));
    border: 1px solid rgba(0,101,255,0.15);
    border-radius: 10px;
    padding: 8px 10px;
    cursor: pointer;
    transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 3px solid transparent;
    position: relative;
    overflow: visible;
  }
  .jira-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,101,255,0.05), transparent);
    opacity: 0;
    pointer-events: none;
    border-radius: inherit;
    transition: opacity .2s ease;
  }
  .jira-item:hover {
    background: linear-gradient(135deg, rgba(23,43,77,0.8), rgba(9,30,66,0.8));
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,101,255,0.15);
    border-color: rgba(0,101,255,0.3);
  }
  .jira-item:hover::before { opacity: 1; }

  /* Jira öncelik renkleri */
  .jira-item.prio-high { border-left-color: #DE350B; }
  .jira-item.prio-med  { border-left-color: #FF8B00; }
  .jira-item.prio-low  { border-left-color: #36B37E; }

  .jira-title {
    font-size: 11px;
    color: #ffffff;
    line-height: 1.32;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 500;
  }
  .jira-meta {
    display: flex;
    gap: 4px;
    margin-top: 4px;
    flex-wrap: wrap;
  }
  .chip {
    font-size: 9px;
    line-height: 1.2;
    padding: 2px 7px;
    border-radius: 6px;
    background: rgba(9,30,66,0.7);
    border: 1px solid rgba(0,101,255,0.3);
    color: #B3D4FF;
    text-decoration: none;
    font-weight: 500;
    transition: all .15s ease;
  }
  .chip:hover { 
    background: rgba(0,101,255,0.2); 
    border-color: rgba(0,101,255,0.5);
    transform: translateY(-1px);
  }
  
  /* Jira status renkleri */
  .chip-status { 
    color: #ffffff; 
    border-color: rgba(0,101,255,0.4); 
    background: linear-gradient(135deg, #0065FF, #0747A6);
  }
  .chip-prio { 
    color: #ffffff; 
    border-color: rgba(255,139,0,0.4); 
    background: linear-gradient(135deg, #FF8B00, #FF5630);
  }
  .chip-due { 
    color: #ffffff; 
    border-color: rgba(222,53,11,0.4); 
    background: linear-gradient(135deg, #DE350B, #BF2600);
  }
  .chip-assignee {
    color: #ffffff;
    border-color: rgba(94,108,132,0.35);
    background: linear-gradient(135deg, #42526E, #5E6C84);
  }
  .chip-branch { 
    color: #ffffff; 
    background: linear-gradient(135deg, #00875A, #36B37E); 
    border-color: rgba(54,179,126,0.4);
  }

  .jira-key {
    font-size: 10px;
    color: #B3D4FF;
    text-align: right;
    white-space: nowrap;
    align-self: start;
    background: rgba(0,101,255,0.15);
    border: 1px solid rgba(0,101,255,0.3);
    border-radius: 6px;
    padding: 3px 7px;
    font-weight: 600;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  }
  .jira-key-button {
    cursor: pointer;
    list-style: none;
    user-select: none;
  }
  .jira-key-button::-webkit-details-marker { display: none; }
  .jira-preview {
    position: relative;
    align-self: start;
  }
  .jira-preview[open] {
    z-index: 18;
  }
  .jira-preview-popover {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    width: 220px;
    z-index: 18;
    background: linear-gradient(180deg, rgba(7,11,24,.98), rgba(14,23,43,.98));
    border: 1px solid rgba(0,101,255,0.24);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.28);
  }
  .jira-preview-key {
    font-size: 10px;
    color: #9fb7dc;
    font-weight: 700;
    margin-bottom: 6px;
    letter-spacing: 0.4px;
  }
  .jira-preview-title {
    font-size: 11px;
    color: #ffffff;
    line-height: 1.45;
    font-weight: 600;
  }
  .jira-preview-meta {
    margin-top: 8px;
    font-size: 10px;
    color: #9fb7dc;
  }
  .chip-button {
    list-style: none;
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
  }
  .chip-button::-webkit-details-marker { display: none; }
  .done-preview .jira-preview-popover {
    left: 0;
    right: auto;
    width: 230px;
  }
  .chip-branch-focus {
    background: linear-gradient(135deg, #0065FF, #2684FF);
    border-color: rgba(76,154,255,0.55);
  }
  .jira-footer {
    font-size: 11px;
    color: #8993A4;
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid rgba(0,101,255,0.15);
  }

  /* Modern Progress bar */
  .jira-progress { margin-top: 12px; }
  .jira-progress .bar {
    height: 8px;
    background: rgba(9,30,66,0.7);
    border: 1px solid rgba(0,101,255,0.2);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }
  .jira-progress .fill {
    height: 100%;
    background: linear-gradient(90deg, #0065FF, #0747A6, #4C9AFF);
    width: 0%;
    transition: width .3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }
  .jira-progress .fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 2s infinite;
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* Done grupları - Jira tarzı */
  .done-groups { display: grid; gap: 6px; }
  .done-row { 
    display: grid; 
    grid-template-columns: 70px 1fr; 
    align-items: center; 
    gap: 8px;
    padding: 6px 0;
  }
  .done-row.done-row-spotlight {
    border-radius: 8px;
    padding: 8px 10px;
    margin: 0 -4px;
    background: linear-gradient(135deg, rgba(0,101,255,0.1), rgba(54,179,126,0.05));
    border: 1px solid rgba(76,154,255,0.16);
  }
  .done-title { 
    font-size: 11px; 
    color: #8993A4; 
    text-align: right; 
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .done-title.done-title-spotlight {
    color: #dbe8ff;
  }
  .chips-row { 
    display: flex; 
    gap: 6px; 
    flex-wrap: wrap; 
    white-space: normal; 
    overflow: visible; 
  }
  .chips-row::-webkit-scrollbar { display: none; }
`;

export const command = `
#!/bin/bash

# Yerel .env kaynakları (Load Bash env kapalıysa buradan okunur)
for f in \
  "$HOME/.jira_env" \
  "$HOME/.config/ubersicht/jira_env" \
  "$HOME/Library/Application Support/Übersicht/widgets/JiraTasks.widget/.env"
do
  [ -f "$f" ] && . "$f"
done

BASE_URL="\${JIRA_BASE_URL}"
EMAIL="\${JIRA_EMAIL}"
TOKEN="\${JIRA_API_TOKEN}"
TEAM_IDS="\${JIRA_TEAM_ACCOUNT_IDS}"
VIEW_MODE_RAW="\${JIRA_TASKS_VIEW_MODE}"

VIEW_MODE=$(printf '%s' "\${VIEW_MODE_RAW}" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')
if [ "\${VIEW_MODE}" != "product" ]; then
  VIEW_MODE="developer"
fi

SCOPE="self"
TEAM_COUNT=0
MAX_RESULTS=30

if [ -n "\${TEAM_IDS}" ]; then
  CLEAN_IDS=$(printf '%s' "\${TEAM_IDS}" | tr ',' '\n' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -v '^$' || true)
  if [ -n "\${CLEAN_IDS}" ]; then
    FORMATTED_IDS=$(printf '%s\n' "\${CLEAN_IDS}" | sed 's/"/\\"/g; s/.*/"&"/' | paste -sd, -)
    ASSIGNEE_FILTER="assignee in (\${FORMATTED_IDS})"
    TEAM_COUNT=$(printf '%s\n' "\${CLEAN_IDS}" | grep -c . | tr -d ' ')
    SCOPE="team"
    MAX_RESULTS=100
  else
    ASSIGNEE_FILTER='assignee=currentUser()'
  fi
else
  ASSIGNEE_FILTER='assignee=currentUser()'
fi

if [ -z "\${BASE_URL}" ] || [ -z "\${EMAIL}" ] || [ -z "\${TOKEN}" ]; then
  missing="[]"
  if command -v jq >/dev/null 2>&1; then
    arr=()
    [ -z "\${BASE_URL}" ] && arr+=("JIRA_BASE_URL")
    [ -z "\${EMAIL}" ] && arr+=("JIRA_EMAIL")
    [ -z "\${TOKEN}" ] && arr+=("JIRA_API_TOKEN")
    missing=$(printf '%s\n' "\${arr[@]}" | jq -R . | jq -s .)
  fi
  printf '{"ok":false,"error":"Eksik ortam değişkeni","missing":%s}\n' "\${missing}"
  exit 0
fi

# JQL'i plain yaz, encoding'i curl yapsın (rejected hariç, unresolved filtresi yok)
JQL="\${ASSIGNEE_FILTER} AND sprint in openSprints() AND status not in (Rejected, Declined, Canceled) ORDER BY priority DESC, updated DESC"

# Güncel Jira Cloud API endpoint'leri (2024-2025) - YENİ /search/jql endpoint
# Base URL formatı: https://your-domain.atlassian.net
URL="\${BASE_URL}/rest/api/3/search/jql"
URL_V2="\${BASE_URL}/rest/api/2/search"

# Modern Jira Cloud API çağrısı - v3 YENİ endpoint ile (POST olarak)
TMP=$(mktemp)

write_request() {
  local jql="$1"
  local bs quote escaped_jql
  bs=$(printf '\\')
  quote=$(printf '"')
  escaped_jql=\${jql//\${bs}/\${bs}\${bs}}
  escaped_jql=\${escaped_jql//\${quote}/\${bs}\${quote}}
  cat > "\${TMP}.json" << EOF
{
  "jql": "\${escaped_jql}",
  "maxResults": \${MAX_RESULTS},
  "fields": ["summary","description","priority","status","updated","duedate","assignee","issuetype","project"]
}
EOF
}

write_request "\${JQL}"

HTTP_CODE=$(curl -sS --max-time 8 -X POST -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -H "User-Agent: Ubersicht-JiraTasks/1.0" \\
  -d @"\${TMP}.json" \\
  -u "\${EMAIL}:\${TOKEN}" "\${URL}" -o "\${TMP}" -w "%{http_code}")

rm -f "\${TMP}.json"

# 400 dönerse daha gevşek sorgu (status filtresi bile yok)
if [ "\${HTTP_CODE}" = "400" ]; then
  JQL_FB="\${ASSIGNEE_FILTER} AND sprint in openSprints() ORDER BY priority DESC, updated DESC"
  write_request "\${JQL_FB}"
  HTTP_CODE=$(curl -sS --max-time 8 -X POST -H "Accept: application/json" \\
    -H "Content-Type: application/json" \\
    -H "User-Agent: Ubersicht-JiraTasks/1.0" \\
    -d @"\${TMP}.json" \\
    -u "\${EMAIL}:\${TOKEN}" "\${URL}" -o "\${TMP}" -w "%{http_code}")
  rm -f "\${TMP}.json"
fi

# Eğer yeni endpoint 410/404 dönerse eski v2 endpoint'ine geri dön (GET ile)
if [ "\${HTTP_CODE}" = "410" ] || [ "\${HTTP_CODE}" = "404" ]; then
  HTTP_CODE=$(curl -sS --max-time 8 -G -H "Accept: application/json" \\
    -H "User-Agent: Ubersicht-JiraTasks/1.0" \\
    --data-urlencode "jql=\${JQL}" \\
    --data-urlencode "maxResults=\${MAX_RESULTS}" \
    --data-urlencode "fields=summary,description,priority,status,updated,duedate,assignee,issuetype,project" \\
    -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")

  # v2 ile de 400 dönerse gevşek sorgu
  if [ "\${HTTP_CODE}" = "400" ]; then
    JQL_FB="\${ASSIGNEE_FILTER} AND sprint in openSprints() ORDER BY priority DESC, updated DESC"
    HTTP_CODE=$(curl -sS --max-time 8 -G -H "Accept: application/json" \\
      -H "User-Agent: Ubersicht-JiraTasks/1.0" \\
      --data-urlencode "jql=\${JQL_FB}" \\
      --data-urlencode "maxResults=\${MAX_RESULTS}" \
      --data-urlencode "fields=summary,description,priority,status,updated,duedate,assignee,issuetype,project" \\
      -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")
  fi
  
  # v2 ile de 410/404 dönerse son çare: sprint filtresi olmadan
  if [ "\${HTTP_CODE}" = "410" ] || [ "\${HTTP_CODE}" = "404" ]; then
    JQL_LAST="\${ASSIGNEE_FILTER} AND updated >= -30d AND status not in (Done, Closed, Resolved, Rejected, Declined, Canceled) ORDER BY priority DESC, updated DESC"
    HTTP_CODE=$(curl -sS --max-time 8 -G -H "Accept: application/json" \\
      -H "User-Agent: Ubersicht-JiraTasks/1.0" \\
      --data-urlencode "jql=\${JQL_LAST}" \\
      --data-urlencode "maxResults=\${MAX_RESULTS}" \
      --data-urlencode "fields=summary,description,priority,status,updated,duedate,assignee,issuetype,project" \\
      -u "\${EMAIL}:\${TOKEN}" "\${URL_V2}" -o "\${TMP}" -w "%{http_code}")
  fi
fi

BODY=$(cat "\${TMP}")
rm -f "\${TMP}"

NOW=$(date -u +"%FT%TZ")

if [ "\${HTTP_CODE}" = "200" ]; then
  printf '{"ok":true,"baseUrl":"%s","scope":"%s","teamCount":%s,"viewModeKey":"%s","data":%s,"lastChecked":"%s"}\n' "\${BASE_URL}" "\${SCOPE}" "\${TEAM_COUNT}" "\${VIEW_MODE}" "\${BODY}" "\${NOW}"
else
  # Hata koduna göre daha açıklayıcı mesajlar
  case "\${HTTP_CODE}" in
    "401") ERROR_MSG="Kimlik doğrulama hatası - API token'ınızı kontrol edin" ;;
    "403") ERROR_MSG="Yetki hatası - API token'ınızın Jira erişim izinleri kontrol edin" ;;
    "410") ERROR_MSG="API endpoint kullanımdan kaldırılmış - API versiyonunu güncelleyin" ;;
    "404") ERROR_MSG="API endpoint bulunamadı - Base URL'yi kontrol edin" ;;
    "400") ERROR_MSG="Geçersiz JQL sorgusu veya parametreler" ;;
    "429") ERROR_MSG="Rate limit aşıldı - Çok fazla istek gönderiyorsunuz" ;;
    "500"|"502"|"503") ERROR_MSG="Jira server hatası - Daha sonra tekrar deneyin" ;;
    *) ERROR_MSG="Bilinmeyen Jira API hatası" ;;
  esac
  
  TRUNC=$(printf "%s" "\${BODY}" | head -c 400 | sed 's/"/\\"/g' | tr -d '\n')
  printf '{"ok":false,"statusCode":"%s","error":"%s","body":"%s","lastChecked":"%s"}\n' "\${HTTP_CODE}" "\${ERROR_MSG}" "\${TRUNC}" "\${NOW}"
fi
`;

export const initialState = {
  output: '',
  error: null,
  selectedAssigneeIds: null,
  recencyFilterKey: 'all',
  openMenuKey: null
};

const fmtRel = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  const diff = Date.now() - d.getTime();
  const abs = Math.abs(diff);
  const mins = Math.round(abs / 60000);
  if (mins < 60) return `${mins}dk`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}s`;
  const days = Math.round(hrs / 24);
  return `${days}g`;
};

const safe = (s) => (s || '').toString();
// Statü adı normalize edici (küçük harf, TR harf transliterasyonu, aksan/işaret/boşluk toparlama)
const normalize = (s) => (s || '')
  .toString()
  .toLowerCase()
  // TR harfleri ASCII'ye çevir
  .replace(/[ığüşöç]/g, (c) => ({ 'ı':'i', 'ğ':'g', 'ü':'u', 'ş':'s', 'ö':'o', 'ç':'c' }[c]))
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/['’`"]/g, '')
  .replace(/[\s_-]+/g, ' ')
  .trim();

// Jira workflow’a göre sabit statü eşlemesi
const STATUS_SYNONYMS = {
  // görünüm grupları
  todo: [
    'todo','to do','yapilacak','yapilacaklar','yapılacak','yapılacaklar','backlog','selected for development',
    'ready for dev','ready for development','analysis','open','new','plan','planned',
    // Change Request her zaman yapılacaklarda görünsün
    'change requested','change request','cr','degisiklik istegi','degisiklik isteği','değişiklik istegi','değişiklik isteği'
  ],
  inprogress: [
    'in progress','progress','devam','devam ediyor','doing','wip','development','implement','coding',
    'code review','review','design'
  ],
  // done alt kırılımlar
  rft: ['ready for test','ready test','ready 4 test','rft','teste hazir','teste hazır','test hazir','test hazır'],
  it: ['in test','testte','test','test asamasinda','test aşamasında','qa'],
  rfu: ['ready for uat','ready 4 uat','r4u','ready fot uat','uata hazir','uat a hazir','uat a hazır','uat hazir','uat hazır'],
  uat: ['uat','user acceptance','kullanici kabul','kullanıcı kabul'],
  rfp: [
    'ready for prod','ready prod','ready for production','production ready',
    'ready to prod','ready to production','ready to deploy','ready for deploy',
    'prod ready','prd','ready for prd','ready prd','release to prod','go live','golive',
    'yayina hazir','yayına hazır','yayıma hazir','yayıma hazır','canliya hazir','canlıya hazır','canli hazir','canlı hazır'
  ],
  done: [
    'done','closed','resolved','completed','complete',
    'bitti','bitirildi','yayinda','yayında','deployed','tamam','tamamlandi','tamamlandı'
  ],
  // gizlenecekler
  ignore: [
    'rejected','reddedildi','declined','denied','canceled','cancelled',
    'wont do','wontdo','wont fix','wontfix','duplicate','invalid','obsolete'
  ]
};

// Detay statü kodu döndür: todo | inprogress | rft | it | rfu | uat | rfp | done | ignore
const mapDetailedStatus = (raw) => {
  const n = normalize(raw);
  for (const [key, list] of Object.entries(STATUS_SYNONYMS)) {
    if (list.some(t => n.includes(t))) return key;
  }
  // eşleşmeyenler varsayılan: inprogress
  return 'inprogress';
};

// Statüyü kategorize et: todo | inprogress | done | ignore
const statusCategory = (raw) => {
  const k = mapDetailedStatus(raw);
  if (k === 'ignore') return 'ignore';
  if (k === 'todo' || k === 'inprogress') return k;
  // rft/it/rfu/uat/rfp/done hepsi tamamlanan kabul
  return 'done';
};

// Done statülerini alt kırılıma ayır (RFT, TEST, R-UAT, UAT, R-Prod, Done)
const statusDetailedDone = (raw) => {
  const k = mapDetailedStatus(raw);
  return (['rft','it','rfu','uat','rfp','done'].includes(k)) ? k : 'done';
};

// Jira Description (ADF) -> düz metin
const adfToText = (node) => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(adfToText).join(' ');
  if (typeof node === 'object') {
    const t = node.text || '';
    const c = node.content ? adfToText(node.content) : '';
    return [t, c].filter(Boolean).join(' ');
  }
  return '';
};

// Summary + Description içinden branch adaylarını çıkar
const extractBranches = (issue) => {
  const f = issue.fields || {};
  const summary = (f.summary || '').toString();
  const descText = adfToText(f.description || '');
  const text = `${summary}\n${descText}`;

  const found = new Set();
  const branches = [];

  // refs/heads/branch
  const reRefs = /refs\/heads\/([^\s]+)/gi;
  let m;
  while ((m = reRefs.exec(text)) && branches.length < 6) {
    const b = m[1].trim();
    if (b && !found.has(b.toLowerCase())) {
      found.add(b.toLowerCase());
      branches.push(b);
    }
  }

  // common prefixes: feature/, fix/, bugfix/, hotfix/, release/, chore/, refactor/
  const rePref = /\b(feature|fix|bugfix|hotfix|release|chore|refactor|task|test)\/[a-z0-9._-]+/gi;
  const matches = text.match(rePref) || [];
  for (const b of matches) {
    const bb = b.trim();
    if (bb && !found.has(bb.toLowerCase())) {
      found.add(bb.toLowerCase());
      branches.push(bb);
      if (branches.length >= 6) break;
    }
  }

  // fallback: branch: name veya backtick içinde
  const reLabel = /\bbranch[:\s]+([a-z0-9._/-]+)\b/gi;
  while ((m = reLabel.exec(text)) && branches.length < 6) {
    const b = m[1].trim();
    if (b && !found.has(b.toLowerCase())) {
      found.add(b.toLowerCase());
      branches.push(b);
    }
  }
  const reTicks = /`([a-z0-9._/-]+)`/gi;
  while ((m = reTicks.exec(text)) && branches.length < 6) {
    const b = m[1].trim();
    if (b && !found.has(b.toLowerCase())) {
      found.add(b.toLowerCase());
      branches.push(b);
    }
  }

  // kısalt
  return branches.slice(0, 6).map(b => (b.length > 24 ? b.slice(0, 23) + '…' : b));
};

const getAssigneeFilterId = (issue) => {
  const assignee = issue.fields?.assignee;
  if (assignee?.accountId) return assignee.accountId;
  if (assignee?.displayName) return `name:${assignee.displayName}`;
  return '__unassigned__';
};

const getAssigneeLabel = (issue) => issue.fields?.assignee?.displayName || 'Atanmamış';

const RECENCY_FILTER_OPTIONS = [
  { key: 'all', label: 'Tümü', summary: 'Tümü' },
  { key: '24h', label: 'Son 24 saat', summary: '24 saat', hours: 24 },
  { key: '3d', label: 'Son 3 gün', summary: '3 gün', hours: 72 },
  { key: '7d', label: 'Son 7 gün', summary: '7 gün', hours: 168 }
];

const RECENCY_FILTER_MAP = RECENCY_FILTER_OPTIONS.reduce((acc, option) => {
  acc[option.key] = option;
  return acc;
}, {});

const normalizeViewModeKey = (value) => (value === 'product' ? 'product' : 'developer');

const matchesRecencyFilter = (issue, filterKey, nowTs = Date.now()) => {
  if (filterKey === 'all') return true;
  const option = RECENCY_FILTER_MAP[filterKey];
  const updated = issue.fields?.updated;
  if (!option || !updated) return false;
  return nowTs - new Date(updated).getTime() <= option.hours * 60 * 60 * 1000;
};

const getAssigneeOptionIdsFromOutput = (output) => {
  try {
    const data = JSON.parse(output || '{}');
    const issues = Array.isArray(data?.data?.issues) ? data.data.issues : [];
    return Array.from(new Set(issues.map((issue) => getAssigneeFilterId(issue)).filter(Boolean)));
  } catch {
    return [];
  }
};

export const updateState = (event, previousState = initialState) => {
  if (event.type === 'TOGGLE_MENU') {
    return {
      ...previousState,
      openMenuKey: previousState.openMenuKey === event.menuKey ? null : event.menuKey
    };
  }

  if (event.type === 'CLOSE_FILTER_MENUS') {
    if (!previousState.openMenuKey) return previousState;
    return {
      ...previousState,
      openMenuKey: null
    };
  }

  if (event.type === 'ASSIGNEE_FILTER_CHANGED') {
    return {
      ...previousState,
      selectedAssigneeIds: Array.isArray(event.selectedAssigneeIds) ? event.selectedAssigneeIds : null,
      openMenuKey: previousState.openMenuKey
    };
  }

  if (event.type === 'RECENCY_FILTER_CHANGED') {
    return {
      ...previousState,
      recencyFilterKey: RECENCY_FILTER_MAP[event.recencyFilterKey] ? event.recencyFilterKey : 'all',
      openMenuKey: null
    };
  }

  const nextState = {
    ...previousState,
    output: Object.prototype.hasOwnProperty.call(event, 'output') ? event.output : previousState.output,
    error: Object.prototype.hasOwnProperty.call(event, 'error') ? event.error : previousState.error,
    recencyFilterKey: RECENCY_FILTER_MAP[previousState.recencyFilterKey] ? previousState.recencyFilterKey : 'all',
    openMenuKey: null
  };

  if (typeof nextState.output !== 'string') return nextState;

  const optionIds = getAssigneeOptionIdsFromOutput(nextState.output);
  if (!Array.isArray(previousState.selectedAssigneeIds)) {
    nextState.selectedAssigneeIds = null;
    return nextState;
  }

  const availableIds = new Set(optionIds);
  const filteredSelectedIds = previousState.selectedAssigneeIds.filter((id) => availableIds.has(id));
  nextState.selectedAssigneeIds = filteredSelectedIds.length === optionIds.length ? null : filteredSelectedIds;
  return nextState;
};

export const init = (dispatch) => {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  if (window.__jiraTasksDocumentClickHandler) {
    document.removeEventListener('click', window.__jiraTasksDocumentClickHandler);
  }

  const handler = () => {
    dispatch({ type: 'CLOSE_FILTER_MENUS' });
  };

  window.__jiraTasksDocumentClickHandler = handler;
  document.addEventListener('click', handler);
};

const JiraTasksView = ({ data, selectedAssigneeIds, recencyFilterKey, openMenuKey, dispatch }) => {
  const baseUrl = data.baseUrl || '';
  const scope = data.scope || 'self';
  const isTeamScope = scope === 'team';
  const configuredTeamCount = Number(data.teamCount || 0);
  const allIssues = Array.isArray(data.data?.issues) ? data.data.issues : [];

  const assigneeOptionsMap = new Map();
  allIssues.forEach((issue) => {
    const id = getAssigneeFilterId(issue);
    const existing = assigneeOptionsMap.get(id);
    if (existing) {
      existing.count += 1;
      return;
    }
    assigneeOptionsMap.set(id, { id, label: getAssigneeLabel(issue), count: 1 });
  });

  const assigneeOptions = Array.from(assigneeOptionsMap.values())
    .sort((a, b) => a.label.localeCompare(b.label, 'tr'));
  const optionIds = assigneeOptions.map((option) => option.id);
  const showAssigneeFilter = isTeamScope && assigneeOptions.length > 1;
  const showRecencyFilter = true;
  const normalizedSelectedAssigneeIds = !showAssigneeFilter || selectedAssigneeIds === null
    ? optionIds
    : optionIds.filter((id) => selectedAssigneeIds.includes(id));
  const selectedAssigneeSet = new Set(normalizedSelectedAssigneeIds);
  const normalizedRecencyFilterKey = RECENCY_FILTER_MAP[recencyFilterKey] ? recencyFilterKey : 'all';
  const normalizedViewModeKey = normalizeViewModeKey(data.viewModeKey);
  const assigneeFilteredIssues = showAssigneeFilter
    ? allIssues.filter((issue) => selectedAssigneeSet.has(getAssigneeFilterId(issue)))
    : allIssues;
  const filteredIssues = assigneeFilteredIssues.filter((issue) => matchesRecencyFilter(issue, normalizedRecencyFilterKey));
  const totalPeopleCount = assigneeOptions.length || configuredTeamCount || 0;
  const selectedPeopleCount = showAssigneeFilter ? normalizedSelectedAssigneeIds.length : totalPeopleCount;
  const recencySummary = RECENCY_FILTER_MAP[normalizedRecencyFilterKey]?.summary || 'Tümü';
  const visibleFilterCount = [showAssigneeFilter, showRecencyFilter].filter(Boolean).length;
  const toolbarClassName = `jira-toolbar${visibleFilterCount === 1 ? ' is-single' : ''}`;
  const selectedLabels = showAssigneeFilter
    ? assigneeOptions
        .filter((option) => selectedAssigneeSet.has(option.id))
        .map((option) => option.label)
    : [];
  const filterSummary = !showAssigneeFilter
    ? ''
    : normalizedSelectedAssigneeIds.length === 0
      ? 'Seçim yok'
      : normalizedSelectedAssigneeIds.length === assigneeOptions.length
        ? 'Tümü'
        : normalizedSelectedAssigneeIds.length === 1
          ? selectedLabels[0]
          : `${normalizedSelectedAssigneeIds.length}/${assigneeOptions.length} kişi`;

  const toggleAssignee = (id) => {
    const current = new Set(normalizedSelectedAssigneeIds);
    if (current.has(id)) current.delete(id);
    else current.add(id);
    const nextSelectedIds = optionIds.filter((optionId) => current.has(optionId));
    dispatch({
      type: 'ASSIGNEE_FILTER_CHANGED',
      selectedAssigneeIds: nextSelectedIds.length === optionIds.length ? null : nextSelectedIds
    });
  };

  const selectAllAssignees = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'ASSIGNEE_FILTER_CHANGED', selectedAssigneeIds: null });
  };

  const clearAssignees = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'ASSIGNEE_FILTER_CHANGED', selectedAssigneeIds: [] });
  };

  const changeRecencyFilter = (event, nextKey) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'RECENCY_FILTER_CHANGED', recencyFilterKey: nextKey });
  };

  const toggleMenu = (event, menuKey) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'TOGGLE_MENU', menuKey });
  };

  const stopMenuClick = (event) => {
    event.stopPropagation();
  };

  // Jira issue URL yardımcıları (branch -> KEY -> URL)
  const toIssueUrl = (maybeKey) => {
    const key = (maybeKey || '').toString().trim();
    const host = (baseUrl || '').toString().trim();
    return (host && key) ? `${host}/browse/${key}` : '';
  };
  const issueKeyFromBranch = (branch) => {
    const s = (branch || '').toString();
    const m = s.toUpperCase().match(/\b[A-Z][A-Z0-9]+-\d+\b/);
    return m ? m[0] : '';
  };
  const urlForBranch = (branch, fallbackKey) => {
    const key = issueKeyFromBranch(branch) || fallbackKey || '';
    return toIssueUrl(key);
  };

  const latestUpdatedAt = (items) => items.reduce((latest, issue) => {
    const updated = issue.fields?.updated;
    if (!updated) return latest;
    if (!latest) return updated;
    return new Date(updated) > new Date(latest) ? updated : latest;
  }, '');

  const uniqueAssigneeCount = (items) => new Set(
    items
      .map((issue) => getAssigneeFilterId(issue))
      .filter(Boolean)
  ).size;

  const buildGroupSummary = (items, extras = []) => {
    const parts = [`${items.length} iş`];
    if (isTeamScope) {
      const assigneeCount = uniqueAssigneeCount(items);
      if (assigneeCount) parts.push(`${assigneeCount} kişi`);
    }
    const latest = latestUpdatedAt(items);
    if (latest) parts.push(`son güncelleme ${fmtRel(latest)}`);
    extras.filter(Boolean).forEach((extra) => parts.push(extra));
    return parts.join(' • ');
  };

  const renderGroup = (groupKey, label, items, summary, children) => {
    if (!items || items.length === 0) return null;
    return (
      <details key={groupKey} className="jira-group">
        <summary className="jira-group-summary">
          <div>
            <div className="jira-group-title">{label}</div>
            <div className="jira-group-meta">{summary}</div>
          </div>
          <div className="jira-group-chevron">▾</div>
        </summary>
        <div className="jira-group-body">{children}</div>
      </details>
    );
  };

  // Gruplama + done kırılım sayacı
  const groups = {
    todo: [],
    inprogress: [],
    done: [],
    doneCount: 0,
    doneBreakdown: { cr: 0, rft: 0, it: 0, rfu: 0, uat: 0, rfp: 0, done: 0 },
    doneGroups: { rft: [], it: [], rfu: [], uat: [], rfp: [], done: [] }
  };
  filteredIssues.forEach((it) => {
    const cat = statusCategory(it.fields?.status?.name || '');
    if (cat === 'ignore') return;
    if (cat === 'todo') groups.todo.push(it);
    else if (cat === 'inprogress') groups.inprogress.push(it);
    else {
      groups.done.push(it);
      groups.doneCount++;
      const k = statusDetailedDone(it.fields?.status?.name || 'done');
      groups.doneBreakdown[k] = (groups.doneBreakdown[k] || 0) + 1;
      if (groups.doneGroups[k]) groups.doneGroups[k].push(it);
    }
  });

  const renderItem = (it, { doneMode = false } = {}) => {
    const f = it.fields || {};
    const prio = f.priority?.name;
    const due = f.duedate;
    const key = it.key;
    const assigneeName = getAssigneeLabel(it);
    const title = doneMode ? key : safe(f.summary);
    const url = baseUrl ? `${baseUrl}/browse/${key}` : '';
    const prioClass = (() => {
      const p = (prio || '').toLowerCase();
      if (['highest','high','p0','p1'].some(k => p.includes(k))) return 'prio-high';
      if (['medium','p2'].some(k => p.includes(k))) return 'prio-med';
      return 'prio-low';
    })();

    const branches = doneMode ? extractBranches(it) : [];

    return (
      <div
        key={key}
        className={`jira-item ${prioClass}`}
        onClick={() => url && window.open(url, '_blank')}
        title={doneMode ? (f.summary || key) : title}
      >
        <div>
          <p className="jira-title">{title}</p>
          {!doneMode && (
            <div className="jira-meta">
              {isTeamScope ? <span className="chip chip-assignee">{assigneeName}</span> : null}
              {due ? <span className="chip chip-due">Son Tarih {new Date(due).toLocaleDateString('tr-TR')}</span> : null}
              {f.updated ? <span className="chip">Güncel {fmtRel(f.updated)}</span> : null}
            </div>
          )}
        </div>
        {doneMode ? (
          <div className="jira-key" style={{ background: 'transparent', borderColor: 'transparent', padding: 0 }}>
            {branches.length
              ? branches.map((b) => {
                  const burl = urlForBranch(b, key);
                  return (
                    <a
                      key={b}
                      className="chip chip-branch"
                      href={burl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {b}
                    </a>
                  );
                })
              : (
                (() => {
                  const kurl = toIssueUrl(key);
                  return (
                    <a
                      className="chip chip-branch"
                      href={kurl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {key}
                    </a>
                  );
                })()
              )}
          </div>
        ) : (
          <details className="jira-preview" onClick={(e) => e.stopPropagation()}>
            <summary className="jira-key jira-key-button" onClick={(e) => e.stopPropagation()}>{key}</summary>
            <div className="jira-preview-popover" onClick={(e) => e.stopPropagation()}>
              <div className="jira-preview-key">{key}</div>
              <div className="jira-preview-title">{safe(f.summary) || 'Başlık yok'}</div>
              <div className="jira-preview-meta">Atalı: {assigneeName}</div>
            </div>
          </details>
        )}
      </div>
    );
  };

  const renderDoneRow = (label, items) => {
    if (!items || items.length === 0) return null;
    const spotlight = label === 'RFT' || label === 'TEST';
    const seen = new Set();
    const chips = [];
    items.forEach((it) => {
      const f = it.fields || {};
      const summary = safe(f.summary) || it.key;
      const assigneeName = getAssigneeLabel(it);
      const updatedText = f.updated ? `Güncel ${fmtRel(f.updated)}` : '';
      const bs = extractBranches(it);
      const previews = bs && bs.length ? bs : [it.key];

      previews.forEach((labelText) => {
        const low = labelText.toLowerCase();
        if (seen.has(low)) return;
        seen.add(low);

        chips.push(
          <details key={`${label}-${it.key}-${labelText}`} className="jira-preview done-preview" onClick={(e) => e.stopPropagation()}>
            <summary className={`chip chip-branch chip-button${spotlight ? ' chip-branch-focus' : ''}`} onClick={(e) => e.stopPropagation()}>
              {labelText}
            </summary>
            <div className="jira-preview-popover" onClick={(e) => e.stopPropagation()}>
              <div className="jira-preview-key">{it.key}</div>
              <div className="jira-preview-title">{summary}</div>
              <div className="jira-preview-meta">Atalı: {assigneeName}</div>
              {updatedText ? <div className="jira-preview-meta">{updatedText}</div> : null}
            </div>
          </details>
        );
      });
    });
    return (
      <div className={`done-row${spotlight ? ' done-row-spotlight' : ''}`} key={label}>
        <div className={`done-title${spotlight ? ' done-title-spotlight' : ''}`}>{label} ({items.length})</div>
        <div className="chips-row">{chips}</div>
      </div>
    );
  };

  const dd = groups.doneBreakdown;
  const doneParts = [
    dd.rft ? `RFT ${dd.rft}` : null,
    dd.it ? `TEST ${dd.it}` : null,
    dd.rfu ? `R-UAT ${dd.rfu}` : null,
    dd.uat ? `UAT ${dd.uat}` : null,
    dd.rfp ? `R-Prod ${dd.rfp}` : null,
    dd.done ? `Done ${dd.done}` : null
  ].filter(Boolean);

  const totalCount = groups.todo.length + groups.inprogress.length + groups.doneCount;
  const percent = totalCount ? Math.round((groups.doneCount / totalCount) * 100) : 0;
  const headerTitle = isTeamScope ? 'Jira Aktif Görevler' : 'Jira Görevlerim (Aktif Sprint)';
  const headerMetaPrefix = isTeamScope
    ? `Takım • ${showAssigneeFilter && selectedPeopleCount !== totalPeopleCount ? `${selectedPeopleCount}/${totalPeopleCount}` : totalPeopleCount} kişi`
    : '';
  const emptyMessage = showAssigneeFilter && normalizedSelectedAssigneeIds.length === 0
    ? 'Gösterilecek kişi seçilmedi.'
    : normalizedRecencyFilterKey !== 'all' && assigneeFilteredIssues.length > 0 && filteredIssues.length === 0
      ? 'Seçilen güncellik filtresinde görev bulunamadı.'
    : 'Görev bulunamadı.';
  const productDoneItems = [
    ...groups.doneGroups.rfu,
    ...groups.doneGroups.uat,
    ...groups.doneGroups.rfp,
    ...groups.doneGroups.done
  ];
  const productDoneParts = [
    dd.rfu ? `R-UAT ${dd.rfu}` : null,
    dd.uat ? `UAT ${dd.uat}` : null,
    dd.rfp ? `R-Prod ${dd.rfp}` : null,
    dd.done ? `Done ${dd.done}` : null
  ].filter(Boolean);

  return (
    <div className="jira-container" onClick={() => dispatch({ type: 'CLOSE_FILTER_MENUS' })}>
      <div className="jira-header">
        <span>{headerTitle}</span>
        <span style={{ fontSize: 10, color: '#9a9a9a' }}>
          {headerMetaPrefix ? `${headerMetaPrefix} • ` : ''}
          {data.lastChecked ? new Date(data.lastChecked).toLocaleTimeString('tr-TR') : ''}
        </span>
      </div>

      {(showAssigneeFilter || showRecencyFilter) ? (
        <div className={toolbarClassName}>
          {showAssigneeFilter ? (
            <div className={`jira-filter ${openMenuKey === 'assignee' ? 'is-open' : ''}`} onClick={stopMenuClick}>
              <button type="button" className="jira-filter-summary" onClick={(event) => toggleMenu(event, 'assignee')}>
                <div>
                  <div className="jira-filter-label">Kişi</div>
                  <div className="jira-filter-value">{filterSummary}</div>
                </div>
                <div className="jira-filter-chevron">▾</div>
              </button>
              {openMenuKey === 'assignee' ? (
                <div className="jira-filter-menu">
                  <div className="jira-filter-actions">
                    <button
                      type="button"
                      className="jira-filter-action"
                      onClick={selectAllAssignees}
                      disabled={normalizedSelectedAssigneeIds.length === assigneeOptions.length}
                    >
                      Tümü
                    </button>
                    <button
                      type="button"
                      className="jira-filter-action"
                      onClick={clearAssignees}
                      disabled={normalizedSelectedAssigneeIds.length === 0}
                    >
                      Temizle
                    </button>
                  </div>
                  <div className="jira-filter-options">
                    {assigneeOptions.map((option) => (
                      <label key={option.id} className="jira-filter-option">
                        <input
                          type="checkbox"
                          checked={selectedAssigneeSet.has(option.id)}
                          onChange={() => toggleAssignee(option.id)}
                        />
                        <span className="jira-filter-option-name">{option.label}</span>
                        <span className="jira-filter-option-count">{option.count}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {showRecencyFilter ? (
            <div className={`jira-filter ${openMenuKey === 'recency' ? 'is-open' : ''}`} onClick={stopMenuClick}>
              <button type="button" className="jira-filter-summary" onClick={(event) => toggleMenu(event, 'recency')}>
                <div>
                  <div className="jira-filter-label">Güncellik</div>
                  <div className="jira-filter-value">{recencySummary}</div>
                </div>
                <div className="jira-filter-chevron">▾</div>
              </button>
              {openMenuKey === 'recency' ? (
                <div className="jira-filter-menu">
                  <div className="jira-filter-options">
                    {RECENCY_FILTER_OPTIONS.map((option) => (
                      <label key={option.key} className="jira-filter-option jira-filter-option-simple">
                        <input
                          type="radio"
                          name="jira-recency-filter"
                          checked={normalizedRecencyFilterKey === option.key}
                          onChange={(event) => changeRecencyFilter(event, option.key)}
                        />
                        <span className="jira-filter-option-name">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

        </div>
      ) : null}

      {(groups.todo.length === 0 && groups.inprogress.length === 0 && groups.done.length === 0) ? (
        <div style={{ fontSize: 11, color: '#c8c8c8' }}>{emptyMessage}</div>
      ) : (
        <div className="jira-list">
          {renderGroup(
            'todo',
            'Yapılacak',
            groups.todo,
            buildGroupSummary(groups.todo),
            groups.todo.map((it) => renderItem(it))
          )}

          {renderGroup(
            'inprogress',
            'Devam Ediyor',
            groups.inprogress,
            buildGroupSummary(groups.inprogress),
            groups.inprogress.map((it) => renderItem(it))
          )}

          {normalizedViewModeKey === 'product' ? renderGroup(
            'rft',
            'RFT',
            groups.doneGroups.rft,
            buildGroupSummary(groups.doneGroups.rft),
            <div className="done-groups">
              {renderDoneRow('RFT', groups.doneGroups.rft)}
            </div>
          ) : null}

          {normalizedViewModeKey === 'product' ? renderGroup(
            'test',
            'TEST',
            groups.doneGroups.it,
            buildGroupSummary(groups.doneGroups.it),
            <div className="done-groups">
              {renderDoneRow('TEST', groups.doneGroups.it)}
            </div>
          ) : null}

          {renderGroup(
            'done',
            'Tamamlanan',
            normalizedViewModeKey === 'product' ? productDoneItems : groups.done,
            buildGroupSummary(normalizedViewModeKey === 'product' ? productDoneItems : groups.done, normalizedViewModeKey === 'product' ? productDoneParts : doneParts),
            <div className="done-groups">
              {normalizedViewModeKey === 'developer' ? renderDoneRow('RFT', groups.doneGroups.rft) : null}
              {normalizedViewModeKey === 'developer' ? renderDoneRow('TEST', groups.doneGroups.it) : null}
              {renderDoneRow('R-UAT', groups.doneGroups.rfu)}
              {renderDoneRow('UAT', groups.doneGroups.uat)}
              {renderDoneRow('RFP', groups.doneGroups.rfp)}
              {renderDoneRow('Done', groups.doneGroups.done)}
            </div>
          )}
        </div>
      )}

      <div className="jira-progress">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9a9a9a', marginBottom: 4 }}>
          <span>İlerleme</span>
          <span>{groups.doneCount}/{totalCount} %{percent}</span>
        </div>
        <div className="bar">
          <div className="fill" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="jira-footer">
        {groups.todo.length} yapılacak • {groups.inprogress.length} devam
        {doneParts.length ? ` • ${doneParts.join(' • ')}` : ''}
      </div>
    </div>
  );
};

export const render = ({ output, error, selectedAssigneeIds, recencyFilterKey, openMenuKey }, dispatch) => {
  if (error) {
    return <div className="jira-container">Hata: {String(error)}</div>;
  }
  let data = {};
  try { data = JSON.parse(output || '{}'); } catch { data = {}; }

  if (!data.ok) {
    const missing = (data.missing || []).join(', ');
    return (
      <div className="jira-container">
        <div className="jira-header">Jira Görevlerim</div>
        <div style={{ fontSize: 11, color: '#c8c8c8' }}>
          {data.error || 'Çıktı okunamadı.'}
          {missing ? <div>Eksik: {missing}</div> : null}
        </div>
      </div>
    );
  }
  return <JiraTasksView data={data} selectedAssigneeIds={selectedAssigneeIds} recencyFilterKey={recencyFilterKey} openMenuKey={openMenuKey} dispatch={dispatch} />;
};
