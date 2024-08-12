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


