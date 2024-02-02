const stanSwiatla = false; //true /false

switch(stanSwiatla) {
    case true:
        console.log("Światło zostało włączone")
        break;
    case false:
        console.log("Światło zostało wyłączone")
        break;
    default:
        console.log("Obecnie występuje awaria!")
}

const imie = "Kamila";

switch(imie) {
    case "Kamila":
        console.log("Imię to " + imie)
        break;
    default:
        console.log("Takiego imienia nie mamy w bazie")
}