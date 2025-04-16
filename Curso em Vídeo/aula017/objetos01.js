let amigo = {
    nome: "José",
    idade: 15,
    sexo: "M",
    peso: 85.4,
    engordar(p = 0) {
        return this.peso += p
    }
}

console.log(amigo.sexo)
console.log(amigo.engordar(2))

