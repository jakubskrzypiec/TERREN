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


## Wersja 4

Uproszczone studio z małym nagłówkiem i tekstem przy dolnej krawędzi; robocze dane fikcyjnej marki: Warszawa, 2018. Oferta jako cztery pełnej szerokości poziome pasy. Nowy otwarty kadr wody z animacją odbić przez filtr SVG, przyciskiem zatrzymania oraz ograniczeniem ruchu zgodnym z preferencjami urządzenia. Nie jest to nagranie wideo. Podejście w trzech krótkich zdaniach, FAQ wyśrodkowane, zwykły formularz na białej sekcji i czarna stopka.

Formularz demonstracyjny zgodnie z poleceniem właściciela: nie wysyła ani nie zapisuje danych. Nie zawiera aktywnego adresu odbiorcy. Wszystkie treści dostępne w PL/EN. Kontrola kodu obejmuje brak żądań sieciowych formularza, kompletność tłumaczeń i istniejącą logikę karuzeli. Nowy układ nie był sprawdzony wizualnie w przeglądarce.

Prompt nowego obrazu, ImageGen: włoski ogród, duża pusta tafla wody w dolnych 60% kadru, cyprysy i oliwki przy górnej krawędzi, ciepły kamienny pawilon, naturalne popołudniowe światło, bez ludzi i tekstu. Plik: dist/assets/water-garden.jpg.


## Wersja 5

Biało-czarny interfejs z naturalną fotografią. Lżejszy krój Libre Caslon Display jako przybliżenie Adobe Caslon Pro oraz DM Sans jako przybliżenie Euclid. Własne licencjonowane fonty referencji nadal nie są osadzone. Większe O studiu, jednolity czarny tekst i roboczy rok 2016 w treści. Oferta jako białe i jasnoszare poziome pasy, z czarnym stanem hover. Przerywnik pełnej szerokości, spokojniejsza typografia. Sekcja materiałów oraz niski kadr ogrodu przed formularzem.

Karuzela startuje automatycznie co 4 sekundy. Najechanie myszą i fokus nie zatrzymują jej; użytkownik może użyć przycisku pauzy. Ograniczony ruch wyłącza płynną animację przejścia, zachowując zmianę slajdów. Sprawdzono automatyczne przesuwanie, ręczną pauzę, zawijanie, PL/EN, brak wysyłki formularza oraz czarno-białą paletę CSS. Układ nadal nie był wizualnie sprawdzony w przeglądarce.

