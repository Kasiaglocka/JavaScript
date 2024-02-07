const imiona = ["Alicja", "Tomasz", "Agnieszka" , "Beata", "Rafał", "Klaudiusz"];
const liczby = [24, 63, 41, 42, 68, 85];
let dziewczyny = [];
let chłopcy = [];
//Wykorzystanie metody map w praktyce
//liczby.map(liczba => {
    //console.log(liczba);
//})

//liczby.map((liczba, index) => {
    //if(liczba > 41) {
      //  console.log(`Liczba ${liczba} jest większa od 41` )
    //} else {
    //console.log(`Liczba ${liczba} jest mniejsza bądź równa 41`)
    //}

    //console.log(`${liczba} kryje się pod indeksem - ${index}`)
//})

imiona.map(imie => {
    if(imie[imie.length-1] == 'a'){
        dziewczyny.push(imie)
    } else chłopcy.push(imie)
})

console.log(dziewczyny)
console.log(chłopcy)