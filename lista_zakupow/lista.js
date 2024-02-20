


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

        const nowyButton = document.createElement("button")
        nowyButton.className = "del_btn"
        nowyButton.innerHTML = "Usuń"

        nowyProdukt.appendChild(nowyButton);

        const staryUl = document.querySelector("#items_list")

        staryUl.appendChild(nowyProdukt)
    }
}

