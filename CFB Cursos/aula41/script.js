// Criando Elementos com JavaScript
// Removendo Elementos com JavaScript

const primeiraDiv = document.getElementById("primeiro")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "Python"]

cursos.map((curso, i) => {
    const div = document.createElement("div")
    div.setAttribute("id", `c${i + 1}`)
    div.setAttribute("class", "curso")
    div.innerHTML = curso
    
    const lixeira = document.createElement("img")
    lixeira.setAttribute("src", "lixeira.png")
    lixeira.setAttribute("alt", "lixeira")
    lixeira.setAttribute("class", "lixeira")
    lixeira.addEventListener("click", (evt) => {
        primeiraDiv.removeChild(evt.target.parentElement)
    })
    
    primeiraDiv.appendChild(div)
    div.appendChild(lixeira)
})
