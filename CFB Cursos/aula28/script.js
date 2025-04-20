// MAP

let valores = ["HTML", "CSS", "Javascript", "React"]

let res = valores.map((e, i) => {
    console.log(`Elemento ${e} na posição ${i}`)
})

// ------------------------------------------------------

// let elementos = document.getElementsByTagName('div')
// elementos = [...elementos]
// let rename = elementos.map((e, i) => {
//     e.innerHTML = "CFB Cursos " + i
// })

// ------------------------------------------------------

// let elementos2 = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(elementos2, ({innerHTML}) => innerHTML)
// console.log(val)
// ------------------------------------------------------

let converterInt = n => parseInt(n)
let dobro = n => n**2

let valoresInt = ["1", "2", "3", "4"].map(converterInt)
let valoresDobro = ["1", "2", "3", "4"].map(dobro)
console.log(valoresInt)
console.log(valoresDobro)