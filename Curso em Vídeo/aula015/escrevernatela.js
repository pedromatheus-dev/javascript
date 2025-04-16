let numeros = [-5, 4, 8, 9, 15, 22, 13, 0, 13]

for (var i = 0; i < numeros.length; i++){
    console.log(`O número que está na posição ${i} é o ${numeros[i]}`)
}

for (let pos in numeros){
    console.log(`O número que está na posição ${pos} é o ${numeros[pos]}`)
}