// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var nameInList = ["Andrea", "Rocco", "Antonio", "Francesca", "Paolo", "Rick"];
console.log(nameInList);
var surnameInList = ["Bale", "Rooney", "Walker", "Garrix", "Block", "Smith"];

// -----------------------------------
// FUNCTION

function list (name,surname) {
    var name = Math.floor(Math.random()* nameInList.length);
    var surname = Math.floor(Math.random()* surnameInList.length);
    nomeCompletoFunzione = nameInList[name] + " " + surnameInList[surname];

    return nomeCompletoFunzione;
}

for (i=0; i<10; i++) {
    var nomeCompleto = list (nameInList, surnameInList);
    console.log("invitato", nomeCompleto);
    document.getElementById("lista").innerHTML+="<li>"+ nomeCompleto +"</li>"
}