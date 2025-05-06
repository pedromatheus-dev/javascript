// Aula 47 - Array - Método find()
const array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btn_pesquisar = document.querySelector("#btn_pesquisar")
const resultado = document.querySelector("#resultado")

const elementosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.innerHTML = `[${elementosArray}]`

btn_pesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor <strong>não encontrado</strong>"
    elementosArray.find((elem, ind) => {
        if (elem == txt_pesquisar.value){
            resultado.innerHTML = `Elemento <strong>${elem}</strong> encontrado na posição <strong>${ind}</strong>`
            return true
        }
        return false
    })
})