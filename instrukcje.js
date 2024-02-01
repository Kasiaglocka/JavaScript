const plec = "kobieta"; //mężczyzna, kobieta albo robot
const wiek = 35;
const zwierzeta = "kot";

if(plec == "kobieta"){
    console.log("Hej! wiem, że jesteś kobietą!")
} else if(plec == "robot"){
    console.log("Hej! Wiem, że jesteś robotem!")
}else {
    console.log("Hej! Wiem, że jesteś mężczyzną")
}

//Wiek > 30 i osoba będzie posiadała zwierzę- pies
if(wiek > 30 && zwierzeta == "pies"){
    console.log("Warunek został spełniony")
} else{
    console.log("Warunek nie został spełniony")
}

//Wiek > 30 lub osoba będzie posiadała zwierzę- pies
if(wiek > 30 ||zwierzeta == "pies" ){
    console.log("Warunek został spełniony")
} else{
    console.log("Warunek nie został spełniony")
}