// Elementos iteráveis

const valores = [1, 2, 3, 4, 5];
const iteradorValores = valores[Symbol.iterator]();

console.log(iteradorValores.next())
console.log(iteradorValores.next())
console.log(iteradorValores.next())
console.log(iteradorValores.next())
console.log(iteradorValores.next())
console.log(iteradorValores.next())

const curso = "React JS"
const iteradorCurso = curso[Symbol.iterator]();

console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())
console.log(iteradorCurso.next())