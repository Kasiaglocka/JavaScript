//Operator porównania wartości ==
const imie1 = "Alicja";
const imie2 = "alicja";

const wiek1 = 7;
const wiek2 = "7";

console.log(imie1 ==imie2)

//Operator porównania wartości i typu
console.log(imie1 === imie2)
console.log(wiek1 == wiek2)
console.log(wiek1 === wiek2)

//Operator nie równy, różny
const samochod = "Fiat";
console.log(samochod != "Audi")

//Operator większości i mniejszości
const liczba1 = 53;
const liczba2 = 63;

console.log(liczba1 > liczba2)

if(liczba1 == 53) {
    console.log("Jest równa")
} else {
    console.log("Nie jest równa")
}

//Operator trójskładnikowy (?)
liczba1 == 53 ? console.log("Jest równa") : console.log("Nie jest równa")