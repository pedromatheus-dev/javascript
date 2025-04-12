let numeros = [-5, 4, 8, 9, 15, 22, 13, 0, 13]

console.log(numeros)
numeros.sort((a, b) => a - b)
console.log("Vetor ordenado:")
console.log(numeros)
numeros.push(6)
console.log(`O vetor tem ${numeros.length} números`)
console.log(`O primeiro valor do vetor é ${numeros[0]}`)

let procurar = 7
let pos = numeros.indexOf(procurar)
if (pos == -1){
    console.log(`Valor ${procurar} não foi encontrado`)
}else{
    console.log(`O número ${pos} está na posição ${numeros.indexOf(pos)}`)
}