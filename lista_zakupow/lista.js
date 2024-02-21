var identyfikator = 1


const inputName = document.querySelector("#add_input")

inputName.addEventListener("keydown", (e) =>{
    if (e.key === `Enter`) {
        console.log("Uruchomiono zdarzenie KEYDOWN!!!")
        dodajProduktDoListy();
    } 
    
})



function dodajProduktDoListy() {
    const produkt = document.querySelector("#add_input")
    //const nazwaProduktu = produkt.getAttribute("value")
    const nazwaProduktu = produkt.value
    if (nazwaProduktu != null && nazwaProduktu != "") {
        const nowyProdukt = document.createElement("li")
        nowyProdukt.className = "items"
        nowyProdukt.innerHTML = nazwaProduktu
        nowyProdukt.id = identyfikator
        
        const nowyButton = document.createElement("button")
        nowyButton.className = "del_btn"
        nowyButton.innerHTML = "Usuń"
        nowyButton.value = identyfikator
        identyfikator++
        nowyButton.onclick = function(zdarzenie){
            //console.log(zdarzenie.target.value)
            usunProduktZListy(zdarzenie.target.value)
        }

        nowyProdukt.appendChild(nowyButton);

        const staryUl = document.querySelector("#items_list")

        staryUl.appendChild(nowyProdukt)
        produkt.value = ""
    }
}

function usunProduktZListy(idElementuDoUsuniecia) {
    const naszaLista = document.querySelector("#items_list")
    const elementDoUsuniecia = document.getElementById(idElementuDoUsuniecia)
    naszaLista.removeChild(elementDoUsuniecia)
}
