# Indie Stork — landing page

Gotowy, dwujęzyczny (PL/EN) landing page dla niezależnego studia **Indie Stork**, oparty na zatwierdzonej identyfikacji z bocianem.

## Technologia

- HTML + CSS + JavaScript, bez frameworków, npm i kompilacji.
- Responsywny design — telefony, tablety i desktopy.
- Gotowy do statycznego hostingu na GitHub Pages.
- Nie zbiera danych, nie ma formularzy, cookies ani analityki.
- Fonty są opcjonalnie pobierane z Google Fonts (gdy brak internetu, używane są fonty systemowe).

## Jak opublikować na GitHub Pages

1. Zaloguj się na [github.com](https://github.com) i utwórz publiczne repozytorium, np. `indie-stork`.
2. Wgraj **zawartość folderu** `indie-stork-website` bezpośrednio do katalogu głównego repozytorium: `index.html`, `styles.css`, `script.js`, folder `assets/`, `.nojekyll`.
3. Wejdź w **Settings → Pages**.
4. W **Build and deployment** wybierz **Deploy from a branch**.
5. Wybierz gałąź `main` oraz katalog `/(root)` i zapisz.
6. Po wdrożeniu strona będzie dostępna pod adresem w formacie `https://NAZWA_UZYTKOWNIKA.github.io/indie-stork/`.

Aby publikować w repozytorium typu `NAZWA_UZYTKOWNIKA.github.io`, nazwij repozytorium dokładnie tak, a strona pojawi się pod adresem głównym GitHub Pages.

## Własna domena (opcjonalnie)

Jeśli wykupisz `indiestork.com`, wpisz ją w **Settings → Pages → Custom domain**, a następnie ustaw rekordy DNS zgodnie z [oficjalną instrukcją GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Nie ustawiaj rekordów DNS na podstawie niesprawdzonych adresów IP. Po weryfikacji włącz HTTPS.

## Edycja

- **Treści w obu językach:** `script.js` → obiekt `translations`.
- **Kolory i layout:** `styles.css` → sekcja `:root`.
- **Logo i obrazy:** folder `assets/`.
- **Projekty:** trzy karty w `index.html` w sekcji `#games`.
- **Linki do Steam / Google Play / social mediów:** dodaj dopiero po utworzeniu prawdziwych profili.
- **E-mail:** na stronie nie ma wymyślonego adresu. Dodaj własny, gdy go uruchomisz.

## Informacje o projektach

Runeshatter, Project Farm i Boardgame Designer Tycoon są oznaczone jako **w produkcji**, bez niepotwierdzonych dat premier. Wizualizacje Project Farm i Boardgame Designer Tycoon są dekoracyjnymi kompozycjami CSS, a grafika Runeshatter pochodzi z poprzednio przygotowanego pakietu koncepcyjnego.

## Uwaga

Pliki logo są rastrowymi wersjami zaakceptowanego kierunku graficznego, nie ręcznie przerysowanymi plikami wektorowymi.


## Update
- The Runeshatter section now uses the user-provided key art as the main game presentation image.
