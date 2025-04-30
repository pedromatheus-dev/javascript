// Stop Propagation
// O stopPropagation impede que o evento de clique na div "primeiraDiv" seja propagado para os elementos filhos, ou seja, os cursos.

const primeiraDiv = document.getElementById("primeiro")
const cursos = [...document.getElementsByClassName("curso")]

primeiraDiv.addEventListener('click', () => {
    console.log("Primeira div clicada")
})

cursos.map((item) => {
    item.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
})