// Arrow function

let soma1 = (n1, n2) => {
    return n1 + n2
}

let soma2 = (n1, n2) => n1 + n2

let dobro = n => n*2

let cubo = n => n**3

let parOuImpar = n => n % 2 ? "Impar" : "Par" // Exemplo meu

console.log(soma1(4, 7))
console.log(soma2(3, 9))
console.log(dobro(6))
console.log(cubo(4))
console.log(parOuImpar(16))