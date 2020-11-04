
var nomi = ['pippo', 'pluto', 'paperino', 'topolino', 'paperone']
console.log(nomi);

var numero_utente_1 = parseInt(prompt('inserisci il primo numero'));
console.log(numero_utente_1);

var numero_utente_2 = parseInt(prompt('inserisci il secondo numero'));
console.log(numero_utente_2);

var nuovi_nomi = nomi.filter((ele, index) => {
    return numero_utente_1 <= index && numero_utente_2 >= index
})

console.log(nuovi_nomi);
