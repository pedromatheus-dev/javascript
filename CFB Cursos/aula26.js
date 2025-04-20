// Funcões aninhadas

let soma = (...valores) => {
    let somar = val => {
        let soma = 0
        for (elem of val){
            soma += elem
        }
        return soma
    }

    return somar(valores)
}

console.log(soma(14,5,8))