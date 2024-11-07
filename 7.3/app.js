
let getal = 0;
let getalp = document.getElementById("waarde")
 
function optellengetal()
{
    if (getal >= 10) {
    getal = 0;
    }
 
    else {
        getal++;
 
    }
    getalp.innerHTML = getal.toString()
}
has context menu