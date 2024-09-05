function Animal(familia, reproducao, alimentacao) {
    this.familia = familia;
    this.reproducao = reproducao;
    this.alimentacao = alimentacao; 
}

function Invertebrado(filo, familia, reproducao, alimentacao) {
    this.filo = filo

    Animal.call(this, familia, reproducao, alimentacao)
}

function Vertebrado(filo, familia, alimentacao) {
    this.filo = filo

    Animal.call(this, familia, reproducao = "sexuada", alimentacao)
}

const lesma = new Invertebrado("molusco", "gastropoda", "sexuada", "herbívoro")
const abelha = new Invertebrado("Arthropoda", "Anthophila", "assexuada", "herbívoro")
const aranha = new Invertebrado("Arthropoda", "Chelicerata", "sexuada", "carnívora")

console.log(lesma)
console.log(abelha)
console.log(aranha)

const coala = new Vertebrado("cordados", "Metatheria", "herbívoro")
const leao = new Vertebrado("cordados", "Felidae", "carnívoro")
const rena = new Vertebrado("cordados", "Cervídeos", "herbívoro")

console.log(coala)
console.log(leao)
console.log(rena)