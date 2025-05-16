const Pessoa = {
    nome: "",
    idade: 0,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

const bnt_adicionar = document.querySelector("#adicionar");
const resultado = document.querySelector("#resultado");
let pessoas = [];

bnt_adicionar.addEventListener("click", () => {
    const input_nome = document.querySelector("#nome");
    const input_idade = document.querySelector("#idade");

    if (pessoas.length == 0) {
        Pessoa.nome = input_nome.value
        Pessoa.idade = input_idade.value
        resultado.innerHTML += `Nome: ${Pessoa.getNome()}<br>Idade: ${Pessoa.getIdade()}<br>`;
        input_nome.value = ""
        input_idade.value = ""
        input_nome.focus()
    } else {
        const existe = jaCadastrado(input_nome.value, pessoas);
        if (existe) {
            resultado.innerHTML = "Essa pessoa já foi cadastrada!"
        } else {
            Pessoa.nome = input_nome.value
            Pessoa.idade = input_idade.value
            resultado.innerHTML += `Nome: ${Pessoa.getNome()}<br>Idade: ${Pessoa.getIdade()}<br>`;
            input_nome.value = ""
            input_idade.value = ""
            input_nome.focus()
        }
    }

})

const jaCadastrado = (nome, lista) => {
    let existe = false;
    lista.map((p) => {
        if (p.nome === nome) {
            existe = true;
        }
    })
    return existe;
}