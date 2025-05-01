// Relacionando com o DOM - Parte 2

const primeiraDiv = document.getElementById("primeiro")
const cursos = [...document.getElementsByClassName("curso")]

console.log(cursos[0].parentElement.children[0])
console.log(cursos[0].parentElement.parentElement)

console.log(primeiraDiv.children.length > 0 ? "Tem filhos" : "Não tem filhos")

console.log(primeiraDiv.hasChildNodes())
console.log(primeiraDiv.children)
