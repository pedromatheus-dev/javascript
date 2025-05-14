// Criando uma classe Aluno e adicionando métodos para manipular os dados do aluno

class Aluno{
    constructor(nome, idade, curso, instituicao, ira){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        switch (instituicao){
            case "UVA":
                this.instituicao = "Universidade Vale do Acaraú";
                break;
            case "UFC":
                this.instituicao = "Universidade Federal do Ceará";
                break;
            case "IFCE":
                this.instituicao = "Instituto Federal do Ceará";
                break;
            case "UFCG":
                this.instituicao = "Universidade Federal de Campina Grande";
                break;
        }
        this.ira = ira;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getCurso(){
        return this.curso;
    }

    getInstituicao(){
        return this.instituicao;
    }

    getIra(){
        return this.ira;
    }

    setNome(nome){
        this.nome = nome;
    }

    setIdade(idade){
        this.idade = idade;
    }

    setCurso(curso){
        this.curso = curso;
    }

    setInstituicao(instituicao){
        this.instituicao = instituicao;
    }

    setIra(ira){
        this.ira = ira;
    }
}

const aluno1 = new Aluno("Matheus", 21, "Ciência da Computação", "UVA", 8.5);
const aluno2 = new Aluno()

console.log(aluno1.getNome())
console.log(aluno1.getIdade())
console.log(aluno1.getCurso())
console.log(aluno1.getInstituicao())
console.log(aluno1.getIra())

aluno2.setNome("João")
aluno2.setIdade(22)
aluno2.setCurso("Engenharia de Software")
aluno2.setInstituicao("UFC")
aluno2.setIra(9.0)
console.log(aluno2.getNome())
console.log(aluno2.getIdade())
console.log(aluno2.getCurso())
console.log(aluno2.getInstituicao())
console.log(aluno2.getIra())