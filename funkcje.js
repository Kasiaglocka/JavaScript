//Pierwszy sposób
function wyswietlTekst() {
    console.log("Przykładowy tekst z funkcji")
}
wyswietlTekst();

//Drugi sposób
const wyswietlTekst2 = function(){
    console.log("Przykładowy tekst z funkcji 2")
}

wyswietlTekst2();

//Trzeci sposób 
const wyswietlTekst3 =() => {
    console.log("Przykładowy tekst z funkcji 3")
}

wyswietlTekst3();


const imie = "Oliwia";
const wiek = 37;
const zwierze = "kot";

function zwrocTekst() {
    if(imie == "Oliwia") {
        console.log("Tak, imię to Oliwia")
    } else {
        console.log("Dostęp zabroniony!")
    }
}

zwrocTekst();

//Parametry w funkcji
//let pierwszaLiczba = 1;
//let drugaLiczba = 2;
//let suma; 

//function dodawanieLiczb() {
    //suma = pierwszaLiczba + drugaLiczba;
//}

//dodawanieLiczb();

//console.log(suma);

let wynik;

function dodawanieLiczb(pierwsza, druga, imie) {
   console.log("wynik: " + imie + " ma obecnie " + Number(pierwsza + druga) + " lat")
   console.log("TEST")
   return `Wynik: ${imie} ma obecnie ${Number(pierwsza + druga)} lat`
}

wynik = dodawanieLiczb(49, 18, "Rafał"); 

console.log(wynik);

if(dodawanieLiczb(49, 18, "Rafał")) {
    console.log("Wartość większa niż 60")
}

function odejmowanieLiczb(pierwszaLiczba, drugaLiczba) {
    return pierwszaLiczba - drugaLiczba
}

function dodawanieLiczb(pierwsza, druga) {
    const wynikOdejmowania = odejmowanieLiczb(7, 3);
    return pierwsza + druga + wynikOdejmowania;
}
console.log(dodawanieLiczb(100,200))