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

console.log('------------------------------------------------------------------------------------------');
console.log('ZMIENNE I STAŁE:');

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


console.log('------------------------------------------------------------------------------------------');
console.log('TYPY DANYCH:');

console.log(boolean);
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

console.log('------------------------------------------------------------------------------------------');
console.log('FUNKCJE - funkcje zawsze robia tylko jedna rzecz');

console.log('FUNKCJA ZWYKŁA:');

function mojaFunkcja() { // zwykla funkcja - musi posiadac nazwe, słówko kluczowe this wskazuje na element, który funkcję wywołuje.
    const name = 'Piotr';
    const surname = 'Bambusowy';

    // return name + ' ' + surname
    return `${name} ${surname}`;    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcja(); // wywołanie zwykłej funkcji

console.log('------------------------------------------------------------------------------------------');
console.log('FUNKCJA ZWYKŁA Z PARAMETRAMI:');

function mojaFunkcjaZParametrami(name = 'Piotr', surname = 'Bambusowy') {
    return `${name} ${surname}`;    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcjaZParametrami(); // Piotr Bambusowy
mojaFunkcjaZParametrami('Freya', 'Biegajaca'); // Freya Biegajaca

console.log('------------------------------------------------------------------------------------------');
console.log('FUNKCJA ZWYKŁA Z FAIL FAST:');

function mojaFunkcjaZFailFast(name, surname) {
    if (!name && !surname) { // warunek, sprawdzajacy czy name i surname jest - jesli one nie przyjda, to kompilator wejdzie do tego ifa i wyjdzie z funkcji po return
        return;
    }

    return `${name} ${surname}`;    // kazda funkcja powinna cos zwracac - a wiec zawsze potrzebujemy "return". Kod po linijce return nie wykonuje sie nigdy!
}

mojaFunkcjaZFailFast(); // nic nie zostanie zwrocone, ale funkcja sie wykona - nie wywali kodu i produkcji
mojaFunkcjaZFailFast('Freya', 'Biegajaca'); // Freya Biegajaca

console.log('------------------------------------------------------------------------------------------');
console.log('FUNKCJA STRZAŁKOWA:');

const funkcjaStrzalkowa = (name = 'Piotr', surname = 'Bambusowy') => { // funkcja strzalkowa od ECMASCRIPT 2015 (6). Rózni się czym jest slowo kluczowe this dla tej funkcji. This wskazuje na obiekt, który zdefiniowal funkcje. Wnetrze funkcji dokladnie takie same jak w zwyklych funkcjach. Dokladnie tak samo z parametrami.
    return <span style={{ fontSize: '16px', color: 'red', maxWidth: '100%' }}>{name} {surname}</span>
};

funkcjaStrzalkowa(); //zwroci <span>Piotr Bambusowy</span>

<h1>{funkcjaStrzalkowa()}</h1> // zwroci <h1><span>Piotr Bambusowy</span></h1>

console.log('------------------------------------------------------------------------------------------');
console.log('IMPORTY ORAZ EXPORTY:');

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