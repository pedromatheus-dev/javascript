// break e continue

let pares = 0
let n = 0

for (let i = n; i < 10; i++){
    if (i % 2 != 0){
        continue
    }
    pares++
}

let m = 0

while(m < 10){
    console.log(m)
    if (m == 7){
        break
    }
    m++
}

console.log(pares)