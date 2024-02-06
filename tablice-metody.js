const tablica = ["Klaudia", 2, 5.35, true, {name: "Tomasz, age: 24"}]
const liczby = [1,6,4,9,2,4];
const imiona = ["Rafał", "Krzyś", "Ola", "Ania"]

//weryfikacja długości tablicy
console.log(tablica.length)
console.log(liczby.length)

//Dodawanie elementów do tablicy na sam koniec
tablica.push("Wojtek");

console.log(tablica);

//Usuwanie elementu z końca tablicy
tablica.pop();
liczby.pop();

console.log(tablica)
console.log(liczby)

//Usuwanie elementu z początku tablicy
tablica.shift();

//console.log(tablica)

//Znajdowanie elementu w tablicy po je
const indexElement = liczby.indexOf(2)
const indexElement2 = tablica.indexOf("Klaudia")
console.log(indexElement);
console.log(indexElement2);

//Usuwanie dowolnego elementu z tablicy
liczby.splice(indexElement, 1 )
console.log(liczby)

//Przekształcenie tablicy na stringa
const string = liczby.join(" ");
console.log(string);
const stringImiona = imiona.join ("-")
console.log(stringImiona)

//Odwrócenie tablicy
imiona.reverse();
console.log(imiona)

//Sortowanie tablicy
imiona.sort();
console.log(imiona)

//Łączenie tablic
const superTablica = liczby.concat(imiona);
console.log(superTablica)
