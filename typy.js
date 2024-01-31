//typ liczbowy
const liczba = 24;
const liczba2 = 28.34;

console.log(liczba);
console.log(liczba2);

//typ tekstowy (string)
const pierwszeImie = "Ewelina";
const zwierze = "kot";

console.log(pierwszeImie + zwierze);
console.log(pierwszeImie + " ma nowe zwierzę, którym jest " + zwierze);

//typ logiczny
const kobieta = false;
const mezczyzna = true;

console.log(kobieta);
console.log(typeof(kobieta));

//typ null
const kolor = null;

console.log(kolor);

let imiePsa;

console.log(imiePsa);

//typ tablice
const przykladowaTablica = ["Alicja", "Tomasz", "Bartosz"];

console.log(przykladowaTablica[2]);

//typ obiekt
const osoba = {
    imie: "Tomasz",
    wiek: 39,
    kolorOczu: "brazowy",
    plec: "mężczyzna"
}

console.log(osoba.wiek);


//zabawa z typami danych
console.log(pierwszeImie.length);
console.log(osoba.plec.length) // mierzenie długości danego typu danych
console.log(przykladowaTablica[2].toUpperCase()) //przekształca string na duże litery
console.log(przykladowaTablica[2].toLowerCase())//przekształca string na małe litery

const wynikDodawania = liczba + zwierze;

console.log(liczba2.toFixed(0)); //zaokrągla wartość do określonych miejsc po przecinku

console.log(typeof(String(liczba)))
