// Criando Elementos com JavaScript

const primeiraDiv = document.getElementById("primeiro")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "Python"]

cursos.map((curso, i) => {
    const div = document.createElement("div")
    div.setAttribute("id", `c${i + 1}`)
    div.setAttribute("class", "curso")
    div.innerHTML = curso
    primeiraDiv.appendChild(div)
})
