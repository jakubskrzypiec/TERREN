# TERREN

Strona pracowni architektury krajobrazu: włoskie hero z centralnym logo, przesuwana karuzela pięciu ogrodów, studio, cztery karty oferty, duży kadr ogrodu, podejście do współpracy, FAQ i kontakt. Wszystkie treści w PL/EN.

## Podgląd lokalny

Node.js, bez dodatkowych zależności:

```sh
npm run dev
```

http://127.0.0.1:4173 — gotowe pliki strony w `dist/`.

## Materiały

- Oryginalne logo użytkownika w PNG.
- Włoski ogród wygenerowany przez wbudowane ImageGen. Brief: fotorealistyczny toskański ogród, cyprysy, oliwki, niskie strzyżone żywopłoty, żwirowa ścieżka, kamienna willa i miękkie popołudniowe światło, kadr 16:9 bez tekstu.
- Obrazy z ImageGen: ogród przy lesie, dziedziniec, ogród z trawami, ogród z lustrem wody oraz wizja kamiennego studia z przeszkleniem, oliwkami i stołem projektowym. Ogrody, miasta i siedziba są demonstracyjnymi koncepcjami. Nie przedstawiają wykonanych realizacji ani rzeczywistego biura.
- Dokładne rodziny rozpoznane na normcph.com: Euclid Circular B Regular i Adobe Caslon Pro. CSS używa ich lokalnie, gdy są zainstalowane. Do identycznego renderowania na wszystkich urządzeniach potrzebne są własne licencjonowane webfonty lub kit Adobe. Nie skopiowano ograniczonych domenowo fontów referencji. Aktualne zamienniki: Jost / Libre Caslon Text. Bez kursywy.
- Białe znaki Facebook / Instagram są dekoracyjne do czasu dostarczenia adresów profili.
- Kontakt otwiera zachowany brief pobierany jako plik. Dane nie są wysyłane.

## Publikacja

https://jakubskrzypiec.github.io/TERREN/

Workflow `.github/workflows/pages.yml` publikuje `dist/` po pushu do `main`. Prywatny podgląd Sites jest zapisany w `.openai/hosting.json`.

## Weryfikacja wersji 3

Sprawdzono składnię JavaScript, kompletność PL/EN, kotwice, dostępność plików obrazów i logikę przesuwania pięciu slajdów w obu kierunkach, w tym zawijanie i tryb ograniczonego ruchu. Wizualna kontrola w przeglądarce była zablokowana przez automatyczny przegląd uprawnień z powodu limitu użycia.

