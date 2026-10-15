# Portfolio — Cecilie Vestergaard Andersen

Statisk hjemmeside i ren HTML, CSS og JavaScript. Der er ingen build-trin, så filerne kan lægges direkte på GitHub Pages.

## Struktur

```
index.html        Forside
projekter.html    Projektoversigt (med filtrering)
om-mig.html       Om mig
kontakt.html      Kontakt (formularen åbner brugerens mailprogram)
mellemrum.html    Case 01
vuuh.html         Case 02
again.html        Case 03
404.html          Fejlside
css/style.css     Alt styling (farver og fonte øverst i :root)
js/main.js        Pladsholdere for manglende billeder, filtre, kontaktformular
media/            Billeder og videoer (se listen nedenfor)
CNAME             Dit domæne — RET DETTE
```

Se siden lokalt: åbn mappen i VS Code og brug "Live Server", eller kør `python3 -m http.server` i mappen og gå til http://localhost:8000.

## 1. Læg billeder og videoer i /media

Indtil en fil ligger det rigtige sted, viser siden en stribet boks med teksten "Mangler: …". Så kan du se, hvad der mangler.

**Billeder fra Figma:** marker laget i v2-casesiden → Export → PNG, 2x → gem med filnavnet nedenfor.
**Videoer:** brug de originale skærmoptagelser. Gem dem som .mp4 (QuickTime: Arkiv → Eksporter som → 1080p; eller HandBrake). Hold hver fil under ca. 20 MB.

| Fil | Hvad / Figma-lag |
|---|---|
| `media/forside/cecilie.png` | Udklippet billede af dig (erstat den nuværende lavopløste version, gerne med transparent baggrund) |
| `media/mellemrum/hero.mp4` | "Forside laptop" (video) i sektionen *Hero* |
| `media/mellemrum/struktur-for.png` | "Billeder" under *Før* i *Struktur før/efter* |
| `media/mellemrum/struktur-efter.png` | "Billeder" under *Efter* i *Struktur før/efter* |
| `media/mellemrum/data-for.png` | "Billeder" under *Før* i *Data før/efter* |
| `media/mellemrum/data-efter.png` | "Billeder" under *Efter* i *Data før/efter* |
| `media/mellemrum/formular-for.png` | "Skærmbillede 2026-10-15 kl. 11.04.29" |
| `media/mellemrum/formular-efter.png` | "Skærmbillede 2026-10-15 kl. 11.04.43" |
| `media/mellemrum/tilmeldinger.mp4` | "Macbook-Air-cecilieva.github.io…" (video) |
| `media/vuuh/hero.png` | Rammen "Shopify installation" i *Hero – Shopify App Store* |
| `media/vuuh/charlotte.jpg` | "Foto" i *Persona* |
| `media/vuuh/feedback-for.png` | "image 7" |
| `media/vuuh/feedback-efter.mp4` | Skærmoptagelse 2026-09-15 kl. 11.00.20 |
| `media/vuuh/struktur-for-1.png` | "Skærmbillede 2026-09-11 kl. 09.09.06" |
| `media/vuuh/struktur-for-2.png` | Rammen "Outputs page form - Vuuh admin" |
| `media/vuuh/struktur-efter.mp4` | Skærmoptagelse 2026-09-16 kl. 09.57.00 |
| `media/vuuh/demo-for.png` | Rammen "Frame 544" (Outputs-siden) |
| `media/vuuh/demo-efter.mp4` | Skærmoptagelse 2026-09-16 kl. 09.56.15 |
| `media/again/logo-opbygning.png` | "Logo opbygning" i *Hero – logo opbygning* |
| `media/again/logovarianter.png` | Rammen "Logovarianter" øverst i *Brand* |
| `media/again/moodboard.png` | "Moodboard" i *Brand* |
| `media/again/for-mobil.png` | "Før – mobil" |
| `media/again/efter-mobil.png` | "Efter – mobil" |
| `media/again/flow-kober.png` | "Køber-flow – skærme" |
| `media/again/flow-saelger.png` | "Sælger-flow – skærme" |
| `media/again/flow-ekstra.png` | "Ekstra features – skærme" |

## 2. Links og tekster du selv skal udfylde

Søg efter `TODO` og `[` i HTML-filerne:

- **om-mig.html**: din intro, værktøjer og skole/årstal (står i [klammer])
- **mellemrum.html**: link til live site og GitHub-repo
- **vuuh.html**: link til Figma-prototype og UX Audit Summary (læg PDF'en i `media/vuuh/`)
- **again.html**: link til Figma-prototype
- **Alle sider**: Instagram, LinkedIn og TikTok (`href="#"` i footeren og på kontaktsiden)

## 3. Læg siden på GitHub Pages

1. Opret et nyt repository på GitHub, fx `portfolio`.
2. Upload alle filer i denne mappe (træk dem ind under "Add file → Upload files", eller brug git).
3. Gå til **Settings → Pages**. Under "Build and deployment" vælg **Deploy from a branch**, branch **main**, mappe **/ (root)**. Gem.
4. Under **Custom domain** skriv dit domæne og tryk **Save**.
5. Ret filen `CNAME`, så den kun indeholder dit domæne (fx `cecilieandersen.dk`).

## 4. Peg domænet på GitHub (Simply)

Log ind på Simply → vælg domænet → **DNS**:

1. Slet de eksisterende records for `@` og `www`, der peger på Simplys webhotel.
2. Opret fire **A-records** med navn `@` (eller tomt):
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Opret én **CNAME** med navn `www`, der peger på `DIT-GITHUB-BRUGERNAVN.github.io`

Når DNS har slået igennem (op til et døgn), sæt flueben i **Enforce HTTPS** under Settings → Pages.
