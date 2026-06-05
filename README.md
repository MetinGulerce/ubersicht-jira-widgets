# ubersicht-jira-widgets

macOS icin Übersicht uzerinde calisan iki Jira widget'i:

- `JiraTasks.widget`: Acik sprint'teki kendi gorevlerini listeler.
- `JiraTeamRadar.widget`: Takim uyelerinin durumlarini kisi bazinda ozetler.

Her iki widget da Jira Cloud API kullanir ve kisisel ayarlarinizi yerel ortam dosyalarindan okur.

## Gereksinimler

- macOS
- Übersicht veya vÜbersicht
- Jira Cloud hesabi
- Atlassian API token

## Kurulum

1. Übersicht'i indir ve kur: https://tracesof.net/uebersicht/
2. Menüden `Open Widgets Folder` ile widget klasorunu ac.
3. Bu repodaki `JiraTasks.widget` ve `JiraTeamRadar.widget` klasorlerini o dizine kopyala.
4. Gerekirse Übersicht menusunden `Refresh All Widgets` yap.

Bu widget'lar standart Übersicht `.jsx` API'sini kullandigi icin cogu durumda vÜbersicht'e ozel bir donusum gerekmez.

## Konfigurasyon

Her kullanici kendi makinesinde `~/.jira_env` dosyasi olusturmalidir.

Hizli baslangic icin widget klasorlerinin icine dogrudan doldurulabilir bos sablonlar eklendi:

- `JiraTasks.widget/.env.example`
- `JiraTeamRadar.widget/.env.example`

En pratik yol:

1. Bu dosyalardan birini kopyala.
2. Kopyayi `~/.jira_env` olarak kaydet.
3. Degerleri kendi Jira bilgilerinle doldur.

Istersen `~/.jira_env` yerine widget klasorunde `.env` olarak da kullanabilirsin.

Detayli ornek ve aciklamalar icin `jira_config_example.env` dosyasi da repoda duruyor.

Ornek:

```env
JIRA_BASE_URL="https://your-domain.atlassian.net"
JIRA_EMAIL="isim@firma.com"
JIRA_API_TOKEN="atlassian-api-token"
JIRA_TEAM_ACCOUNT_IDS="account-id-1,account-id-2,account-id-3"
JIRA_TASKS_VIEW_MODE="developer"
```

`JIRA_TEAM_ACCOUNT_IDS` alani opsiyoneldir.

`JIRA_TASKS_VIEW_MODE` alani da opsiyoneldir.

- Bos birakilirsa `JiraTasks.widget` sadece kendi gorevlerini gosterir.
- Doldurulursa `JiraTasks.widget` takimdaki kullanicilarin aktif gorevlerini listeler.
- `JiraTeamRadar.widget` zaten ayni listeyi takim ozeti icin kullanir.
- `JIRA_TASKS_VIEW_MODE="developer"` varsayilan davranistir.
- `JIRA_TASKS_VIEW_MODE="product"` secilirse `RFT` ve `TEST`, `Tamamlanan` grubundan ayri ust gruplar olarak gosterilir.
- JiraTasks icinde durum gruplari varsayilan olarak dar gelir; acildiginda ilgili gorevleri gorursunuz.

## Jira Token Alma

1. https://id.atlassian.com/manage-profile/security/api-tokens adresine git.
2. `Create API token` ile yeni token olustur.
3. Token'i `~/.jira_env` icine ekle.

Token'i repoya commit etme. Her ekip uyesi kendi token'ini kendi olusturmali.

## Takim Uyesi Guncelleme

`JiraTeamRadar.widget` ve takim modundaki `JiraTasks.widget` kullanicilari `JIRA_TEAM_ACCOUNT_IDS` degiskeninden okur. Kisi listesi degistiginde sadece bu alani guncellemek yeterlidir.

Widget kisi isimlerini Jira'dan otomatik alir; kod icinde sabit isim listesi yoktur.

## Test

Jira baglantisini terminalden test etmek icin:

```bash
./test_jira_api.sh
```

## Guvenlik

- `.env` dosyalari repoya dahil edilmez.
- Kisisel token, e-posta ve account ID bilgilerini sadece yerel ortam dosyalarinda tut.
- Public paylasim icin sadece ornek konfigurasyon dosyasini commit et.

## Lisans

Bu repo [LICENSE](LICENSE) dosyasindaki MIT lisansi ile dagitilir.

