// Criando Elementos com JavaScript
// Removendo Elementos com JavaScript


const primeiraDiv = document.getElementById("primeiro")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "React Native"]
const btn_adicionar_antes = document.getElementById("adicionar_antes")
const btn_adicionar_depois = document.getElementById("adicionar_depois")
const btn_remover = document.getElementById("remover")
const btn_cursoSelecionado = document.getElementById("cursoSelecionado")

const inputVazio = (input) => {
    if (input.value == ""){
        alert("Campo vazio!")
        return true
    }else{
        return false
    }
}

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

btn_adicionar_antes.addEventListener("click", (evt) => {
    const cursoParaAdicionar = document.getElementById("curso")
    const cursoSelecionado = document.querySelector('input[type=radio]:checked').parentElement
    const i = cursoSelecionado.id.substring(1)

    if (!inputVazio(cursoParaAdicionar)){

    
        const div = document.createElement("div")
        div.setAttribute("id", `c${i}`)
        div.setAttribute("class", "curso")
        div.innerHTML = cursoParaAdicionar.value
    
        const radio_button = document.createElement("input")
        radio_button.setAttribute("type", "radio")
        radio_button.setAttribute("name", "curso")
        radio_button.setAttribute("id", `c${i}`)
        radio_button.setAttribute("value", cursoParaAdicionar.value)
    
        // primeiraDiv.appendChild(div)
        cursoSelecionado.insertAdjacentElement("beforebegin", div)
        div.appendChild(radio_button)
    }

    for (elem of primeiraDiv.children){
        let i_elem = Number(elem.id.substring(1))
        if (i_elem >= i && !(elem == primeiraDiv.lastElementChild)){
            elem.nextElementSibling.id = `c${i_elem + 1}`
        }
        
    }
})

btn_adicionar_depois.addEventListener("click", (evt) => {
    const cursoParaAdicionar = document.getElementById("curso")
    const cursoSelecionado = document.querySelector('input[type=radio]:checked').parentElement
    const i = cursoSelecionado.id.substring(1)

    if (!inputVazio(cursoParaAdicionar)){

    
        const div = document.createElement("div")
        div.setAttribute("id", `c${i}`)
        div.setAttribute("class", "curso")
        div.innerHTML = cursoParaAdicionar.value
    
        const radio_button = document.createElement("input")
        radio_button.setAttribute("type", "radio")
        radio_button.setAttribute("name", "curso")
        radio_button.setAttribute("id", `c${i}`)
        radio_button.setAttribute("value", cursoParaAdicionar.value)
    
        // primeiraDiv.appendChild(div)
        cursoSelecionado.insertAdjacentElement("afterend", div)
        div.appendChild(radio_button)
    }

    for (elem of primeiraDiv.children){
        let i_elem = Number(elem.id.substring(1))
        if (i_elem >= i && !(elem == primeiraDiv.lastElementChild)){
            elem.nextElementSibling.id = `c${i_elem + 1}`
        }
        
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