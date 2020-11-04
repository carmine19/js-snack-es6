
let bici = [
    {
        nome : 'corsa',
        peso : '5'
    },
    {
        nome : 'lenta',
        peso : '15'
    },
    {
        nome : 'media',
        peso : '10'
    }
]

let bici_leggera = bici[0]


bici.forEach((ele) => {

    if(ele.peso < bici_leggera.peso) {
        bici_leggera = ele;
    }

    console.log(bici_leggera);

    const {peso, nome} = bici_leggera;

    console.log(`la bici con peso minore è ${bici_leggera.nome}`);

})

