var studenti = [

    { // questo è il primo oggetto dell'array a posizione 0
        'nome': 'carmine',
        'cognome': 'pepi',
        'eta': 31,
    },

    { // questo è il secondo oggetto dell'array a posizione 1
        'nome': 'rino',
        'cognome': 'pape',
        'eta': 16,
    }
];

//creo una variabile dove inserire la lettera casuale
var lettera_casuale_alfabeto = '';
//creo una variabile con le lettere del alfabeto
var alfabeto = "abcdefghijklmnopqrstuvwxyz";

while (lettera_casuale_alfabeto.length < 1) {
    lettera_casuale_alfabeto += alfabeto[Math.floor(Math.random() * alfabeto.length)];
}
console.log(lettera_casuale_alfabeto);

//creo la copia dell array
var nuovo_array_studenti = new Object(studenti);

nuovo_array_studenti.forEach(ele => ele.position = lettera_casuale_alfabeto);

console.log(nuovo_array_studenti)