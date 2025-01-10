# poopgame

## Co to za gra?

Gra polega na sprzątaniu "dowodów" dobrego obiadu po naszym czworonogu. Postaraj się uprzątnąć cały pokój, nim będzie za późno.

## Funkcjonalności:

1. Gracz (opiekun):

   - _DONE_ moze poruszac sie po osi X i Y (4 kierunki) po planszy gry.
   - zatrzymując sie na kafelku z odchodami, moze posprzatac.
   - porusza sie wolniej niz czworonog.
   - w przypadku uzbierania pięciu odchodów, woreczek jest pełen i gracz musi udać się do kosza.
   - musi pobrac woreczek po wyniesieniu kupy i zaczynajac gre.
   - moze zebrac pojawiajacy sie smaczek, stopujac na moment robienie kup i dostaje punkty.

2. Pies:

   - _DONE_ porusza się w randomowych kierunkach,
   - _DONE_ nie moze znalezc sie w tej samej kratce co gracz,
   - porusza sie szybciej niz gracz,
   - robi kupe, stajac na czystym polu (3 sek.),
   - jezeli wbiegnie w pole z kupa, roznosi ja na 2 dodatkowe, sasiadujace pola,
   - moze zjesc pojawiajacy sie raz na jakis czas smaczek i wtedy czestotliwosc robienia kup i predkosc poruszania zwieksza się.
   - zatrzymuje swoj kierunek ruchu po 3 sekundach od pojawienia sie smaczka, nastepnie biegnie w jego kierunku.

3. Automat na worki:

   - spawnuje się randomowo na mapie na początku gry,
   - pies nie moze wejść na pole, w którym znajduje się automat,
   - gracz moze wejsc na pole z automatem i uzupełnić liczbę worków do 5 sztuk kazdorazowo,
   - automat jest oznaczony kolorem niebieskim,
   - w momencie gdy player znajdzie sie w tej samej kratce co automat, powinnismy widziec kafelek playera - z-index wiekszy dla playera
   - player moze uzupelnic puste worki do 5 sztuk razem z workami z zapełnioną kupą

4. Psia kupa:

   - spawnuje sie w ostatnim polu, w którym stał pies,
   - zarówno player jak i pies mogą wbiec w to pole,
   - zarówno pies jak i player mają większy z-index niz pole z kupą,
   - po wejściu playera na to pole, uruchamia się skrypt, który po 2 sekundach stania w tym polu usuwa kupę całkowicie i zuzywa worek,
   - jeśli player wejdzie i wyjdzie z kratki z kupą, roznosi ją na kolejną kratkę,
   - jeśli pies wejdzie w kratkę z kupą, roznosi ją na następne 3 kratki.
   - w przypadku zjedzenia niedobrego smaczka, piec odpala tryb showtime, w którym sra przez kilka sekund wszędzie gdzie pobiegnie

5. Kosz:

   - pojawia się w randomowym miejscu na początku gry,
   - w to pole moze wbiec tylko player,
   - jeśli player posiada worki z zebraną kupą, moze je tutaj wyrzucic, zwalniając miejsce na dobor nowych worków,
   - wyrzucenie worków z kupą daje punkty - im więcej naraz wyrzucimy worków z kupą tym większy mnoznik punktowy otrzymujemy

6. Warunki zakonczenia gry:

   - kupy znajduja sie powyzej 50% pomieszczenia - wtedy pojawia sie kobieta i pojawia sie score / game over.
   - gracz pokonuje 1000 punktow score, wtedy pojawia sie kobieta zadowolona, pojawia sie score / game over.
   - zlapanie psa na smycz - smycz pojawia sie powyzej 666 punktow. Do przemyslenia.

7. Środowisko:

   - rózne powierzchnie w domu, powoduja inny czas zbierania odchodow,
   - automat z workami na kupy, pies, kosz i elementy wnetrza domu pojawiaja sie losowo

8. UI:

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
