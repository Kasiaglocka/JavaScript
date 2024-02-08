//Pierwszy sposób pobierania elementów - querySelector (uniwersalna metoda)
const h2Band = document.querySelector("div#band h2.w3-wide");
const bandBox = document.querySelector("div#band");
const snapchatIcon = document.querySelector("footer i:nth-child(3)");
const div = document.querySelector("div");
console.log(h2Band);
console.log(bandBox);
console.log(snapchatIcon);

//Drugi sposób pobierania elementów- querySelectorAll
const div2 = document.querySelectorAll("div");

console.log(div);
console.log(div2);

//Trzeci sposób pobierania elementów - getElementByClassName
const specialBtn = document.getElementsByClassName("special");

console.log(specialBtn);

//Czwarty sposób pobierania elementów - getElementById
const navDemoElement = document.getElementById("navDemo");
console.log(navDemoElement);

//Piąty sposób pobierania elementów - getElementByTagName
const imgElement = document.getElementsByTagName("img");
console.log(imgElement);