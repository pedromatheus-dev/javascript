// Operador Spread

let elemDOM = document.getElementsByTagName('div')
let arrayDOM = [...elemDOM]

console.log(elemDOM)
console.log(arrayDOM)

arrayDOM.forEach(elementArray => {
    console.log(elementArray)
    elementArray.innerText = "Troquei elemento"
});


