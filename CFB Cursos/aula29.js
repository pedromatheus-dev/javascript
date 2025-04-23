// Uso do this em objetos
// this é uma referência ao objeto que está chamando a função

function aluno(nome, nota){
    this.nome = nome
    this.nota = nota
    this.dados_anonimo = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 3000)
    }
    this.dados_arrow = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }

}

const aluno1 = new aluno("Matheus", 10)
aluno1.dados_anonimo()
aluno1.dados_arrow()
