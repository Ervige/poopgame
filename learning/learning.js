console.log("KOMENTARZE:");

// Zwykły komentarz jednolinijkowy

// TODO:  komentarz jednolinijkowy z opisem co nalezy zrobic - co mozna zrobic, co warto poprawic etc.

/*
    komentarz wielolinikowy - blokowy
*/

// ! komenatarz z błedami krytycznymi lub elementami do refaktoryzacji pilnej

console.log(
  "------------------------------------------------------------------------------------------"
);
console.log(
  "RODZAJE WYWOŁAŃ KONSOLI - do podglądu wyników, wartości zmiennych, co kiedy się wykonuje - to stosujemy tylko gdy potrzebujemy sobie podejrzec dane"
);
console.error(
  "Czerwony error w konsoli do oznaczania błędów, informacji o tym ze coś sie nie udalo, obsluga bledow"
);
console.table("Do prezentacji tabelkowej obiektów i array", [1, 2, 3, 4]);

//! ZMIENNE I STAŁE:

var zmienna_1; /* jest hoistowany, nie ma zasięgu blokowego - do zmiennej mamy dostęp wszędzie w pliku, zas do wartości po jej deklaracji. W dowolnym
                miejscu mogę nadpisać wartość, zmienić typ, powoduje problem ze wskaznikami, ktore wskazuja na wartosc.
*/

let zmienna_2; /*
    zmienna, nie musi miec zadeklarowanej wartosci podczas inicjacji. Jest hoistowana i pod tym katem dziala jak const. Mozesz nadpisac wartosc i zmienic typ
    */

function getName(user = "Gnom") {
  //przykładowa funkcja zwracajaca imie usera na podstawie fikcyjnego propsa user
  let userWelcome; //undefined

  if (user === "Bartuś") {
    userWelcome = "Bartuś";
  } else if (user === "Gnom") {
    userWelcome = "Gnom";
  }

  console.log(`Moje imie to: ${userWelcome}`); //zastosowanie symbolu - template literals / template strings - kastowanie to stringa dowolnie innej zmiennej
  return userWelcome;
}

getName("Mieczyslaw"); //zwroci undefined

const zmienna_3 =
  ""; /* stała dla wartości prostych i złozonych - nie mozna zmieniac typu, ale mozna zmieniac zawartosc dla typow złozonych,
ale nie same typy. Ma zasięg blokowy (bracketów czyli nazwiasow klamrowych {}). Jest hoistowany czyli kompilator wyciaga stala do gory i alokuje pamiec,
ale nie mozesz jej wywolac ani uzywac przed deklaracja. Const wymaga od razu deklaracji typu czyli wartosci. Uzywa sie wtedy, gdy wiesz, ze wartosc lub typ
sie nie zmienia
*/

//! TYPY DANYCH:

//Typy proste:
const boolean = true; //true lub false;
const string = "tekst dowolny"; //tekst;
const number = 1.22323; //cyfry - brak limitu;
const Null = null; //element istnieje, ale nie ma wartości (pusta rolka papieru toaletowego)
const Undefined = undefined; //element nieznanego typu (brak papieru, brak rolki)
const Symbol = Symbol; //zawiera tablicę symboli zarezerwowanych dla danego języka programowania - $

//Typy złozone:
const array = [1, [], "trzy", 4, null, {}, [1, 2, 3]]; //tablica, moze zawierac elementy roznego typu, moze byc wielopozioma array[2]. Po tablicy poruszamy się uzywajac [] i pozycji elementu liczonej od zera
const object = {
  name: "Pawel",
  surname: "Bambus",
  address: [
    {
      street: "Bambusowa",
      number: 5,
    },
  ],
}; //wszystko w JS jest obiektem, obiekt zawiera zawsze parę klucz - wartość. Wartości mogą być róznego typu i wielopoziomowe. Po kluczach obiektu poruszamy się z kropeczkami

console.log(
  "Chce się dostać do object i do klucza street: ",
  object.address[0].street
);

const set = new Set([1, 1, 2]); //ECMASCRIPT 2015 (6) - tablica [], która zawiera tylko unikatowe wartości typów prostych i złozonych tylko na jednej głebokosci
// Teoretycznie w tablicy mamy teraz - [1,1,2], ale to SET!!!
//WYNIK set = [1,2];

const testowa_tablica = [1, 1, 2, 3];
const testowa_tablica_w_tablicy = [[1, 1, 2, 3]];
const unikalna_tablica = new Set(testowa_tablica); // [1,2,3]
const unikalna_tablica_bez_tablicy = new Set(...testowa_tablica_w_tablicy); // [1, 2, 3] - destrukturyzacja Operator SPREAD

const map = new Map([{ name: "Remciu" }, { 5: "Neśku" }]); // tablica z obiektami unikalnymi (jeden poziom), gdzie kluczem moze byc element dowolnego typu

//! FUNKCJE - funkcje zawsze robia tylko jedna rzecz (SOLID, DRY, YAGNI, KISS - więcej na końcu dokumentu)

//! FUNKCJA ZWYKLA:

function mojaFunkcja() {
  // zwykla funkcja - musi posiadac nazwe, słówko kluczowe this wskazuje na element, który funkcję wywołuje.
  const name = "Piotr";
  const surname = "Bambusowy";

  // return name + ' ' + surname
  return `${name} ${surname}`; // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcja(); // wywołanie zwykłej funkcji

//! FUNKCJA ZWYKLA Z PARAMETRAMI:

function mojaFunkcjaZParametrami(name = "Piotr", surname = "Bambusowy") {
  return `${name} ${surname}`; // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcjaZParametrami(); // Piotr Bambusowy
mojaFunkcjaZParametrami("Freya", "Biegajaca"); // Freya Biegajaca

//! FUNKCJA ZWYKLA Z FAIL FAST:

function mojaFunkcjaZFailFast(name, surname) {
  if (!name && !surname) {
    // warunek, sprawdzajacy czy name i surname jest - jesli one nie przyjda, to kompilator wejdzie do tego ifa i wyjdzie z funkcji po return
    return;
  }

  return `${name} ${surname}`; // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcjaZFailFast(); // nic nie zostanie zwrocone, ale funkcja sie wykona - nie wywali kodu i produkcji
mojaFunkcjaZFailFast("Freya", "Biegajaca"); // Freya Biegajaca

//! FUNKCJA ZWRACAJĄCA OBIEKT - ABY DOSTAĆ SIĘ DO WARTOŚCI ZWRACANEJ UZYWAJ OPTIONAL CHAINING:

function funkcjaZwracajacaObiekt(name, surname) {
  if (!name || !surname) {
    // warunek, sprawdzajacy czy name i surname jest - jesli one nie przyjda, to kompilator wejdzie do tego ifa i wyjdzie z funkcji po return
    return {};
  }

  return { name: name, surname: surname }; // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

funkcjaZwracajacaObiekt(); // {}, bo wywołalismy funkcje bez zadnych parametrow - patrz linia 134;
const result = funkcjaZwracajacaObiekt(); //result to {}
result.name; // w tym momencie poniewaz funkcja zwrocila pusty obiekt, to result nie ma zadnych kluczy i mamy CRASH APLIKACJI

//! OPTIONAL CHAINING W WYNIKU FUNKCJI - CZYLI JAK SIĘ DOSTAĆ DO WYNIKU FUNKCJI FUNKCJAZWRACAJACAOBIEKT():
result?.name; // TAK ZAWSZE POWINNISMY ZAPISYWAC, BO TO ZWROCI PUSTY OBIEKT A JAK NAME BEDZIE DOSTEPNY TO ZWROCI NAME

//! INNE SPRAWDZENIE CZY KLUCZ NAME ISTNIEJE - ZA POMOCA TYPEOF SPRAWDZAMY TYP ZMIENNEJ LUB FUNKCJI:
if (typeof result === Object) {
  return result?.name;
}

//! FUNKCJA STRZALKOWA:

const funkcjaStrzalkowa = (name = "Piotr", surname = "Bambusowy") => {
  // funkcja strzalkowa od ECMASCRIPT 2015 (6). Rózni się czym jest slowo kluczowe this dla tej funkcji. This wskazuje na obiekt, który zdefiniowal funkcje. Wnetrze funkcji dokladnie takie same jak w zwyklych funkcjach. Dokladnie tak samo z parametrami.
  return (
    <span style={{ fontSize: "16px", color: "red", maxWidth: "100%" }}>
      {name} {surname}
    </span>
  );
};

funkcjaStrzalkowa(); //zwroci <span>Piotr Bambusowy</span>

<h1>{funkcjaStrzalkowa()}</h1>; // zwroci <h1><span>Piotr Bambusowy</span></h1>

//! IMPORTY ORAZ EXPORTY:

export function mojaFunkcjaExportowana() {} // exportujemy te funkcje zwykla z pliku learning.js
export const mojaFunkcjaStrzalkowaExportowana = () => {}; // exportujemy te funkcje strzalkowa z pliku learning.js

function mojaFunkcjaExportowanaNaDole() {} // exportujemy te funkcje zwykla z pliku learning.js
const mojaFunkcjaStrzalkowaExportowanaNaDole = () => {}; // exportujemy te funkcje strzalkowa z pliku learning.js

export { mojaFunkcjaExportowanaNaDole, mojaFunkcjaStrzalkowaExportowanaNaDole }; // jezeli w pliku jest bardzo duzo funkcji to exportujemy je tak.

function mojaFunkcjaExportowanaNaDoleZwykla() {} // exportujemy te funkcje zwykla z pliku learning.js
const mojaFunkcjaStrzalkowaExportowanaNaDoleDefaultowa = () => {}; // exportujemy te funkcje strzalkowa z pliku learning.js

// export { mojaFunkcjaExportowanaNaDole, mojaFunkcjaStrzalkowaExportowanaNaDole as default }; // jezeli mamy rozne elementy, ktore musza byc i default i zwykle

function mojaFunkcjaExportowanaDefaultowo() {}
export default mojaFunkcjaExportowanaDefaultowo; //taka forma exportow dobra do komponentow i modulow

// TUTAJ JEST INNY PLIK JAVASCRIPT: dog.js - symulacja

import {
  mojaFunkcjaExportowana,
  mojaFunkcjaStrzalkowaExportowana,
} from "./learning.js"; // importujemy zawsze z nawiasami klamrowymi gdy export jest zwykly
import mojaFunkcjaExportowanaDefaultowo from "./learning.js";

//! OPERATORY:

const a = 1;
const b = 2;
const s = "3";
const subStringA = "Freya";
const subStringB = "a";
const numb1 = 10;
const numb2 = 4;
const numb3 = 3;
const arr = [2];
const obj = { name: "Freya" };

// OPERATOR DODAWANIA: - dodaje matematycznie typy danych number, ale jak będzie string to go sklei np. a = 2, b = '3', to c = 23;
const addResult = a + b; // wynik 3;
const addResultString = a + s; // wynik 13;
const addResultArray = a + arr; // wynik '12' - poniewaz dokonuje sie konwersja typow i obiekty i tabilce zawsze sa konwertowane do stringa;
const addResultObject = a + obj; // wynik '1[object Object]' - poniewaz po konwersji typow kazdy obiekt jest stringiem z tabilca [object Object];

// OPERATOR ODEJMOWANIA:
const subResult = b - a; // wynik 1;
const subResultOnlyForStrings = subStringA - subStringB; // wynik to NaN czyli Not a Number - oznacza to ze nie mozemy odejmowac niczego innego niz number'

// OPERATOR MNOZENIA:
const multiResult = a * b; // wynik 2 - tylko mnozymy typy number, wszystko inne NaN;

// OPERATOR DZIELENIA:
const divideResult = a / b; // wynik 0.5 - tylko dzielimy typy number, wszystko inne NaN;

// OPERATOR MODULO:
const moduloResult = a % b; // wynik 1 - zwraca resztę brakującą do pełnego wyniku dzielenia;
const moduloResult1 = numb1 % numb2; // 10 % 4 to jest inaczej 4 + 4 + 2, czyli wynik 2;
const moduloResult2 = numb1 % numb3; // 10 % 3 to jest inaczej 3 + 3 + 3 + 1, czyli wynik 1;

// OPERATOR PRZYPISANIA:
const writeResult = 15; // pojedynczy znak rowna sie, przypisuje wartosc do zmiennej;

// OPERATOR POROWNANIA:
const check1 = "1";
const check2 = 1;

const checkResult = check1 == check2; // sprawdza czy wartosci obu zmiennych sa takie same - nie sprawdza typow! Zwroci TRUE;

// OPERATOR POROWNANIA Z TYPAMI:

const checkResultWithTypes = check1 === check2; //sprawdza wartosci i typy. Wiec zwroci FALSE;

//! OPERATORY LOGICZNE:

// OPERATOR NEGACJI - odwraca wartości boolowskie, a kazda wartosc jest rozpatrywana przez komputer jako true lub false:

// Typy proste mają false jesli maja wartosc number - 0, pusty string '', null lub undefined;
const True = true;
const False = !True; // zmienna False będzie false bo negujemy wartosc zmiennej True;
const Number1 = 0; // to jest traktowane jak false;
const Number2 = 1; // to jest traktowane jak true;
const String1 = ""; // to jest traktowane jak false;
const String2 = "a psik"; // to jest traktowane jak true;
const Null1 = null; // to jest traktowane jak false;
const Undefined1 = undefined; // to jest traktowane jak false;

// Typy zlozone zawsze sa true;
const Array1 = []; // to jest traktowane jak true;
const Object1 = {}; // to jest traktowane jak true;

// OPERATOR LOGICZNY AND - sprawdza czy elementy oba lub wiecej spelniaja warunek;

const and1 = Number1 && Number2; // to jest false, poniewaz Number1 jest false, bo ma wartosc 0;
const and2 = Number2 && String2; // wynik true;
const and3 = !Number1 && !!Null1; // wynik false;

// OPERATOR LOGICZNY OR - sprawdza czy chociaz jeden element spelnia warunek;

const or1 = Number1 || Number2; // true, poniewaz Number2 jest true;
const or2 = Undefined1 || Null1 || Number1 || !False; // wynik false;
const orCombo3 = (Number1 + Number2 && String2) || Null1; // wynik true;

const logicWeakCombo =
  (!!Array1 && !Null1) || (String2 && !Number1) || (True && !Object1); // wynik true;
const logicEasyCombo = (!!"0" && !null && 13.3235 + 23 && 0 / 5) || 9; // wynik true;

//! INSTRUKCJA WARUNKOWA IF - kompilator wchodzi do ifa jezeli warunek jest spelniony

const isRunning = "running";
const isWalking = "walking";
const isSitting = "sitting";
let quest = "";

// Sposob #1
if (isRunning) {
  //rob cos jak warunek isRunning jest true;
  quest = isRunning;
} else if (isWalking) {
  //rob cos jak warunek isRunning jest false i isWalking jest true;
  quest = isWalking;
} else if (!isRunning && !isWalking && isSitting) {
  //rob cos jezeli isRunning i isWalking jest false, ale isSitting jest true;
  quest = isSitting;
} else {
  //rob cos jak wszystko bedzie falsem;
  quest = "sleeping";
}

// Sposob #2 - FAIL FAST - w tym wypadku nie jest to dobre rozwiazanie, bo wszystkie ify sa sprawdzane przez kompilator i to dluzej trwa. Uzywaj gdy w ifie jest RETURN;
if (isRunning) {
  quest = isRunning;
}
if (isWalking) {
  quest = isWalking;
}
if (!isRunning && !isWalking && isSitting) {
  quest = isSitting;
}
if (!quest) {
  quest = "sleeping";
}

// Sposob #3 - short IF (Ternary Operator)
quest = isRunning //czy isRunning jest true? Jak tak to przypisz do quest wartosc isRunning, a jak nie to sprawdz czy jest isWalking itd.;
  ? isRunning
  : isWalking
  ? isWalking
  : !isRunning && !isWalking && isSitting
  ? isSitting
  : "sleeping";

// warunek ? tuWchodzeJakTrue : tuWchodzeJakFalse;

//! INSTRUKCJA SWITCH - jezeli mamy bardzo duzo ifów, to warto rozpatrzyc switch

switch (quest) {
  case isRunning: // to mozna porownac do if - quest === isRunning;
    quest = isRunning;
    break;
  case isWalking:
    quest = isWalking;
    break;
  case !isRunning && !isWalking && isSitting:
    quest = isSitting;
    break;
  default:
    quest = "sleeping";
    break;
} // do quest zostanie przypisany 'sleeping';

//! METODY ITEROWANIA PO TABLICACH - METODY ITERACJI DOBIERAMY W ZALEZNOSCI OD TEGO CO POTRZEBUJEMY:

const tab = [1, 2, 3, 4, 5];
const tab2 = [33, 123, 11, 53, 65];

//! PĘTLA FOR (MOŻNA UZYWAC DO DOWOLNEGO CELU NAWET NIE W TABLICACH I OBIEKTACH):

// for (warunekPoczatkowy; warunekZakonczenia; coMaSieDziacPoJednymPrzejsciuPetli) {}

for (let i = 0; i < tab.length; i++) {
  // inkrementacja czyli i = i + 1, a skrocony zapis to i++
  console.log("TAB ITERATOR: ", i); // pierwsze przejście 0, potem 1, 2, 3, 4
  console.log("TAB ELEMENT: ", tab[i], tab2[i]); // pierwsze przejscie 1, 33. Drugie to 2, 123 itd.
}

//! PĘTLA FOR OF:

for (const value of tab) {
  console.log("TAB ELEMENT: ", value); // to sie wywola 5 razy i wypisze elementy tablicy po kolei: 1,2,3,4,5
}

//! PĘTLA WHILE:

let bonus = 1;

while (bonus <= 2) {
  // pętla w ogóle zacznie działac jezeli warunek jest spełniony, pamietaj o zwiekszaniu lub zmniejszaniu warunku czyli inkrementacji i dekrementacji
  console.log("BONUS: ", bonus); // wyswietli 1, 2
  bonus++; // postinkrementacja, JEST KONIECZNA by pętla nie kręciła się w nieskończoność
}

//! PĘTLA DO-WHILE:

do {
  console.log("BONUS: ", bonus); // w petli do-while blok 'do' wykona sie chociaz raz. Wyswietli: 1, 2
  bonus++;
} while (bonus <= 2); // pętla kręci się dopóki warunek jest spełniony

//! METODY Z ECMASCRIPT 2015 (6):

//! METODA TABLICOWA FOREACH:
tab.forEach((value, i, tab) => {
  // forEach ma w funkcji strzałkowej jako parametr 3 elementy - wartosc iterowanego elementu, iterator oraz tablice iterowana.
  console.log("TAB ELEMENT: ", value, i, tab); // pierwsze przejście wyswietli 1 (value 1 elementu) i 1 (iterator), [1,2,3,4,5].
});

// tak zapisujemy forEach jesli nie potrzebujemy iteratora i tablicy
tab.forEach((value) => {});

// forEach - nie zwraca undefined, nie modyfikuje oryginalnej tablicy. Tą metode uzywamy np. gdy trzeba wywolac funkcje na elementach tablicy lub dokonac jakis dzialan bez zmian oryginalnej tablicy

//! METODA TABLICOWA MAP:
const mapResult = tab.map((value) => {
  console.log("TAB ELEMENT: ", value); // zwroci 1,2,3,4,5
  return value + 1;
}); // ale zmienna mapResult zwroci [2,3,4,5,6]

// map - zwraca zawsze nową tablice zawsze tyle samo elementowa, nie modyfikuje oryginalu

//! METODA TABLICOWA FILTER:
tab.filter((value) => {
  //tu musi byc jakis warunek, czyli pewnie if :)
  return value % 2 === 0;
}); // zwroci tablice z dwoma elementami [2,4], jesli zaden warunek nie spelniony to zwraca pusta tablice []

// filter - zwraca nowa tablice elementow, ktore spelniaja warunek. Nigdy nie wieksza niz oryginalna + nie modyfikuje oryginalnej tablicy

//! METODY TABLICOWA REDUCE:
tab.reduce((prev, current, i, array) => {
  // iterujemy po tablicy [1,2,3,4,5]
  console.log("REDUCE: ", prev, current, i, array); // pierwsze przejscie: undefined, 1, 1, [1,2,3,4,5], drugie: 1, 2, 2, [1,2,3,4,5]
  return prev + current; // 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15; Wynik koncowy = 15;
});

/* reduce - nie modyfikuje oryginalnej tablicy, zmniejsza tablice o ilosc elementow na ktorych pracowal czyli o prev i current,
zwraca wynik jakiegos dzialania
*/

//! METODY TABLICOWA SOME - SPRAWDZA CZY PRZYNAJMNIEJ JEDEN ELEMENT SPELNIA WARUNEK:
const some = tab.some((value, i, array) => {
  return value % 2 === 0;
}); // zwraca true, poniewaz value % 2 === 0 jest dla elementow [2,4] - zwraca zawsze booleana

//! METODY TABLICOWA EVERY - SPRAWDZA CZY WSZYSTKIE ELEMENTY SPELNIAJA WARUNEK:
const every = tab.every((value, i, array) => {
  return value % 2 === 0;
}); // zwraca false, poniewaz 1, 3 i 5 nie spelniaja warunku

//! METODA FLAT SPLASZCZAJACA TABLICE:
const strangeArr = [[1, 2, 3, 4, 5]]; // splaszcza, czyli usuwa jedna zewnatrzna tablice i zwraca zawartosc tablicy wewnatrz
strangeArr.flat(); // [1,2,3,4,5]
strangeArr[0]; // tak mozna dostac sie do tablicy wewnatrz, ale nie jest to czesto stosowane

//! METODA FLATMAP SPLASZCZAJACA METODA MAP - POLACZENIE METODY MAP I FLAT:
strangeArr.flatMap((value) => {
  return value + 1; // metoda zwroci nowa tablice splaszczona o jeden poziom: [2,3,4,5,6];
});

//! METODY DODATKOWE - TYLKO INFORMACYJNIE:
tab.find((value) => {}); // zwraca pierwszy element spelniajacy warunek - czyli wartosc;
tab.findIndex((value) => {}); // zwraca index w tablicy pierwszego elementu spelniajacego warunek;

//! METODY ITEROWANIA PO OBIEKTACH - METODY ITERACJI DOBIERAMY W ZALEZNOSCI OD TEGO CO POTRZEBUJEMY:

const object_1 = {
  name: "Uki",
  surname: "Rydzkowaty",
  bornDate: "19.02.1985",
  mentalAge: 78,
};

for (const value in object_1) {
  console.log("OBJECT ELEMENT: ", value); // to sie wywola 4 razy i wypisze elementy tablicy po kolei: name, surname, bornDate, mentalAge (czyli klucze)
  console.log(object_1[value]); // w taki sposob wyciagamy wartosc z obiektu podczas iteracji, czyli Uki, Rydzkowaty, 19.02.1985, 78
  return <span>{object_1[value]}</span>;
}

//! METODY OBIEKTOWE DO TWORZENIA TABLICY Z ELEMENTOW OBIEKTU:

//! OBJECT.KEYS - TABLICA Z KLUCZAMI:
const keys = Object.keys(object_1); // tworzy i zwraca nowa tablice ['name', 'surname', 'bornDate', 'mentalAge']. Nie modyfikuje oryginalu

//! OBJECT.VALUES - TABLICA Z WARTOSCIAMI:
const values = Object.values(object_1); // technicznie dokładnie to samo co keys, ale wartosci to tablica z ['Uki', 'Rydzkowaty', '19.02.1985', 78]

//! OBJECT.ENTRIES - TABLICA Z PARA KLUCZ - WARTOSC:
const entries = Object.entries(object_1); // technicznie dokładnie to samo co metody powyzsze Object.
// Zwraca tablice z: [{ name: 'Uki' }, { surname: 'Rydzkowaty' }, { bornDate: '19.02.1985' }, { mentalAge: 78 }]

//! DOM - CZYLI DOCUMENT OBJECT MODEL - CZYLI REPREZENTACJA ELEMENTOW STRONY W POSTACI DRZEWA ZNACZNIKOW HTML

const htmlFragment = (
  <div className="main">
    <ul className="main__list">
      <li className="main__listElement main__listElement--selected">
        Malteese
      </li>
      <li className="main__listElement">Pug</li>
      <li className="main__listElement">Husky</li>
    </ul>
    <h1 id="main__heading">
      I love all dogs and I hate freaking owners
      <span className="main__iconContainer" data-testid="icon">
        <img className="main__icon" src="" alt="invisible dog" />
      </span>
    </h1>
  </div>
);

//! CHWYTANIE ELEMENTOW HTML:

const htmlCollection_1 = document.getElementsByClassName("main__listElement"); // po klasie, zlapie wszystkie elementy z klasa main_listElement. Zwraca HTMLCollection - to jest tablica i mozemy po niej iterowac
const htmlCollection_2 = document.getElementsByTagName("li"); // po tagu, zlapie wszystkie tagi <li></li> z tym co wsrodku i zwroci tablice HTMLCollection;
document.getElementById("main__heading"); // po id, sluzy tylko do lapania po ID i zwraca 1 element zawsze i pierwszy

// Query Selector przyjmuje SelectorCSS
document.querySelector(".main"); // po klasie - czyli zlapie calego diva z klasa main oraz wszystko co w srodku
document.querySelector("li"); // po tagu - czyli jezeli jest wiele takich samych znacznikow, to zlapie pierwszy czyli ten z Malteese
document.querySelector("#main__heading"); // po id - czyli lapiesz pierwszy element, ktory zawiera wybrane id (h1 w tym przypadku)

const nodeList = document.querySelectorAll("li"); // po tagu, zwroci wszystkie tagi <li></li>. Zwroci tablice NodeList (mozna iterowac tak jak przy HTMLCollection)

//! HTMLCOLLECTION A NODELIST - O CO CHODZI:

// HTMLCollection a NodeList - HTML Collection to zywa (live) lista elementow z DOM, czyli kazda zmiana w DOM jest odzwierciedlona w kolekcji.
// NodeList - zywa (live) lub martwa (statyczna) lista elementow z DOM, nie zmieniaja swoich atrybutow.

// HTMLCollection dostęp do elementow ===> htmlCollection_1[0];
// NodeList dostęp do elementow ===> nodes[0] TOTOTOTOTO

// HTMLCollection - iterowanie, tylko for. Nie obsluguje metod tablicowych.
// NodeList - iterowanie, tylko forEach. Nie obsluguje niczego wiecej, chyba ze przekonwertujemy nodeList na tablice - wtedy wszystkie metody tablicowe

//! KONWERTOWANIE NODELIST NA TABLICE + DESTRUKTURYZACJA (CZYLI OPERATORY REST I SPREAD):

[...nodeList].filter(); // przekonwertowanie NodeList na tablice, czyli kazdy element nodeList jest wyciagany z listy i po kolei tak jak byl wyciagany jest wkladany do tablicy
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [...arr1, ...arr2]; // [1,2,3,4,5] - OPERATOR SPREAD - robia to samo (REST, SPREAD), ale SPREAD wykorzystuje sie w tablicach. Powoduje wyciagniecie elementow z tablicy i przelozenie ich do nowej tablicy
const funk = (a, b, ...props) => {
  calculator(props);
}; // OPERATOR REST - uzywa sie w funkcjach jako ostatni parametr, ma on za zadanie zgrupowac parametry, ktorych nie potrzebujesz

//! ZASADY PROGRAMOWANIA, DOBRE PRAKTYKI:

//! S.O.L.I.D - 5 zasad programowania obiektowego:
console.log(
  "Single Responsibility Principle - jedna klasa (funkcja), komponent robi jedna rzecz, a nie wiele."
);
console.log(
  "Open/Closed Principle - klasa (funkcja) powinna byc otwarta na rozszerzenie, ale zamknieta na modyfikacje."
);
console.log(
  "Liskov Substitution Principle - obiekt klasy moze byc zastapiony obiektem klasy dziedziczacej."
);
console.log(
  "Interface Segregation Principle -  (funkcje) sa lepsze niz jedna ogolna klasa do wszystkiego. Do wszystkiego - do niczego!"
);
console.log(
  "Dependency Inversion Principle - elementy niskiego poziomu (np. div z tekstem) nie powinny zalezec od elementow wysokiego poziomu (cała strona), a odwrotnie."
);

//! D.R.Y - Don't Repeat Yourself
console.log(
  "Nie powtarzaj sie, czyli nie pisz tego samego kodu w wielu miejscach, tylko zrob funkcje i wywoluj ja w wielu miejscach"
);

//! Y.A.G.N.I - You Aren't Gonna Need It
console.log(
  "Nie rob tego, czego nie potrzebujesz, nie dodawaj funkcjonalnosci, ktorej nie potrzebujesz"
);

//! K.I.S.S - Keep It Simple, Stupid
console.log(
  "Zasada mowiaca, ze proste rozwiazania sa lepsze niz skomplikowane"
);
