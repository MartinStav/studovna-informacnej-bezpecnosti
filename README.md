# Študovňa informačnej bezpečnosti

Jednoduchá stránka v slovenčine na učenie manažmentu informačnej bezpečnosti. Prepája dodané prednášky do vysvetlených lekcií a zachováva celý pôvodný obsah.

**Online stránka:** [martinstav.github.io/studovna-informacnej-bezpecnosti](https://martinstav.github.io/studovna-informacnej-bezpecnosti/)

## Čo obsahuje

- **33 lekcií** s vysvetleniami, príkladmi, otázkami na vybavenie z pamäti a odkazmi na konkrétne snímky.
- **99 kartičiek** s opakovaním podľa odpovedí. Slabšie otázky sa vracajú skôr; známe postupne po 1, 3, 7 a 14 dňoch.
- **66 tréningových testových otázok**, premiešané možnosti a vysvetlenia správnych odpovedí.
- **348 pôvodných snímok a strán** ako obrázky, s pôvodným textom a dostupnými poznámkami prezentujúceho.
- **Všetkých 7 originálnych súborov** na stiahnutie.
- Vyhľadávanie v lekciách a pôvodných textoch aj bez diakritiky.
- Interaktívnu kvalitatívnu maticu, semikvantitatívne hodnotenie rizika a výpočty ALE a ROSI.
- Ukladanie prečítaných lekcií, výsledkov, termínov opakovania a vlastných poznámok.
- Export a import postupu do JSON zálohy.
- Rozloženie pre počítač aj mobil, klávesnicové ovládanie a rešpektovanie obmedzeného pohybu.

## Otvorenie stránky

Stránka nepotrebuje inštaláciu balíkov, zostavenie ani backend.

Online verzia sa publikuje cez GitHub Pages z vetvy `main`, z koreňa repozitára. Súbor `.nojekyll` zabezpečuje priame publikovanie statických súborov.

1. Stiahni repozitár cez **Code → Download ZIP** alebo ho naklonuj.
2. Rozbaľ celý priečinok.
3. Otvor **index.html** v prehliadači.

Súbory musia zostať spolu. Skripty, písmo, obrázky a originály sú lokálne, preto stránka nepotrebuje internet na čítanie a precvičovanie stiahnutého obsahu.

Pri vývoji môžeš použiť jednoduchý lokálny server:

```bash
python3 -m http.server 8000
```

Potom otvor [http://localhost:8000](http://localhost:8000).

## Odporúčaný spôsob učenia

1. Prečítaj vysvetlenie a praktický príklad.
2. Prejdi pôvodné snímky k téme, najmä diagramy a podrobné prehľady.
3. Skús otázky vysvetliť nahlas bez otvorenej odpovede.
4. Vyrieš test, prečítaj vysvetlenia chýb a vráť sa k príslušnej lekcii.
5. Opakuj kartičky s odstupom a spoj pojmy s vlastným príkladom.

Prečítaná lekcia je oddelená od výsledku testu. Výsledok celej lekcie sa uloží len po zodpovedaní oboch jej otázok. Testy sú tréningové, nie potvrdené skúškové otázky ani záruka zvládnutia predmetu.

## Uloženie a záloha

Postup sa ukladá do `localStorage` používaného prehliadača. Neodosiela sa na server. Pri vymazaní údajov prehliadača alebo zmene zariadenia sa môže stratiť.

V **Prehľade a zálohe postupu** použi **Exportovať postup**. Export obsahuje aj poznámky. Na inom zariadení alebo v inej verzii stránky ho načítaj cez **Importovať zálohu**. Online a offline verzia používajú odlišné úložiská; export/import medzi nimi umožňuje prenos.

## Učivo a zdroje

Obsah pokrýva základy CIA a aktív, ISMS a PDCA, riadenie a role, právny rámec podľa prednášok, audit a metriky, klasifikáciu, personálnu bezpečnosť, vzdelávanie, mobilitu, IAM/PAM, fyzickú bezpečnosť, dodávateľov a cloud, incidenty, BCM, kryptografiu, prevádzku, malvér, zraniteľnosti a Bug Bounty, zálohy, logovanie, siete, SDLC, transakcie, riadenie ICT rizík a projektovú prípravu.

Spracované materiály:

- Úvod do informačnej bezpečnosti — Marek Zeman, 2026, 54 snímok.
- Procesy informačnej bezpečnosti — Marek Zeman, 75 snímok.
- Riadenie informačnej bezpečnosti — Marek Zeman, 45 snímok.
- Moderné vzdelávanie — Marek Zeman, 16 snímok.
- Bezpečnosť IS I — Marek Zeman, 59 snímok.
- Bezpečnosť IS II — Marek Zeman, 49 snímok.
- ICT Risk Management — Jozef Úroda, materiál označený 19. 11. 2025, 50 strán.

Originálne PPTX/PDF sú nezmenené. Náhľady prezentácií sú prevedené do WebP; pri rozdieloch vo formátovaní je rozhodujúci originál. Právne znenia, termíny, historické štatistiky a názvy produktov zachytávajú dodané materiály. Rozdiely v označení vlastníkov a rizikových škálach sú vysvetlené v príslušných lekciách.

## Súbory a úpravy

```text
index.html       Základ stránky
styles.css       Vzhľad a responzívne rozloženie
app.js           Navigácia, učenie, testy, výpočty a ukladanie
data.js          Lekcie, otázky, kartičky a zdrojové texty
slides/          Náhľady všetkých snímok a strán
originals/       Pôvodných 7 súborov
fonts/           Lokálne písmo DM Sans a jeho licencia
icon.svg         Ikona stránky
AKO-ZACAT.txt    Krátky návod k offline verzii
```

V `data.js` je objekt `window.STUDY_DATA` s časťami `lessons`, `groups`, `sources`, `cards` a `checks`. Pri úprave zachovaj jedinečné identifikátory a väzby otázok na lekcie. Matica a škály v `app.js` zodpovedajú stranám 38 a 40–42 dodaného PDF.

Kontrola syntaxe skriptov:

```bash
node --check app.js
node --check data.js
```

## Autorstvo a licencie

Pôvodné študijné materiály patria ich autorom; tento repozitár im nepriraďuje novú licenciu. DM Sans používa SIL Open Font License, priloženú v `fonts/OFL.txt`. Pri ďalšom zdieľaní pôvodných podkladov rešpektuj ich autorstvo a podmienky použitia.
