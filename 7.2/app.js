let product = 100
let budget = prompt ("hoeveel geld heeft u?", 0);
 
let resultaat = document.getElementById ("resultaat");
 
if (budget >= product) {
    resultaat.innerHTML = "u heeft genoeg geld!";
    resultaat.style.color = "green";
}
 
else {
    resultaat.innerHTML = "helaas u heeft te weinig geld!";
    resultaat.style.color = "red";
}