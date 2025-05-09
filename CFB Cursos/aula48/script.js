// Método every() - Verifica se todos os elementos do array atendem a condição passada como parâmetro
const array = document.querySelector("#array")
const txt_verificar = document.querySelector("#txt_verificar")
const btn_verificar = document.querySelector("#btn_verificar")
const resultado = document.querySelector("#resultado")

const elementosArray = [19, 15, 15, 18, 18, 18, 20]
array.innerHTML = `[${elementosArray}]`

btn_verificar.addEventListener("click", (evt) => {
    const retorno = elementosArray.every((e, i) => {
        if (e < 18){
            resultado.innerHTML = "Array sem conformidade na posição " + i
            return false
            
        }else{
            return e >= 18
        }
    })
    if (retorno){
        resultado.innerHTML = "Array em conformidade"
    }
})