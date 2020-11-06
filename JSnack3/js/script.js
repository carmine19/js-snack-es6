const studenti = [

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
let lettera_casuale_alfabeto = '';
//creo una variabile con le lettere del alfabeto

let letteraCasuale = () => {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";

    while (lettera_casuale_alfabeto.length < 1) {
        lettera_casuale_alfabeto += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }

    return lettera_casuale_alfabeto
}

console.log(letteraCasuale())

//creo la copia dell array e mappo il primo in modo da poter recuperare gli elementi ed aggiungerci con una nuoova variabile la position
const nuovo_array_studenti = studenti.map((ele) => {

    const copia_studenti = {
        ...ele,
        position: lettera_casuale_alfabeto,
    };

    return copia_studenti;

})




//array copia
console.log(nuovo_array_studenti)

//array originale
console.log(studenti)


