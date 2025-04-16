// Bitwise
// & | ^ << >>

let n1 = 34
let n2 = 55
// Retorna 1 se ambos os bits comparados forem 1, caso contrário, retorna 0.
let andBitaBit = n1 & n2 
// Retorna 1 se pelo menos um dos bits comparados for 1, caso contrário, retorna 0.
let orBitaBit = n1 | n2
// Retorna 1 se os bits comparados forem diferentes, e 0 se forem iguais.
let xorBitaBit = n1 ^ n2
// Inverte todos os bits de um operando. (~c == (c + 1) * -1)
let notBitaBit = ~n1
// Desloca os bits de um operando para a esquerda, inserindo zeros no lado direito. É equivalente a multiplicar por 2 elevado ao número de posições deslocadas.
let deslEsquerda = n1 << 1
// Desloca os bits de um operando para a direita, inserindo cópias do bit de sinal no lado esquerdo (para inteiros com sinal)   
let deslDireita = n2 >> 2

console.log(andBitaBit)
console.log(orBitaBit)
console.log(xorBitaBit)
console.log(notBitaBit)
console.log(deslEsquerda)
console.log(deslDireita)
