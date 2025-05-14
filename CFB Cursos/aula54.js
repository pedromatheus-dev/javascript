// Coleções - Map
// Map é uma coleção de chave-valor, onde as chaves podem ser de qualquer tipo e os valores também

let aluno = new Map()

// Adicionando valores ao Map
aluno.set("nome", "Matheus")
aluno.set("idade", 21)
aluno.set("curso", "Ciência da Computação")
aluno.set("ira", 8.79)
aluno.set("semestre", 5)
aluno.set("altura", 1.83)

// método get() para acessar o valor de uma chave
console.log(aluno.get("nome"))

// método has() para verificar se a chave existe
console.log(aluno.has("altura"))
console.log(aluno.has("ira") ? `O aluno tem ira: ${aluno.get("ira")}` : "O aluno não tem ira")
console.log(aluno.has("altura"))

// método delete() para remover um valor
aluno.has("altura") ? aluno.delete("altura") : ""

// tamanho do Map
console.log(aluno.size) 

// método keys() para acessar as chaves
console.log(aluno.keys())

// método values() para acessar os valores
let v = [...aluno.values()]
v.map((valor) => {
    console.log(valor)
})
console.log(aluno.values())

// método clear() para remover todos os valores
aluno.clear()
console.log(aluno.size)