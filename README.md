# TERREN

Strona główna autorskiej pracowni projektowania ogrodów. Polski i angielski, responsywny układ, okna koncepcji, mobilne menu, zapis briefu jako pliku tekstowego.

## Uruchomienie

Wymagany Node.js. Bez instalacji zależności:

```sh
npm run dev
```

Otwórz http://127.0.0.1:4173. Gotowe pliki strony znajdują się w `dist/`.

## Treści i materiały

- Logo dostarczone przez właściciela projektu, zachowane w oryginalnym pliku PNG.
- Trzy obrazy koncepcyjne wygenerowane przez wbudowane ImageGen. Nie przedstawiają wykonanych realizacji. Informacja jest widoczna na stronie i w oknach projektów.
- Kierunek obrazów: naturalistyczny europejski ogród z trawami i kamienną ścieżką w porannym świetle; kameralny dziedziniec z drzewem i kamiennym tarasem; ogród bylinowy na skraju lasu w ciepłym świetle.
- Teksty PL/EN w `dist/app.js`. Przełącznik pamięta wybór języka lokalnie.
- Brief pobiera się na urządzenie. Brak wysyłania danych i backendu. Właściwe dane kontaktowe i docelowe portfolio wymagają materiałów właściciela.
- Font DM Sans z Google Fonts, krój szeryfowy z systemu. Strona działa również bez zewnętrznego fontu.

## Publikacja

Statyczny katalog `dist` można udostępnić na dowolnym hostingu statycznym. `.openai/hosting.json` identyfikuje prywatny podgląd Sites.
