let primeiroDiv = document.getElementById('primeiro')
let segundaDiv = document.getElementById('segundo')
let botaoCopiar = document.querySelector("#btn-copiar")
let botaoVoltar = document.querySelector("#btn-voltar")
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

let voltar = () => {
    let cursosSelecionados = [...document.querySelectorAll('.curso')]
    cursosSelecionados.map((item) => {
        !(item.classList.contains('destaque')) ? primeiroDiv.appendChild(item) : ''
    })

}

botaoCopiar.addEventListener('click', copiar)
botaoVoltar.addEventListener('click', voltar)

