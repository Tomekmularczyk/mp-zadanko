<a href="https://www.loom.com/share/ba2897012d82467aaa227db09ec3c320">
    <p>Gotowe rozwiązanie:</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/ba2897012d82467aaa227db09ec3c320-with-play.gif">
</a>

# Zadanko

### Acceptance criteria:

> Chciałbym abyś stworzył aplikację, która składa się z elementów:
>
> 1. Obrazka :)
> 2. Buttona "Następne"
> 3. Buttona "Zapisz"
> 4. Linka "Zapisane"

Nie dostałem zadnych designow, to zrobie najprosciej jak mozna bez zadnego stylowania.

> Chciałbym żebyś skorzystał z https://api.nasa.gov/ i zrobił aplikację, która po otwarciu prezentuje losowe zdjęcie APOD (Astronomy Picture of the Day).

By pobrać losowe zdjęcie pewnie bede musial wygenerować losową date. Wygląda tez na to, ze będe potrzebował API_KEY by pobrać zdjecie.

> 1. Aplikacja po załadowaniu pokazuje zdjęcie APOD wraz z informacjami o nim (np. z jakiego dnia pochodzi etc.)

Okej, endpoint zwraca jakieś metadata.

> 2. Po kliknięciu następne w miejscu zdjęcia pokazuje się loader i wczytywane jest kolejne zdjęcie APOD .

Dodać loader, im prostszy tym lepszy.

> 3. Kliknięcie zapisz pozwala na dodanie zdjęcia do "ulubionych"

Trzeba bedzie to zapisywać gdzieś np. local storage. Pytanie co zapisywać, raczej NIE chodzi o to by konwertować to zdjęcie do base64 i potem je wczytywać z localstorage.
Bardziej zapisywać jakieś id/date zdjęcia, a później uzywając tej listy wczytać je na stronie.

> 4. Po kliknięciu w zapisane przechodzi do route'a /zapisane, który zawiera galerię zdjęć zapisanych do ulubionych

Czyli będą 2 routy, główny `/` i `/zapisane`. Strona `/zapisane` będzie wczytywała zdjęcia z local storage i robiła po kolei requesty po zdjęcia.
Przy przechodzeniu z jednej na drugą stronę moze to być troche nie optymalne, moge uzyc `swr` biblioteki która cachuje requesty co powinno dać lepszy UX. Łatwy win.

### Wymagania techniczne:

> React, React Router + dowolne libki, które uważasz za słuszne TypeScript

me gusta

> Możesz użyć jakiegoś boilerplate etc., ale postaraj się, żeby projekt był w miarę lekki

Uzyje Create React Appa, jest lekki.

> Rozdzielenie warstwy widoku od warstwy danych/komunikacji API

ok

> Ulubione zapisywane w local storage'u lub jakiejś innej lokalnej formie

local storage brzmi dobrze

> Zdjęcia NIGDY nie mogą się powtarzać, nawet po odświeżeniu strony. Chce zawsze mieć nowe zdjęcie, którego nie widziałem wcześniej.

"którego nie widziałem wcześniej", czyli muszą być dwie listy. Jedna na zapisane, a jedna na wszystkie jakie byly widziane.

Pewnie zanim wczytam zdjecie na glownej stronie bede musial przeleciec po liscie z localstorage i sprawdzic czy juz takiej daty nie bylo.

Co z polem count w query, czy moge go uzyc? chyba nie bardzo bo nie mam pewnosci ze pobrane zdjecie bedzie unikalne.

Jak upewnić sie ze nie wygeneruje daty która nie istnieje np 31 Luty? Najprosciej bedzie ograniczyc sie do 28 dni i do zeszlego roku :P
