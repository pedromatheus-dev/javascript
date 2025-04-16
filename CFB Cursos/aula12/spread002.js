// Operador Spread

let jogador1 = {nome: "José", habilidade:5, vida:5, saude:100, idade:15}
let jogador2 = {nome: "Fernando", habilidade:3, vida:2, saude:85, peso:22}
let jogador3 = {...jogador1, ...jogador2}
console.log(jogador3)