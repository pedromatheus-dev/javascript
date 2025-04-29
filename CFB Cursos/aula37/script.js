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