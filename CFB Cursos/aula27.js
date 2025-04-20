// Funcões geradoras

// -----------------------------------------------------------
function* cores(){
    yield 'Vermelho'
    yield 'Azul'
    yield 'Amarelo'
}

let iteratorCores = cores()

console.log(iteratorCores.next().value)
console.log(iteratorCores.next().value)
console.log(iteratorCores.next().value)
console.log(iteratorCores.next().done)
// -----------------------------------------------------------
function* perguntas(){
    let nome = yield "Qual o seu nome?"
    let peso = yield "Qual o seu peso?"
    return `Seu nome é ${nome} e seu peso é ${peso}`
}

let iteratorPerguntas = perguntas()

console.log(iteratorPerguntas.next().value)
console.log(iteratorPerguntas.next("Matheus").value)
console.log(iteratorPerguntas.next(75).value)

// -----------------------------------------------------------
function* contador(){
    let cont = 0
    while (true){
        yield cont++
    }
}

let iteratorContador = contador()

for (let elem of iteratorContador){
    console.log(elem)
}
// -----------------------------------------------------------