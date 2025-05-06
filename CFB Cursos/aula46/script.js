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
const criarNovoCurso = (curso, i) => {
    const div = document.createElement("div")
    div.setAttribute("id", `c${i}`)
    div.setAttribute("class", "curso")
    div.innerHTML = curso
    div.addEventListener('click', (evt) =>{
        let todosCursos = [...primeiraDiv.children]
        todosCursos.map((curso) => {
            curso.addEventListener("click", (evt) => {
                todosCursos.map((elem) => {
                    if (elem.classList.contains("destaque")){
                        elem.classList.toggle("destaque")
                    }
                })
                evt.target.classList.toggle("destaque")
                
            })
        })
    })
    return div
}

cursos.map((curso, i) => {
    let novoCurso = criarNovoCurso(curso, i + 1)
    primeiraDiv.appendChild(novoCurso)
})



const corrigirId = (i) => {
    for (elem of primeiraDiv.children){
        let i_elem = Number(elem.id.substring(1))
        if (i_elem >= i && !(elem == primeiraDiv.lastElementChild)){
            elem.nextElementSibling.id = `c${i_elem + 1}`
        }
    }
}



btn_adicionar_antes.addEventListener("click", (evt) => {
    const cursoParaAdicionar = document.getElementById("curso")
    const cursoSelecionado = document.querySelector('div.destaque')
    const i = cursoSelecionado.id.substring(1)

    if (!inputVazio(cursoParaAdicionar)){
        const div = criarNovoCurso(cursoParaAdicionar.value, i)
        primeiraDiv.insertBefore(div, cursoSelecionado)
        // cursoSelecionado.insertAdjacentElement("beforebegin", div)
    }

    corrigirId(i)
})

btn_adicionar_depois.addEventListener("click", (evt) => {
    const cursoParaAdicionar = document.getElementById("curso")
    const cursoSelecionado = document.querySelector('div.destaque')
    const i = cursoSelecionado.id.substring(1)
    
    if (!inputVazio(cursoParaAdicionar)){
        const div = criarNovoCurso(cursoParaAdicionar.value, i)
        primeiraDiv.insertBefore(div, cursoSelecionado.nextElementSibling)
        // cursoSelecionado.insertAdjacentElement("afterend", div)

    }

    corrigirId(i)
    
})

btn_remover.addEventListener("click", (evt) => {
    const cursoSelecionado = document.querySelector('div.destaque')
    primeiraDiv.removeChild(cursoSelecionado)
})

btn_cursoSelecionado.addEventListener("click", (evt) => {
    const cursoSelecionado = document.querySelector('div.destaque')
    alert(`Curso selecionado: ${cursoSelecionado.innerHTML}`)

})