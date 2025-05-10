const operacoes = [
    (elementosArray) => {
        const soma = elementosArray.reduce((acumulador, elem) => acumulador + elem, 0)
        console.log(`Soma: ${soma}`);
    },
    (elementosArray) => {
        const multiplicacao = elementosArray.reduce((acumuldador, elem) => acumuldador * elem, 1)
        console.log(`Multiplicação: ${multiplicacao}`);
    },
    elementosArray => {
        elementosArray.map((elem) => console.log(`Elemento: ${elem}`))
    }
    
]

const numeros = [1, 2, 3, 4, 5]

operacoes[0](numeros)
operacoes[1](numeros)
operacoes[2](numeros)