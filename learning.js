console.log('KOMENTARZE:');

// Zwykły komentarz jednolinijkowy

// TODO:  komentarz jednolinijkowy z opisem co nalezy zrobic - co mozna zrobic, co warto poprawic etc.

/*
    komentarz wielolinikowy - blokowy
*/

// ! komenatarz z błedami krytycznymi lub elementami do refaktoryzacji pilnej

console.log('------------------------------------------------------------------------------------------');
console.log('RODZAJE WYWOŁAŃ KONSOLI - do podglądu wyników, wartości zmiennych, co kiedy się wykonuje - to stosujemy tylko gdy potrzebujemy sobie podejrzec dane');
console.error('Czerwony error w konsoli do oznaczania błędów, informacji o tym ze coś sie nie udalo, obsluga bledow');
console.table('Do prezentacji tabelkowej obiektów i array', [1, 2, 3, 4]);

//! ZMIENNE I STAŁE:

var zmienna_1; /* jest hoistowany, nie ma zasięgu blokowego - do zmiennej mamy dostęp wszędzie w pliku, zas do wartości po jej deklaracji. W dowolnym
                miejscu mogę nadpisać wartość, zmienić typ, powoduje problem ze wskaznikami, ktore wskazuja na wartosc.
*/

let zmienna_2; /*
    zmienna, nie musi miec zadeklarowanej wartosci podczas inicjacji. Jest hoistowana i pod tym katem dziala jak const. Mozesz nadpisac wartosc i zmienic typ
    */

function getName(user = 'Gnom') { //przykładowa funkcja zwracajaca imie usera na podstawie fikcyjnego propsa user
    let userWelcome; //undefined

    if (user === 'Bartuś') {
        userWelcome = 'Bartuś';

    } else if (user === 'Gnom') {
        userWelcome = 'Gnom';
    }

    console.log(`Moje imie to: ${userWelcome}`); //zastosowanie symbolu - template literals / template strings - kastowanie to stringa dowolnie innej zmiennej
    return userWelcome;
}

getName('Mieczyslaw'); //zwroci undefined

const zmienna_3 = ''; /* stała dla wartości prostych i złozonych - nie mozna zmieniac typu, ale mozna zmieniac zawartosc dla typow złozonych,
ale nie same typy. Ma zasięg blokowy (bracketów czyli nazwiasow klamrowych {}). Jest hoistowany czyli kompilator wyciaga stala do gory i alokuje pamiec,
ale nie mozesz jej wywolac ani uzywac przed deklaracja. Const wymaga od razu deklaracji typu czyli wartosci. Uzywa sie wtedy, gdy wiesz, ze wartosc lub typ
sie nie zmienia
*/

//! TYPY DANYCH:

//Typy proste:
const boolean = true; //true lub false;
const string = 'tekst dowolny'; //tekst;
const number = 1.22323; //cyfry - brak limitu;
const Null = null; //element istnieje, ale nie ma wartości (pusta rolka papieru toaletowego)
const Undefined = undefined; //element nieznanego typu (brak papieru, brak rolki)
const Symbol = Symbol; //zawiera tablicę symboli zarezerwowanych dla danego języka programowania - $

//Typy złozone:
const array = [1, [], 'trzy', 4, null, {}, [1, 2, 3]]; //tablica, moze zawierac elementy roznego typu, moze byc wielopozioma array[2]. Po tablicy poruszamy się uzywajac [] i pozycji elementu liczonej od zera
const object = {
    name: 'Pawel',
    surname: 'Bambus',
    address: [
        {
            street: 'Bambusowa',
            number: 5
        }
    ]
}; //wszystko w JS jest obiektem, obiekt zawiera zawsze parę klucz - wartość. Wartości mogą być róznego typu i wielopoziomowe. Po kluczach obiektu poruszamy się z kropeczkami

console.log('Chce się dostać do object i do klucza street: ', object.address[0].street);


const set = new Set([1, 1, 2]); //ECMASCRIPT 2015 (6) - tablica [], która zawiera tylko unikatowe wartości typów prostych i złozonych tylko na jednej głebokosci
// Teoretycznie w tablicy mamy teraz - [1,1,2], ale to SET!!!
//WYNIK set = [1,2];

const testowa_tablica = [1, 1, 2, 3];
const testowa_tablica_w_tablicy = [[1, 1, 2, 3]];
const unikalna_tablica = new Set(testowa_tablica); // [1,2,3]
const unikalna_tablica_bez_tablicy = new Set(...testowa_tablica_w_tablicy); // [1, 2, 3] - destrukturyzacja Operator SPREAD

const map = new Map([
    { name: 'Remciu'},
    { 5: 'Neśku'},
]); // tablica z obiektami unikalnymi (jeden poziom), gdzie kluczem moze byc element dowolnego typu

//! FUNKCJE - funkcje zawsze robia tylko jedna rzecz

//! FUNKCJA ZWYKLA:

function mojaFunkcja() { // zwykla funkcja - musi posiadac nazwe, słówko kluczowe this wskazuje na element, który funkcję wywołuje.
    const name = 'Piotr';
    const surname = 'Bambusowy';

    // return name + ' ' + surname
    return `${name} ${surname}`;    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcja(); // wywołanie zwykłej funkcji

//! FUNKCJA ZWYKLA Z PARAMETRAMI:

function mojaFunkcjaZParametrami(name = 'Piotr', surname = 'Bambusowy') {
    return `${name} ${surname}`;    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcjaZParametrami(); // Piotr Bambusowy
mojaFunkcjaZParametrami('Freya', 'Biegajaca'); // Freya Biegajaca

//! FUNKCJA ZWYKLA Z FAIL FAST:

function mojaFunkcjaZFailFast(name, surname) {
    if (!name && !surname) { // warunek, sprawdzajacy czy name i surname jest - jesli one nie przyjda, to kompilator wejdzie do tego ifa i wyjdzie z funkcji po return
        return;
    }

    return `${name} ${surname}`;    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcjaZFailFast(); // nic nie zostanie zwrocone, ale funkcja sie wykona - nie wywali kodu i produkcji
mojaFunkcjaZFailFast('Freya', 'Biegajaca'); // Freya Biegajaca

//! FUNKCJA Z ZASTOSOWANIEM OPTIONAL CHAINING:

function funkcjaZwracajacaObiekt(name, surname) {
    if (!name || !surname) { // warunek, sprawdzajacy czy name i surname jest - jesli one nie przyjda, to kompilator wejdzie do tego ifa i wyjdzie z funkcji po return
        return {};
    }

    return {name: name, surname: surname};    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

funkcjaZwracajacaObiekt(); // {}, bo wywołalismy funkcje bez zadnych parametrow - patrz linia 134;
const result = funkcjaZwracajacaObiekt(); //result to {}
result.name // w tym momencie poniewaz funkcja zwrocila pusty obiekt, to result nie ma zadnych kluczy i mamy CRASH APLIKACJI
result?.name // TAK ZAWSZE POWINNISMY ZAPISYWAC, BO TO ZWROCI PUSTY OBIEKT A JAK NAME BEDZIE DOSTEPNY TO ZWROCI NAME

//! FUNKCJA STRZALKOWA:

const funkcjaStrzalkowa = (name = 'Piotr', surname = 'Bambusowy') => { // funkcja strzalkowa od ECMASCRIPT 2015 (6). Rózni się czym jest slowo kluczowe this dla tej funkcji. This wskazuje na obiekt, który zdefiniowal funkcje. Wnetrze funkcji dokladnie takie same jak w zwyklych funkcjach. Dokladnie tak samo z parametrami.
    return <span style={{ fontSize: '16px', color: 'red', maxWidth: '100%' }}>{name} {surname}</span>
};

funkcjaStrzalkowa(); //zwroci <span>Piotr Bambusowy</span>

<h1>{funkcjaStrzalkowa()}</h1> // zwroci <h1><span>Piotr Bambusowy</span></h1>

//! IMPORTY ORAZ EXPORTY:

export function mojaFunkcjaExportowana() {}; // exportujemy te funkcje zwykla z pliku learning.js
export const mojaFunkcjaStrzalkowaExportowana = () => {}; // exportujemy te funkcje strzalkowa z pliku learning.js

function mojaFunkcjaExportowanaNaDole() {}; // exportujemy te funkcje zwykla z pliku learning.js
const mojaFunkcjaStrzalkowaExportowanaNaDole = () => {}; // exportujemy te funkcje strzalkowa z pliku learning.js

export { mojaFunkcjaExportowanaNaDole, mojaFunkcjaStrzalkowaExportowanaNaDole }; // jezeli w pliku jest bardzo duzo funkcji to exportujemy je tak.

function mojaFunkcjaExportowanaNaDoleZwykla() {}; // exportujemy te funkcje zwykla z pliku learning.js
const mojaFunkcjaStrzalkowaExportowanaNaDoleDefaultowa = () => {}; // exportujemy te funkcje strzalkowa z pliku learning.js

// export { mojaFunkcjaExportowanaNaDole, mojaFunkcjaStrzalkowaExportowanaNaDole as default }; // jezeli mamy rozne elementy, ktore musza byc i default i zwykle

function mojaFunkcjaExportowanaDefaultowo() {};
export default mojaFunkcjaExportowanaDefaultowo; //taka forma exportow dobra do komponentow i modulow

// TUTAJ JEST INNY PLIK JAVASCRIPT: dog.js - symulacja

import { mojaFunkcjaExportowana, mojaFunkcjaStrzalkowaExportowana } from './learning.js'; // importujemy zawsze z nawiasami klamrowymi gdy export jest zwykly
import mojaFunkcjaExportowanaDefaultowo from './learning.js';

//! OPERATORY:

const a = 1;
const b = 2;
const s = '3';
const subStringA = 'Freya';
const subStringB = 'a';
const numb1 = 10;
const numb2 = 4;
const numb3 = 3;
const arr = [2];
const obj = { name: 'Freya'};

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
const moduloResult1 = numb1 % numb2 // 10 % 4 to jest inaczej 4 + 4 + 2, czyli wynik 2;
const moduloResult2 = numb1 % numb3 // 10 % 3 to jest inaczej 3 + 3 + 3 + 1, czyli wynik 1;

// OPERATOR PRZYPISANIA:
const writeResult = 15; // pojedynczy znak rowna sie, przypisuje wartosc do zmiennej;

// OPERATOR POROWNANIA:
const check1 = '1';
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
const String1 = ''; // to jest traktowane jak false;
const String2 = 'a psik'; // to jest traktowane jak true;
const Null1 = null; // to jest traktowane jak false;
const Undefined1 = undefined; // to jest traktowane jak false;

// Typy zlozone zawsze sa true;
const Array1 = []; // to jest traktowane jak true;
const Object1 = {}; // to jest traktowane jak true;

// OPERATOR LOGICZNY AND - sprawdza czy elementy oba lub wiecej spelniaja warunek;

const and1 = Number1 && Number2; // to jest false, poniewaz Number1 jest false, bo ma wartosc 0;
const and2 = Number2 && String2; // wynik true;
const and3 = !Number1 && !!Null1 // wynik false;

// OPERATOR LOGICZNY OR - sprawdza czy chociaz jeden element spelnia warunek;

const or1 = Number1 || Number2; // true, poniewaz Number2 jest true;
const or2 = Undefined1 || Null1 || Number1 || !False; // wynik false;
const orCombo3 = Number1 + Number2 && String2 || Null1; // wynik true;

const logicWeakCombo = !!Array1 && !Null1 || String2 && !Number1 || True && !Object1; // wynik true;
const logicEasyCombo = !!'0' && !null && 13.3235 + 23 && 0 / 5 || 9; // wynik true;

//! INSTRUKCJA WARUNKOWA IF - kompilator wchodzi do ifa jezeli warunek jest spelniony

const isRunning = 'running';
const isWalking = 'walking';
const isSitting = 'sitting';
let quest = '';

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
    quest = 'sleeping';
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
    quest = 'sleeping';
}

// Sposob #3 - short IF (Ternary Operator)
quest = isRunning ? //czy isRunning jest true? Jak tak to przypisz do quest wartosc isRunning, a jak nie to sprawdz czy jest isWalking itd.;
            isRunning : isWalking ?
            isWalking : !isRunning && !isWalking && isSitting ?
            isSitting : 'sleeping'

// warunek ? tuWchodzeJakTrue : tuWchodzeJakFalse;

//! INSTRUKCJA SWITCH - jezeli mamy bardzo duzo ifów, to warto rozpatrzyc switch

switch (quest) {
    case isRunning:    // to mozna porownac do if - quest === isRunning;
        quest = isRunning;
        break;
    case isWalking:
        quest = isWalking;
        break;
    case !isRunning && !isWalking && isSitting:
        quest = isSitting;
        break;
    default:
        quest = 'sleeping';
        break;
} // do quest zostanie przypisany 'sleeping';

