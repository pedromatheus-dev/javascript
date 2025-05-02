// Prática com método filter

const idades = [18, 25, 34, 56, 7, 9, 11, 17, 22, 25, 35]

const maior = idades.filter((idade => idade >= 18)).sort((a, b) => a - b)
const menor = idades.filter((idade => idade < 18)).sort((a, b) => a - b)

console.log(idades)
console.log(maior)
console.log(menor)