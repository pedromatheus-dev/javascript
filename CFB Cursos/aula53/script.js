const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const soma = document.getElementById('soma');
const subtracao = document.getElementById('subtracao');
const multiplicacao = document.getElementById('multiplicacao');
const divisao = document.getElementById('divisao');
const resultado = document.getElementById('resultado');

const operacoes = [
    (n1, n2) => resultado.innerHTML = n1 + n2,
    (n1, n2) => resultado.innerHTML = n1 - n2,
    (n1, n2) => resultado.innerHTML = n1 * n2,
    (n1, n2) => resultado.innerHTML = n1 / n2
]

soma.addEventListener('click', operacoes[0](Number(n1.value), Number(n2.value)))
subtracao.addEventListener('click', operacoes[1](Number(n1.value), Number(n2.value)))
multiplicacao.addEventListener('click', operacoes[2](Number(n1.value), Number(n2.value)))
divisao.addEventListener('click', operacoes[3](Number(n1.value), Number(n2.value)))