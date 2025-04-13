function parOuImpar(n){
    if (n % 2 == 0){
        return "Par!"
    } else{
        return "Ímpar!"
    }
}

let n = parOuImpar(-1)
console.log(n)