#!/bin/bash

# Jira API Test Script - 2024/2025
# Bu script Jira API bağlantınızı test eder

echo "🔧 Jira API Bağlantı Testi"
echo "=========================="

# Ortam dosyalarını yükle
for f in \
  "$HOME/.jira_env" \
  "$HOME/.config/ubersicht/jira_env" \
  "$HOME/Library/Application Support/Übersicht/widgets/JiraTasks.widget/.env" \
  "$HOME/Library/Application Support/Übersicht/widgets/JiraTeamRadar.widget/.env"
do
  if [ -f "$f" ]; then
    echo "✅ Konfigürasyon dosyası bulundu: $f"
    . "$f"
    break
  fi
done

# Gerekli değişkenleri kontrol et
if [ -z "${JIRA_BASE_URL}" ] || [ -z "${JIRA_EMAIL}" ] || [ -z "${JIRA_API_TOKEN}" ]; then
  echo "❌ HATA: Eksik konfigürasyon!"
  echo ""
  echo "Lütfen aşağıdaki değişkenleri ayarlayın:"
  [ -z "${JIRA_BASE_URL}" ] && echo "  - JIRA_BASE_URL"
  [ -z "${JIRA_EMAIL}" ] && echo "  - JIRA_EMAIL"
  [ -z "${JIRA_API_TOKEN}" ] && echo "  - JIRA_API_TOKEN"
  echo ""
  echo "Örnek konfigürasyon dosyası: jira_config_example.env"
  exit 1
fi

echo "📋 Konfigürasyon:"
echo "  Base URL: ${JIRA_BASE_URL}"
echo "  Email: ${JIRA_EMAIL}"
echo "  Token: ${JIRA_API_TOKEN:0:10}..."
echo ""

# API v3 testi
echo "🧪 API v3 Test Ediliyor..."
URL_V3="${JIRA_BASE_URL}/rest/api/3/myself"
HTTP_CODE=$(curl -sS --max-time 10 -H "Accept: application/json" \
  -H "User-Agent: Ubersicht-JiraTest/1.0" \
  -u "${JIRA_EMAIL}:${JIRA_API_TOKEN}" \
  "${URL_V3}" -w "%{http_code}" -o /tmp/jira_test_v3.json)

if [ "${HTTP_CODE}" = "200" ]; then
  echo "✅ API v3 çalışıyor! (HTTP ${HTTP_CODE})"
  echo "   Kullanıcı: $(cat /tmp/jira_test_v3.json | grep displayName | cut -d'"' -f4)"
else
  echo "❌ API v3 hatası: HTTP ${HTTP_CODE}"
  echo "   Yanıt: $(cat /tmp/jira_test_v3.json | head -c 200)"
fi

# API v2 testi
echo ""
echo "🧪 API v2 Test Ediliyor..."
URL_V2="${JIRA_BASE_URL}/rest/api/2/myself"
HTTP_CODE=$(curl -sS --max-time 10 -H "Accept: application/json" \
  -H "User-Agent: Ubersicht-JiraTest/1.0" \
  -u "${JIRA_EMAIL}:${JIRA_API_TOKEN}" \
  "${URL_V2}" -w "%{http_code}" -o /tmp/jira_test_v2.json)

if [ "${HTTP_CODE}" = "200" ]; then
  echo "✅ API v2 çalışıyor! (HTTP ${HTTP_CODE})"
  echo "   Kullanıcı: $(cat /tmp/jira_test_v2.json | grep displayName | cut -d'"' -f4)"
else
  echo "❌ API v2 hatası: HTTP ${HTTP_CODE}"
  echo "   Yanıt: $(cat /tmp/jira_test_v2.json | head -c 200)"
fi

# JQL sorgu testi
echo ""
echo "🧪 JQL Sorgu Test Ediliyor..."
JQL="assignee=currentUser() ORDER BY updated DESC"
# Jira'nın yeni endpoint'ini kullan
URL_SEARCH="${JIRA_BASE_URL}/rest/api/3/search/jql"

# JSON'i geçici dosyaya yaz
cat > /tmp/jira_test_request.json << EOF
{
  "jql": "${JQL}",
  "maxResults": 5,
  "fields": ["summary","status","assignee"]
}
EOF

HTTP_CODE=$(curl -sS --max-time 10 -X POST -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "User-Agent: Ubersicht-JiraTest/1.0" \
  -d @/tmp/jira_test_request.json \
  -u "${JIRA_EMAIL}:${JIRA_API_TOKEN}" \
  "${URL_SEARCH}" -w "%{http_code}" -o /tmp/jira_test_search.json)

rm -f /tmp/jira_test_request.json

if [ "${HTTP_CODE}" = "200" ]; then
  TOTAL=$(cat /tmp/jira_test_search.json | grep '"total"' | head -1 | cut -d':' -f2 | cut -d',' -f1 | tr -d ' ')
  echo "✅ JQL sorgusu çalışıyor! (HTTP ${HTTP_CODE})"
  echo "   Toplam issue sayısı: ${TOTAL:-0}"
  
  # İlk issue'yu göster
  if [ ! -z "${TOTAL}" ] && [ "${TOTAL}" -gt 0 ] 2>/dev/null; then
    echo "   Örnek issue: $(cat /tmp/jira_test_search.json | grep '"summary"' | head -1 | cut -d'"' -f4)"
  fi
else
  echo "❌ JQL sorgusu hatası: HTTP ${HTTP_CODE}"
  echo "   Yanıt: $(cat /tmp/jira_test_search.json | head -c 200)"
fi

# Sonuç
echo ""
echo "🎯 Test Sonucu:"
if [ -f /tmp/jira_test_v3.json ] && [ -f /tmp/jira_test_search.json ]; then
  V3_OK=$([ -f /tmp/jira_test_v3.json ] && grep -q displayName /tmp/jira_test_v3.json && echo "true" || echo "false")
  SEARCH_OK=$([ -f /tmp/jira_test_search.json ] && (grep -q '"issues"' /tmp/jira_test_search.json || grep -q '"total"' /tmp/jira_test_search.json) && echo "true" || echo "false")
  
  if [ "${V3_OK}" = "true" ] && [ "${SEARCH_OK}" = "true" ]; then
    echo "✅ Jira widget'ları çalışmaya hazır!"
    echo "   Übersicht'i yeniden başlatabilirsiniz."
  else
    echo "❌ Sorunlar tespit edildi."
    echo "   V3 OK: ${V3_OK}, Search OK: ${SEARCH_OK}"
  fi
else
  echo "❌ Test dosyaları oluşturulamadı."
  echo "   /tmp/jira_test_v3.json: $([ -f /tmp/jira_test_v3.json ] && echo "✅" || echo "❌")"
  echo "   /tmp/jira_test_search.json: $([ -f /tmp/jira_test_search.json ] && echo "✅" || echo "❌")"
fi

# Temizlik
rm -f /tmp/jira_test_*.json

echo ""
echo "📖 Yardım için: cat jira_config_example.env"