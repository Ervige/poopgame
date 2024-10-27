# poopgame

## Co to za gra?

Gra polega na sprzątaniu "dowodów" dobrego obiadu po naszym czworonogu. Postaraj się uprzątnąć cały pokój, nim będzie za późno.

## Funkcjonalności:

1. Gracz (opiekun):
   - moze poruszac sie po osi X i Y (4 kierunki) po planszy gry.
   - zatrzymując sie na kafelku z odchodami, moze posprzatac.
   - porusza sie wolniej niz czworonog.
   - w przypadku uzbierania pięciu odchodów, woreczek jest pełen i gracz musi udać się do kosza.
   - musi pobrac woreczek po wyniesieniu kupy i zaczynajac gre.
   - moze zebrac pojawiajacy sie smaczek, stopujac na moment robienie kup i dostaje punkty.
2. Pies:
   - porusza się w randomowych kierunkach,
   - nie moze znalezc sie w tej samej kratce co gracz,
   - porusza sie szybciej niz gracz,
   - robi kupe, stajac na czystym polu (3 sek.),
   - jezeli wbiegnie w pole z kupa, roznosi ja na 2 dodatkowe, sasiadujace pola,
   - moze zjesc pojawiajacy sie raz na jakis czas smaczek i wtedy czestotliwosc robienia kup i predkosc poruszania zwieksza się.
   - zatrzymuje swoj kierunek ruchu po 3 sekundach od pojawienia sie smaczka, nastepnie biegnie w jego kierunku.
3. Warunki zakonczenia gry:
   - kupy znajduja sie powyzej 50% pomieszczenia - wtedy pojawia sie kobieta i pojawia sie score / game over.
   - gracz pokonuje 1000 punktow score, wtedy pojawia sie kobieta zadowolona, pojawia sie score / game over.
   - zlapanie psa na smycz - smycz pojawia sie powyzej 666 punktow. Do przemyslenia.
4. Środowisko:
   - rózne powierzchnie w domu, powoduja inny czas zbierania odchodow,
   - automat z workami na kupy, pies, kosz i elementy wnetrza domu pojawiaja sie losowo
5. UI:
   - interfejs pokazujacy czy mamy worek czy nie,
   - interfejs pokazujacy ile kup mamy w worku,
   - interfejs pokazujacy gdzie jest kosz (pulsujacy),
   - ostrzezenie o epilepsji dla gracza,
   - prezentacja regul przed startem gry (do wylaczenia),
   - dynamiczne oswietlenie tla sugeruje jakies wydarzenie (dodatkowe),
   - pokazujemy aktualny score oraz czas do powrotu wlascicielki (procentowo),
   - informacja, ze gra niedostepna na urzadzenia mobilne (na poczatku)

## Aspekty techniczne:

- plik HTML - z plansza, wystrojem i UI,
- pliki CSS - ze stylami - style główne, style dedykowane,
- pliki JS - plik główny, pliki dedykowane,
