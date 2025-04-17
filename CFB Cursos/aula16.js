// for in e for out

let lista = [15, 20, 35, 40, 41, 13]

for (let c = 0; c < lista.length; c++){
    console.log(lista[c])
}

for (pos in lista){ /* Posição */
    console.log(lista[pos])
}

for (item of lista){ /* Elemento */
    console.log(item)
}