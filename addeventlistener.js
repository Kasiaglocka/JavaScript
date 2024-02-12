const h2Band = document.querySelector("div#band h2");
const p = document.querySelector("p.w3-justify");
const buyTicketBtn = document.querySelector("#buy-ticket");
const formContact = document.querySelector("form");
const link = document.querySelector(`div.w3-top div.w3-bar a[href="#contact"]`);
const inputName = ducument.querySelector(`input[name="Name]`);

//Zdarzenie kliknięcie

//h2Band.addEventListener("click", () => {
   // console.log("Kliknęłam w nagłówek!")
//})

function showText() {
    console.log("Kliknięcie w nagłówek!")
}

h2Band.addEventListener("click", showText);

//Słówko kluczowe dis
//p.addEventListener("click", function() {
   // console.log(this)
//})

//p.addEventListener("click", () => {
   // console.log(this)
//})

//Event
//p.addEventListener("click", (e)=> {
   // console.log(e.clientX)
//})
//p.addEventListener("click", e => {
    //if(e.clientX >500) {
      //  console.log("Wartość jest większa niż 500 i wynosi: " + e.clientX)
    //} else {
      //  console.log("Wartość jest mniejsza niż 500 i wynosi: " + e.clientX)
    //}
//})

//Maouseover i mouseout
buyTicketBtn.addEventListener("mouseover",() => {
    console.log("Zadziało się!")
})

buyTicketBtn.addEventListener("mouseout", e => {
    console.log(e)
})

//Prevent Default

formContact.addEventListener("submit", e => {
    e.preventDefault();
    console.log("TEST");
})

link.addEventListener("click", event => {
    event.preventDefault();
})

//Keydown, keyup
inputName.addEventListener("keydown", () =>{
    console.log("Uruchomiono zdarzenie KEYDOWN!!!")
})

inputName.addEventListener("keyup", () => {
    console.log("Uruchomiono zdarzenie KEYUP!!")
})

//Scroll
//window.addEventListener("scroll", () => {
    //console.log("SCROLL!!") 
//})

window.addEventListener("scroll", e => {
    //console.log(window.scrollY)
})

//Wykonanie zdarzenia po wczytaniu się w pełni DOM
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM wczytał się poprawnie!")
})