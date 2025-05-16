function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.getNome = function(){
        return this.nome
    },

    this.getIdade = function(){
        return this.idade
    },

    this.setNome = function(nome){
        this.nome = nome
    },

    this.setIdade = function(idade){
        this.idade = idade
    }
}

const bnt_adicionar = document.querySelector("#adicionar");
const resultado = document.querySelector("#resultado");
let pessoas = [];

bnt_adicionar.addEventListener("click", () => {
    resultado.innerHTML = "";
    const input_nome = document.querySelector("#nome");
    const input_idade = document.querySelector("#idade");

    if (pessoas.length == 0) {
        const pessoa = new Pessoa(input_nome.value, input_idade.value)
        pessoas.push(pessoa);
        input_nome.value = ""
        input_idade.value = ""
        input_nome.focus()
        pessoas.map((p) => {
            resultado.innerHTML += `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}<br>`;
        })
    } else {
        const existe = jaCadastrado(input_nome.value, pessoas);
        if (existe) {
            resultado.innerHTML = "Essa pessoa já foi cadastrada!<br>Pessoas já cadastradas:<br>";
            input_nome.value = ""
            input_idade.value = ""
            input_nome.focus()
            pessoas.map((p) => {
                resultado.innerHTML += `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}<br>`;
            })
        } else {
            const pessoa = new Pessoa(input_nome.value, input_idade.value)
            pessoas.push(pessoa);
            input_nome.value = ""
            input_idade.value = ""
            input_nome.focus()
            pessoas.map((p) => {
                resultado.innerHTML += `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}<br>`;
            })
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