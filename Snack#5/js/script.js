// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

var arrayVuoto = [];


for (i=0; i<6; i++) {
    var numeroScelto = parseInt(prompt("Inserisci un numero, Bestia!"));
    if (isOdd (numeroScelto)) {
        
        arrayVuoto.push(numeroScelto)
    }
}
console.log(arrayVuoto);


// FUNZIONE

function isOdd (number) {
    var odd = number;
    if (odd % 2 == 1) {
        
        return odd;
    }
}