# Študovňa informačnej bezpečnosti

Jednoduchá stránka v slovenčine na učenie manažmentu informačnej bezpečnosti. Prepája dodané prednášky do vysvetlených lekcií a pokrýva témy pôvodných podkladov bez zverejňovania celých prezentácií.

**Online stránka:** [martinstav.github.io/studovna-informacnej-bezpecnosti](https://martinstav.github.io/studovna-informacnej-bezpecnosti/)

## Čo obsahuje

- **33 lekcií** s vysvetleniami, príkladmi, otázkami na vybavenie z pamäti a odkazmi na konkrétne snímky.
- **Reels na telefóne aj počítači:** 302 dielov so slovenským hlasom, animovanými modelmi, tromi hudobnými slučkami a interaktívnymi otázkami.
- **99 kartičiek** s opakovaním podľa odpovedí. Slabšie otázky sa vracajú skôr; známe postupne po 1, 3, 7 a 14 dňoch.
- **66 tréningových testových otázok**, premiešané možnosti a vysvetlenia správnych odpovedí.
- **Prehľad 7 zdrojov** s názvami a číslami príslušných snímok pri lekciách.
- Vyhľadávanie v lekciách, príkladoch a otázkach aj bez diakritiky.
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

Súbory musia zostať spolu. Pre Reels odporúčame lokálny server uvedený nižšie, pretože niektoré prehliadače obmedzujú vnorené animované scény pri otvorení cez `file://`. Skripty, písmo a spracované učivo sú lokálne, preto stránka nepotrebuje internet na čítanie a precvičovanie stiahnutého obsahu.

Pri vývoji môžeš použiť jednoduchý lokálny server:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Potom otvor [http://localhost:8000](http://localhost:8000).

## Reels na telefóne aj počítači

V navigácii v časti **Precvičovanie a zdroje** vyber **Reels**, alebo otvor [priamy odkaz na Reels](https://martinstav.github.io/studovna-informacnej-bezpecnosti/#reels). Klepni na **Spustiť so zvukom**; prehliadač vyžaduje tento prvý dotyk na povolenie zvuku.

- Natívnym zvislým posúvaním s prichytením na celý displej alebo šípkami prepneš diel. Po dohraní si sám zvolíš ďalší.
- **Pre teba** vyberá náhodne: váha dielu je `1 / (1 + počet zhliadnutí)^1.7`. Posledných osem zobrazených dielov vynecháva. Pri ôsmich zhliadnutiach je váha približne 42-krát nižšia než pri nevidenom diele. Započíta sa zobrazenie aspoň tri sekundy po spustení; krátke preskočenie sa do počtu zhliadnutí nepočíta. V **Obsahu** môžeš stále vybrať postupné prechádzanie celého učiva.
- V **Obsahu** vyber jednu z 33 lekcií, celý výklad, iba otázky alebo uložené diely.
- Záložkou uložíš diel na neskôr; počty zhliadnutí aj prejdené diely zostávajú v tomto prehliadači.
- Hlas a hudbu vypneš samostatne. V nastaveniach vyberieš aj hudobnú slučku a titulky.
- Otázky čakajú na tvoju odpoveď. Riešenie sa ukáže a prečíta až po výbere alebo odhalení.
- Odkaz pod dielom otvorí plnú lekciu. Reels majú vlastný postup; automaticky neoznačujú lekciu za prečítanú ani úspešne otestovanú.

Séria obsahuje **104 výkladov, 33 praktických príkladov, 99 otázok na vybavenie a 66 otázok s výberom odpovede**. Žiadny odsek existujúcej lekcie sa pri spracovaní nevynecháva. Dĺžka výkladu závisí od množstva učiva. Frázové titulky používajú časové značky vytvorené hlasovým poskytovateľom. Úvodné diely lekcií začínajú konkrétnou situáciou alebo otázkou.

Hlas je vopred vytvorený slovenským neurálnym hlasom **Viktoria Neural od Microsoftu**. Pri prehrávaní nie je potrebný účet ani systémový hlas v zariadení. Schválené nahrávky zostávajú zachované.

**137 úplných animovaných výkladov a príkladov** obsahuje **796 vizuálnych zmien**, ukotvených k skutočným časovým značkám slov. Každá časť má vlastný scenár: menia sa údaje platby, uzatvárajú prístupy, skladajú vrstvy ochrany, obnovujú služby alebo počítajú riziká. Ide o konečné časové osi vytvorené pre **HyperFrames 0.8.214**, prehrávané lokálnym finálnym prehrávačom. Obraz sleduje čas nahrávky aj pri pauze a posunutí. Krátke opakujúce sa videoslučky sa nepoužívajú. Otázky majú vlastné interaktívne rozhranie. Editor sa nezobrazuje.

Na počítači je **video vľavo a ovládanie vpravo**. Na telefóne sa rozloženie prispôsobuje šírke, dynamickej výške displeja aj bezpečným okrajom pri výreze. Štvorcová animovaná scéna sa zobrazuje celá v spoločnej farebnej ploche, bez orezania na pevný pomer9:16. Dlhší text otázok je posúvateľný. Obmedzený pohyb zachováva jednotlivé vysvetľujúce stavy a vypína ich pohybové prechody.

Tri inštrumentálne skladby sú pôvodné, vytvorené pre stránku. Hudba sa pod hlasom priebežne stíši a upraví v pásmach, ktoré potrebuje reč; používa namerané profily HyperFrames pre každú nahrávku. Hlasová nahrávka sa tým nemení. Pôvod médií je v `reels/media/README.md`, licencie prehrávača v `reels/vendor/README.md`.

Zvukové súbory majú spolu približne 39 MB; online sa načítava aktuálny diel, nie celá séria naraz. Stiahnutý kompletný repozitár obsahuje aj zvuk pre offline použitie. Postup Reels je v `ib-reels-v1`; zatiaľ sa neprenáša exportom hlavného postupu lekcií.

## Odporúčaný spôsob učenia

1. Prečítaj vysvetlenie a praktický príklad.
2. Podľa odkazu na zdroj si prípadné podrobnosti over vo vlastných študijných podkladoch.
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

Originálne PPTX/PDF, obrázky celých snímok ani ich úplné textové prepisy sa v repozitári alebo na stránke nezverejňujú. Lokálne podklady zostávajú zachované. Samostatná fotografia alebo ilustrácia použitá vo vysvetlení učiva môže zostať; celé snímky neslúžia ako náhrada prezentácie. Právne znenia, termíny, historické štatistiky a názvy produktov zachytávajú dodané materiály. Rozdiely v označení vlastníkov a rizikových škálach sú vysvetlené v príslušných lekciách.

## Súbory a úpravy

```text
index.html       Základ stránky
styles.css       Vzhľad a responzívne rozloženie
app.js           Navigácia, učenie, testy, výpočty a ukladanie
data.js          Lekcie, otázky, kartičky a bibliografia
reels/           Finálny prehrávač, 302 dielov, HyperFrames scény a audio
fonts/           Lokálne písmo DM Sans a jeho licencia
icon.svg         Ikona stránky
AKO-ZACAT.txt    Krátky návod k offline verzii
```

V `data.js` je objekt `window.STUDY_DATA` s časťami `lessons`, `groups`, `sources`, `cards` a `checks`. Pri úprave zachovaj jedinečné identifikátory a väzby otázok na lekcie. Matica a škály v `app.js` zodpovedajú stranám 38 a 40–42 dodaného PDF.

Po úprave `reels/film.js` alebo časovaných scenárov v `reels/storyboards.json` obnov finálne animácie pomocou `node reels/build-films.mjs`. Obsluha stránky samotná tento krok nepotrebuje.

Kontrola syntaxe skriptov:

```bash
node --check app.js
node --check data.js
node --check reels/player.js
node --check reels/film.js
node reels/verify.mjs
node reels/discovery.test.mjs
```

## Autorstvo a licencie

Pôvodné študijné materiály patria ich autorom; tento repozitár im nepriraďuje novú licenciu. DM Sans používa SIL Open Font License, priloženú v `fonts/OFL.txt`. Pri ďalšom zdieľaní pôvodných podkladov rešpektuj ich autorstvo a podmienky použitia.
