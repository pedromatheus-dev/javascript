// Relação de elementos no DOM
// parentElement, children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling

const primeiraDiv = document.getElementById("primeiro")
const cursos = [...document.getElementsByClassName("curso")]

console.log(primeiraDiv.children)
console.log(primeiraDiv.firstElementChild.innerHTML)
console.log(primeiraDiv.lastElementChild.innerHTML)

console.log(cursos[0].parentElement)
console.log(cursos[0].nextElementSibling)
console.log(cursos[3].previousElementSibling)

console.log(document.body.ownerDocument)
console.log(document.getRootNode())