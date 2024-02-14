const p = document.querySelector("p.w3-justify");
const h2Band = document.querySelector("div#band h2");
const pWeLoveMusic = document.querySelector("p.w3-opacity");
const img = document.querySelector("img.w3-image");
const inputName = document.querySelector(`input[name="Name]`);

const value = p.innerText;

//console.log(value);
//console.log(h2Band.innerText);
//console.log(pWeLoveMusic.innerText);
//console.log(img.getAttribute("src"));
//console.log(img.style.width)

//Pobieranie tekstów z dynamicznych elementów - input
//console.log(inputName.value)

inputName.addEventListener("keydown", () => {
    console.log(inputName.value)
});