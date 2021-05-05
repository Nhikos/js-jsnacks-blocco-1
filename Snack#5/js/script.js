// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

var emptyArray = [];


for (i=0; i<6; i++) {
    var chosenNumber = parseInt(prompt("enter a number"));
    if (isOdd (chosenNumber)) {
        
        emptyArray.push(chosenNumber)
    }
}
console.log(emptyArray);


// FUNZIONE

function isOdd (number) {
    var odd = number;
    if (odd % 2 == 1) {
        
        return odd;
    }
}