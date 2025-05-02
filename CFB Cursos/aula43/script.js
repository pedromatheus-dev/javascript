// Criando Elementos com JavaScript
// Removendo Elementos com JavaScript

const inputVazio = (input) => {
    if (input.value == ""){
        alert("Campo vazio!")
        return true
    }else{
        return false
    }
}

const primeiraDiv = document.getElementById("primeiro")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "React Native"]
const btn_adicionar = document.getElementById("adicionar")
const btn_remover = document.getElementById("remover")
const btn_cursoSelecionado = document.getElementById("cursoSelecionado")

cursos.map((curso, i) => {
    const div = document.createElement("div")
    div.setAttribute("id", `c${i + 1}`)
    div.setAttribute("class", "curso")
    div.innerHTML = curso
    
    const radio_button = document.createElement("input")
    radio_button.setAttribute("type", "radio")
    radio_button.setAttribute("name", "curso")
    radio_button.setAttribute("id", `c${i + 1}`)
    
    radio_button.setAttribute("value", curso)
    
    
    primeiraDiv.appendChild(div)
    div.appendChild(radio_button)
})

btn_adicionar.addEventListener("click", (evt) => {
    const cursoParaAdicionar = document.getElementById("curso")

    if (!inputVazio(cursoParaAdicionar)){

        const i = primeiraDiv.length
    
        const div = document.createElement("div")
        div.setAttribute("id", `c${i + 1}`)
        div.setAttribute("class", "curso")
        div.innerHTML = cursoParaAdicionar.value
    
        const radio_button = document.createElement("input")
        radio_button.setAttribute("type", "radio")
        radio_button.setAttribute("name", "curso")
        radio_button.setAttribute("id", `c${i + 1}`)
        radio_button.setAttribute("value", cursoParaAdicionar.value)
    
        primeiraDiv.appendChild(div)
        div.appendChild(radio_button)
    }
})

btn_remover.addEventListener("click", (evt) => {
    const cursoSelecionado = document.querySelector('input[name="curso"]:checked')
    primeiraDiv.removeChild(cursoSelecionado.parentElement)
})

btn_cursoSelecionado.addEventListener("click", (evt) => {
    // const todosCursos = [...document.querySelectorAll("input[type=radio]")]
    // let curso = todosCursos.filter((cursoMarcado) => {
    //     if (cursoMarcado.checked){
    //         return cursoMarcado
    //     }
    // })

    const cursoSelecionado = document.querySelector('input[name="curso"]:checked')
        alert(`Curso selecionado: ${cursoSelecionado.value}`)

})