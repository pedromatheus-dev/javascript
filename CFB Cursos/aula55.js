// Coleção - Set

// Set é uma coleção de valores únicos, onde não é possível ter valores duplicados

let listaCompras = new Set()

listaCompras.add("arroz")
listaCompras.add("feijão")
listaCompras.add("carne")
listaCompras.add("fruta")
listaCompras.add("verdura")
listaCompras.add("arroz") // não é possível adicionar valores duplicados

// método has() para verificar se o valor existe
console.log(listaCompras.has("arroz")) // true
console.log(listaCompras.has("leite")) // false

// método delete() para remover um valor
listaCompras.delete("arroz")

// método size para verificar o tamanho do Set
console.log(listaCompras.size)


// método forEach() para iterar sobre os valores
listaCompras.forEach((compra) => {
    console.log(compra)
})

// método clear() para remover todos os valores
listaCompras.clear()
console.log(listaCompras.size)