function fatorial(n){
    if (n == 0 || n == 1){
        return 1
    } else{
        let fat = n * fatorial(n - 1)
        return fat
    }
}

let fat = fatorial(4)
console.log(fat)