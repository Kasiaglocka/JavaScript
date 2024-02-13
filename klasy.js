const boxBand = document.querySelector("div#band");

const p = document.createElement("p");
const link = document.createElement("a");

p.innerText = "Nowy super paragraf!";
link.innerText = "Przekierowanie do Google.com";

p.classList.add("active");
p.classList.add("active2");
p.classList.remove("active");

link.setAttribute("href", "https://google.com");
link.removeAttribute("href");

link.id = "super-link"

boxBand.appendChild(p);
boxBand.appendChild(link);















