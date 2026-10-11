# TERREN

Dwa pierwsze ekrany strony pracowni architektury krajobrazu. Hero z włoskim ogrodem i centralnym logo; karuzela z trzema kwadratowymi kadrami, nazwami miast i krótkimi opisami. Wersje PL/EN.

## Podgląd lokalny

Node.js, bez dodatkowych zależności:

```sh
npm run dev
```

http://127.0.0.1:4173 — gotowe pliki strony w `dist/`.

## Materiały

- Oryginalne logo użytkownika w PNG.
- Włoski ogród wygenerowany przez wbudowane ImageGen. Brief: fotorealistyczny toskański ogród, cyprysy, oliwki, niskie strzyżone żywopłoty, żwirowa ścieżka, kamienna willa i miękkie popołudniowe światło, kadr 16:9 bez tekstu.
- Pozostałe dwa obrazy koncepcyjne z poprzedniej wersji: naturalistyczny ogród przy lesie i kameralny dziedziniec. Wszystkie ogrody oraz miasta są materiałem demonstracyjnym, nie portfolio zrealizowanych prac. Sekcja oznaczona jako koncepcje.
- Dokładne rodziny rozpoznane na normcph.com: Euclid Circular B Regular i Adobe Caslon Pro. CSS używa ich lokalnie, gdy są zainstalowane. Do identycznego renderowania na wszystkich urządzeniach potrzebne są własne licencjonowane webfonty lub kit Adobe. Nie skopiowano ograniczonych domenowo fontów referencji. Aktualne zamienniki: Jost / Libre Caslon Text. Bez kursywy.
- Białe znaki Facebook / Instagram są dekoracyjne do czasu dostarczenia adresów profili.
- Kontakt otwiera zachowany brief pobierany jako plik. Dane nie są wysyłane.

## Publikacja

https://jakubskrzypiec.github.io/TERREN/

Workflow `.github/workflows/pages.yml` publikuje `dist/` po pushu do `main`. Prywatny podgląd Sites jest zapisany w `.openai/hosting.json`.
