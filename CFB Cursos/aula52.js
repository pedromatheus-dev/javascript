// Manipulando Arrays

let cursosTecnologia = ["JavaScript", "Python", "Java",];
let cursosPsicologia = ["Psicologia Cognitiva", "Psicologia Comportamental", "Psicologia Social"]
let cursosDireito = ["Direito Constitucional", "Direito Administrativo", "Direito Tributário"]
let cursos = [cursosTecnologia, cursosPsicologia, cursosDireito];

console.log(cursos[0][1])

cursos.map((curso) => {
    curso.map((c) => {
        console.log(c);
    })
})