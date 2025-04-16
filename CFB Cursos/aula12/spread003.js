// Operador Spread


const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 4, 8, 9]

console.log(soma(...valores))

