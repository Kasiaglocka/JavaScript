const produkt = document.querySelector("#add_input")
const nazwaProduktu = produkt.getAttribute("value")
const nowyProdukt = document.createElement("li")
nowyProdukt.className = "items"
nowyProdukt.innerHTML = nazwaProduktu

const nowyButton = document.createElement("button")
nowyButton.className = "del_btn"
nowyButton.innerHTML = "Usuń"

nowyProdukt.appendChild(nowyButton);

const staryUl = document.querySelector("#items_list")

staryUl.appendChild(nowyProdukt)



console.log(produkt.getAttribute("value"))