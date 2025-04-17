// Parâmetros REST

function soma(...valores){
    let soma = 0
    for(num of valores){
        soma += num
    }
    return soma
}

console.log(soma(1,2,3,4,5))