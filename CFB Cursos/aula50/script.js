// Método reduce() 
const array = document.querySelector("#array")
const txt_reduzir = document.querySelector("#txt_reduzir")
const btn_reduzir = document.querySelector("#btn_reduzir")
const resultado = document.querySelector("#resultado")

const elementosArray = [1, 3, 5, 7, 9]
array.innerHTML = `[${elementosArray}]`

btn_reduzir.addEventListener("click", (evt) => {
    const soma = elementosArray.reduce((acumulador, elem) => acumulador + elem, 0)
    const multiplicacao = elementosArray.reduce((acumulador, elem) => acumulador * elem, 1 )
    resultado.innerHTML = `Soma dos elementos do array: ${soma} <br> Multiplicação dos elementos do array: ${multiplicacao}`
})