// Funções anônimas e Construtor

let f1 = function(v1, v2){
    let soma = v1 + v2
    return soma
}

let f2 = new Function("v1", "v2", "return v1 + v2")

console.log(f1(4, 6))
console.log(f2(4, 6))