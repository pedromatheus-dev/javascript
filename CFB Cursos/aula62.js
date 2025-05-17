class Carro{
    constructor(nome, portas, placa){
        this.nome = nome
        this.placa = placa
        this.portas = portas
        this.ligado = false
        this.cor = undefined
        this.kmRodados = 0
    }
    setCor = (cor) => this.cor = cor
    ligar = () => this.ligado = true
    desligar = () => this.ligado = false
    andar = (km) => this.kmRodados += km
}

class Militar extends Carro{
    constructor(nome, portas, placa, municao, blindagem){
        super(nome, portas, placa)
        this.municao = municao
        this.blindagem = blindagem
    }
    atirar = () => this.municao--
    sofreuDano = () => this.blindagem--
}

const carroCivil = new Carro("Civic", 4, "NQU-9A33")
const carroMilitar = new Militar("Tanque", 1, "AAA-0000", 50, 100)

carroCivil.setCor("Preto")
carroMilitar.setCor("Verde")

carroCivil.ligar()
carroCivil.andar(10)

carroMilitar.ligar()
carroMilitar.andar(45)

let i = 0
while (i < 3){
    carroMilitar.sofreuDano()
    i++
}

let j = 0
while (j < 5){
    carroMilitar.atirar()
    j++
}

carroCivil.andar(20)

console.log("------Carro Civil------")
console.log(carroCivil.nome)
console.log(carroCivil.cor)
console.log(carroCivil.placa)
console.log(carroCivil.ligado)
console.log(carroCivil.kmRodados)
console.log(carroCivil.portas)
console.log("------Carro Militar------")
console.log(carroMilitar.nome)
console.log(carroMilitar.cor)
console.log(carroMilitar.placa)
console.log(carroMilitar.ligado)
console.log(carroMilitar.kmRodados)
console.log(carroMilitar.portas)
console.log(carroMilitar.municao)
console.log(carroMilitar.blindagem)
