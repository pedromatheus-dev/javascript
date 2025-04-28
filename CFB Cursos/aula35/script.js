let primeiroDiv = document.getElementById('primeiro')
let segundaDiv = document.getElementById('segundo')
let botao = document.querySelector("input[type='submit']")
let cursos = [...document.querySelectorAll(".curso")]


cursos.map((item) =>{
    item.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle("destaque")
    })
})

let copiar = () => {
    let cursosSelecionados = [...document.querySelectorAll('.destaque')]
    cursosSelecionados.map((item) => {
        segundaDiv.appendChild(item)
    })
}

botao.addEventListener('click', copiar)
