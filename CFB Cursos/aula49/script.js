// Método some() - Verifica se algum elemento do array atende a condição passada como parâmetro
const array = document.querySelector("#array")
const txt_verificar = document.querySelector("#txt_verificar")
const btn_verificar = document.querySelector("#btn_verificar")
const resultado = document.querySelector("#resultado")

const elementosArray = [13, 12, 15, 17, 10, 9, 7]
array.innerHTML = `[${elementosArray}]`

btn_verificar.addEventListener("click", (evt) => {
    const retorno = elementosArray.some((e, i) => {
        if (e < 18){
            resultado.innerHTML = "Array sem conformidade"
            return false
            
        }else{
            return e >= 18
        }
    })
    if (retorno){
        resultado.innerHTML = "Array em conformidade"
    }
})